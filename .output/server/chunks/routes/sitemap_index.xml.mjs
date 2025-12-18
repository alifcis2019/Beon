import { q as defineEventHandler, O as sitemapIndexXmlEventHandler } from '../nitro/nitro.mjs';
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
import 'vue';
import 'vue-router';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import '@iconify/utils';
import 'better-sqlite3';
import 'ipx';

const sitemap_index_xml = defineEventHandler(sitemapIndexXmlEventHandler);

export { sitemap_index_xml as default };
//# sourceMappingURL=sitemap_index.xml.mjs.map
