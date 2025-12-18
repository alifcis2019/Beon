<template>
  <picture v-bind="attrs.picture">
    <template v-for="(source, index) of sources">
      <source
        v-if="index + 1 < sources.length"
        :key="source.src"
        :type="source.type"
        :sizes="source.sizes"
        :srcset="source.srcset"
      >
      <img
        v-else
        ref="imgEl"
        :key="'last' + source.src"
        v-bind="attrs.img"
        :src="source.src"
        :sizes="source.sizes"
        :srcset="source.srcset"
      >
    </template>
  </picture>
</template>

<script setup>
import { computed, onMounted, useAttrs, useTemplateRef } from "vue";
import { prerenderStaticImages } from "../utils/prerender";
import { markFeatureUsage } from "../utils/performance";
import { useImage } from "../composables";
import { useImageProps } from "../utils/props";
import { useHead, useNuxtApp, useRequestEvent } from "#imports";
defineOptions({ inheritAttrs: false });
defineSlots();
const props = defineProps({
  legacyFormat: { type: String, required: false },
  imgAttrs: { type: Object, required: false },
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
const _attrs = useAttrs();
const imageAttrNames = /* @__PURE__ */ new Set(["alt", "referrerpolicy", "usemap", "longdesc", "ismap", "loading", "crossorigin", "decoding", "nonce"]);
const attrs = computed(() => {
  const attrs2 = {
    img: {
      ...normalizedAttrs.value,
      ...props.imgAttrs,
      ...import.meta.server ? { onerror: "this.setAttribute('data-error', 1)" } : {},
      "data-nuxt-pic": ""
    },
    picture: {}
  };
  for (const key in _attrs) {
    if (imageAttrNames.has(key)) {
      if (!(key in attrs2.img)) {
        attrs2.img[key] = _attrs[key];
      }
    } else {
      attrs2.picture[key] = _attrs[key];
    }
  }
  return attrs2;
});
const originalFormat = computed(() => props.src?.match(/^[^?#]+\.(\w+)(?:$|[?#])/)?.[1]);
const legacyFormat = computed(() => {
  if (props.legacyFormat) {
    return props.legacyFormat;
  }
  const isNotTransparent = !originalFormat.value || !["png", "webp", "gif", "svg"].includes(originalFormat.value);
  return isNotTransparent ? "jpeg" : "png";
});
const $img = useImage();
const { providerOptions, imageModifiers, normalizedAttrs } = useImageProps(props);
const sources = computed(() => {
  const formats = props.format?.split(",") || (originalFormat.value === "svg" ? ["svg"] : $img.options.format?.length ? [...$img.options.format] : ["webp"]);
  if (formats[0] === "svg") {
    return [{ src: props.src }];
  }
  if (!formats.includes(legacyFormat.value)) {
    formats.push(legacyFormat.value);
  } else {
    formats.splice(formats.indexOf(legacyFormat.value), 1);
    formats.push(legacyFormat.value);
  }
  return formats.map((format) => {
    const { srcset, sizes, src } = $img.getSizes(props.src, {
      ...providerOptions.value,
      sizes: props.sizes || $img.options.screens,
      densities: props.densities,
      modifiers: { ...imageModifiers.value, format }
    });
    return { src, type: `image/${format}`, sizes, srcset };
  });
});
if (import.meta.server && props.preload) {
  useHead({ link: () => {
    const firstSource = sources.value[0];
    if (!firstSource) {
      return [];
    }
    const link = {
      rel: "preload",
      as: "image",
      imagesrcset: firstSource.srcset,
      nonce: props.nonce,
      ...typeof props.preload !== "boolean" && props.preload?.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
    };
    if (sources.value?.[0]?.sizes) {
      link.imagesizes = sources.value[0].sizes;
    }
    return [link];
  } });
}
if (import.meta.server && import.meta.prerender) {
  for (const src of sources.value) {
    prerenderStaticImages(src.src, src.srcset, useRequestEvent());
  }
}
const nuxtApp = useNuxtApp();
const initialLoad = nuxtApp.isHydrating;
const imgEl = useTemplateRef("imgEl");
onMounted(() => {
  const el = Array.isArray(imgEl.value) ? imgEl.value[0] : imgEl.value;
  if (!el) {
    return;
  }
  if (el.complete && initialLoad) {
    if (el.getAttribute("data-error")) {
      emit("error", new Event("error"));
    } else {
      emit("load", new Event("load"));
    }
  }
  el.onload = (event) => {
    emit("load", event);
  };
  el.onerror = (event) => {
    emit("error", event);
  };
  markFeatureUsage("nuxt-picture");
});
</script>

<script>

</script>
