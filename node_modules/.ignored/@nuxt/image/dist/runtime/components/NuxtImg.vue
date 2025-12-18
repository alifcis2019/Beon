<template>
  <img
    v-if="!custom"
    ref="imgEl"
    :class="placeholder ? placeholderClass : void 0"
    v-bind="imgAttrs"
    :src="src"
  >
  <slot
    v-else
    v-bind="{
  imgAttrs,
  isLoaded: placeholderLoaded,
  src
}"
  />
</template>

<script setup>
import { computed, onMounted, ref, useAttrs, useTemplateRef } from "vue";
import { useImage } from "../composables";
import { prerenderStaticImages } from "../utils/prerender";
import { markFeatureUsage } from "../utils/performance";
import { useImageProps } from "../utils/props";
import { useHead, useNuxtApp, useRequestEvent } from "#imports";
const props = defineProps({
  custom: { type: Boolean, required: false },
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  src: { type: String, required: false },
  format: { type: String, required: false },
  quality: { type: [String, Number], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  preset: { type: String, required: false },
  provider: { type: null, required: false },
  sizes: { type: [String, Object], required: false },
  densities: { type: String, required: false },
  preload: { type: [Boolean, Object], required: false },
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  crossorigin: { type: [String, Boolean], required: false },
  nonce: { type: String, required: false }
});
const emit = defineEmits(["load", "error"]);
defineSlots();
const $img = useImage();
const { providerOptions, normalizedAttrs, imageModifiers } = useImageProps(props);
const sizes = computed(() => $img.getSizes(props.src, {
  ...providerOptions.value,
  sizes: props.sizes,
  densities: props.densities,
  modifiers: imageModifiers.value
}));
const placeholderLoaded = ref(false);
const attrs = useAttrs();
const imgAttrs = computed(() => ({
  ...normalizedAttrs.value,
  "data-nuxt-img": "",
  ...!props.placeholder || placeholderLoaded.value ? { sizes: sizes.value.sizes, srcset: sizes.value.srcset } : {},
  ...import.meta.server ? { onerror: "this.setAttribute('data-error', 1)" } : {},
  ...attrs
}));
const placeholder = computed(() => {
  if (placeholderLoaded.value) {
    return false;
  }
  const placeholder2 = props.placeholder === "" ? [10, 10] : props.placeholder;
  if (!placeholder2) {
    return false;
  }
  if (typeof placeholder2 === "string") {
    return placeholder2;
  }
  const [width = 10, height = width, quality = 50, blur = 3] = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2] : [];
  return $img(props.src, {
    ...imageModifiers.value,
    width,
    height,
    quality,
    blur
  }, providerOptions.value);
});
const mainSrc = computed(
  () => props.sizes ? sizes.value.src : $img(props.src, imageModifiers.value, providerOptions.value)
);
const src = computed(() => placeholder.value || mainSrc.value);
if (import.meta.server && props.preload) {
  const hasMultipleDensities = sizes.value.srcset.includes("x, ");
  const isResponsive = hasMultipleDensities || !!sizes.value.sizes;
  useHead({
    link: [{
      rel: "preload",
      as: "image",
      nonce: props.nonce,
      crossorigin: normalizedAttrs.value.crossorigin,
      href: isResponsive ? sizes.value.src : src.value,
      ...sizes.value.sizes && { imagesizes: sizes.value.sizes },
      ...hasMultipleDensities && { imagesrcset: sizes.value.srcset },
      ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
    }]
  });
}
if (import.meta.server && import.meta.prerender) {
  prerenderStaticImages(src.value, sizes.value.srcset, useRequestEvent());
}
const initialLoad = useNuxtApp().isHydrating;
const imgEl = useTemplateRef("imgEl");
defineExpose({ imgEl });
onMounted(() => {
  if (placeholder.value || props.custom) {
    const img = new Image();
    if (mainSrc.value) {
      img.src = mainSrc.value;
    }
    if (props.sizes) {
      img.sizes = sizes.value.sizes || "";
      img.srcset = sizes.value.srcset;
    }
    if (img.decode) {
      img.decode().then(() => {
        placeholderLoaded.value = true;
        emit("load", new Event("load"));
      }).catch((error) => {
        emit("error", error);
      });
    } else {
      img.onload = (event) => {
        placeholderLoaded.value = true;
        emit("load", event);
      };
      img.onerror = (event) => {
        emit("error", event);
      };
    }
    markFeatureUsage("nuxt-image");
    return;
  }
  if (!imgEl.value) {
    return;
  }
  if (imgEl.value.complete && initialLoad) {
    if (imgEl.value.getAttribute("data-error")) {
      emit("error", new Event("error"));
    } else {
      emit("load", new Event("load"));
    }
  }
  imgEl.value.onload = (event) => {
    emit("load", event);
  };
  imgEl.value.onerror = (event) => {
    emit("error", event);
  };
});
</script>

<script>

</script>
