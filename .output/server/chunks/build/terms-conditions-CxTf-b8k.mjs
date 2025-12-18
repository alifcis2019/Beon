import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { e as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'better-sqlite3';
import 'ipx';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import 'minimark/hast';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "terms-conditions",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Terms & Conditions - BeOn",
      description: "Terms and Conditions for BeOn services."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-32" }, _attrs))}><div class="mx-auto max-w-3xl px-6 lg:px-8"><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-10"> Terms &amp; Conditions </h1><div class="prose dark:prose-invert max-w-none"><p class="lead"> Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><h2>1. Agreement to Terms</h2><p> These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and BeOn (“we,” “us” or “our”), concerning your access to and use of the BeOn website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). </p><h2>2. Intellectual Property Rights</h2><p> Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. </p><h2>3. User Representations</h2><p>By using the Site, you represent and warrant that:</p><ul><li> All registration information you submit will be true, accurate, current, and complete. </li><li> You will maintain the accuracy of such information and promptly update such registration information as necessary. </li><li> You have the legal capacity and you agree to comply with these Terms and Conditions. </li><li>You are not a minor in the jurisdiction in which you reside.</li></ul><h2>4. Prohibited Activities</h2><p> You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. </p><h2>5. Termination</h2><p> We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. </p><h2>6. Contact Us</h2><p> In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: support@beon.chat </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-conditions-CxTf-b8k.mjs.map
