import { loadVueI18nOptions } from "./messages.js";
import { localeCodes as _localeCodes, vueI18nConfigs } from "#build/i18n-options.mjs";
export const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of _localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};
