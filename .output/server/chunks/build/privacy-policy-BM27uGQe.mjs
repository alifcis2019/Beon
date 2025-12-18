import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { f as useSeoMeta } from './server.mjs';
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
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Privacy Policy - BeOn",
      description: "Privacy Policy for BeOn services."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-24 sm:py-32" }, _attrs))}><div class="mx-auto max-w-3xl px-6 lg:px-8"><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-10"> Privacy Policy </h1><div class="prose dark:prose-invert max-w-none"><p class="lead"> Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><h2>1. Introduction</h2><p> Welcome to BeOn. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you. </p><h2>2. Data We Collect</h2><p> We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: </p><ul><li><strong>Identity Data</strong> includes first name, last name, username or similar identifier. </li><li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers. </li><li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website. </li></ul><h2>3. How We Use Your Data</h2><p> We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: </p><ul><li> Where we need to perform the contract we are about to enter into or have entered into with you. </li><li> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. </li><li> Where we need to comply with a legal or regulatory obligation. </li></ul><h2>4. Data Security</h2><p> We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. </p><h2>5. Contact Us</h2><p> If you have any questions about this privacy policy or our privacy practices, please contact us at: support@beon.chat </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-policy-BM27uGQe.mjs.map
