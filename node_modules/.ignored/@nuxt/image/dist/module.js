import process$1 from 'node:process';
import { hasProtocol, parseURL, withLeadingSlash } from 'ufo';
import { createResolver, useNitro, useNuxt, useLogger, resolvePath, defineNuxtModule, addTypeTemplate, addImports, addComponent, addTemplate, addServerImports, addServerTemplate, addPlugin } from '@nuxt/kit';
import { relative, join, normalize, resolve } from 'pathe';
import { defu } from 'defu';
import { hash } from 'ohash';
import { genSafeVariableName } from 'knitwork';
import { provider } from 'std-env';
import { platform, arch } from 'node:os';
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const ipxSetup = (setupOptions) => (providerOptions, moduleOptions) => {
  const resolver = createResolver(import.meta.url);
  const nitro = useNitro();
  const nuxt = useNuxt();
  const ipxBaseURL = providerOptions.options?.baseURL || "/_ipx";
  const hasUserProvidedIPX = nuxt.options.serverHandlers.find((handler) => handler.route?.startsWith(ipxBaseURL)) || nuxt.options.devServerHandlers.find((handler) => handler.route?.startsWith(ipxBaseURL)) || hasProtocol(ipxBaseURL, { acceptRelative: true });
  if (hasUserProvidedIPX) {
    return;
  }
  const relativeDir = relative(nitro.options.output.serverDir, nitro.options.output.publicDir);
  const ipxOptions = {
    ...providerOptions.options,
    baseURL: ipxBaseURL,
    alias: {
      ...moduleOptions.alias,
      ...providerOptions.options?.alias
    },
    fs: providerOptions.options?.fs !== false && {
      dir: nuxt.options.dev ? moduleOptions.dirs : relativeDir,
      ...providerOptions.options?.fs
    },
    http: providerOptions.options?.http !== false && {
      domains: moduleOptions.domains,
      ...providerOptions.options?.http
    }
  };
  nitro.options._config.runtimeConfig = nitro.options._config.runtimeConfig || {};
  nitro.options.runtimeConfig.ipx = ipxOptions;
  const ipxHandler = {
    route: `${ipxBaseURL}/**`,
    middleware: false,
    handler: resolver.resolve("./runtime/server/routes/_ipx")
  };
  if (!setupOptions?.isStatic) {
    nitro.options.handlers.push(ipxHandler);
  }
  if (!nitro.options.dev) {
    nitro.options._config.runtimeConfig.ipx = defu({ fs: { dir: moduleOptions.dirs } }, ipxOptions);
    nitro.options._config.handlers.push(ipxHandler);
  }
  if (!nuxt.options.dev && !setupOptions?.isStatic) {
    nitro.hooks.hook("compiled", async () => {
      const logger = useLogger("@nuxt/image");
      const target = `${platform}-${arch}`;
      const tracedFiles = await readdir(join(nitro.options.output.serverDir, "node_modules/@img")).catch(() => []);
      if (!tracedFiles.length) {
        logger.warn(`\`sharp\` binaries for \`${target}\` cannot be found. Please report this as a bug with a reproduction at \`https://github.com/nuxt/image\`.`);
      } else {
        logger.info(`\`sharp\` binaries have been included in your build for \`${target}\`. Make sure you deploy to the same architecture.`);
        logger.debug(` - dependencies traced: ${tracedFiles.map((f) => `@img/${f}`).join(", ")}`);
      }
    });
  }
};

const BuiltInProviders = [
  "aliyun",
  "awsAmplify",
  "bunny",
  "caisy",
  "cloudflare",
  "cloudimage",
  "cloudinary",
  "contentful",
  "directus",
  "fastly",
  "filerobot",
  "github",
  "glide",
  "gumlet",
  "hygraph",
  "imageengine",
  "imagekit",
  "imgix",
  "ipx",
  "ipxStatic",
  "netlify",
  "netlifyLargeMedia",
  "netlifyImageCdn",
  "prepr",
  "none",
  "prismic",
  "sanity",
  "shopify",
  "storyblok",
  "strapi",
  "strapi5",
  "twicpics",
  "unsplash",
  "uploadcare",
  "vercel",
  "wagtail",
  "weserv",
  "sirv"
];
const providerSetup = {
  // IPX
  ipx: ipxSetup(),
  ipxStatic: ipxSetup({ isStatic: true }),
  // https://vercel.com/docs/build-output-api/v3/configuration#images
  vercel(providerOptions, moduleOptions, nuxt) {
    nuxt.options.nitro = defu(nuxt.options.nitro, {
      vercel: {
        config: {
          images: {
            domains: moduleOptions.domains,
            minimumCacheTTL: 60 * 5,
            sizes: Array.from(new Set(Object.values(moduleOptions.screens || {}))),
            formats: providerOptions.options?.formats ?? ["image/webp", "image/avif"]
          }
        }
      }
    });
  },
  awsAmplify(providerOptions, moduleOptions, nuxt) {
    nuxt.options.nitro = defu(nuxt.options.nitro, {
      awsAmplify: {
        imageOptimization: {
          path: "/_amplify/image",
          cacheControl: "public, max-age=300, immutable"
        },
        imageSettings: {
          sizes: Array.from(new Set(Object.values(moduleOptions.screens || {}))),
          formats: providerOptions.options?.formats ?? ["image/jpeg", "image/png", "image/webp", "image/avif"],
          minimumCacheTTL: 60 * 5,
          domains: moduleOptions.domains,
          remotePatterns: [],
          // Provided by domains
          dangerouslyAllowSVG: false
          // TODO
        }
      }
    });
  },
  // https://docs.netlify.com/image-cdn/create-integration/
  netlify(_providerOptions, moduleOptions, nuxt) {
    if (moduleOptions.domains?.length > 0) {
      nuxt.options.nitro = defu(nuxt.options.nitro, {
        netlify: {
          images: {
            remote_images: moduleOptions.domains.map((domain) => `https?:\\/\\/${domain.replaceAll(".", "\\.")}\\/.*`)
          }
        }
      });
    }
  }
};
async function resolveProviders(nuxt, options) {
  const providers = [];
  for (const key in options) {
    if (BuiltInProviders.includes(key)) {
      providers.push(await resolveProvider(nuxt, key, { provider: key, options: options[key] }));
    }
  }
  for (const key in options.providers) {
    providers.push(await resolveProvider(nuxt, key, options.providers[key]));
  }
  return providers;
}
async function resolveProvider(_nuxt, key, input) {
  if (typeof input === "string") {
    input = { name: input };
  }
  if (!input.name) {
    input.name = key;
  }
  if (!input.provider) {
    input.provider = input.name;
  }
  if (input.provider in normalizableProviders) {
    input.provider = normalizableProviders[input.provider]();
  }
  const resolver = createResolver(import.meta.url);
  input.provider = BuiltInProviders.includes(input.provider) ? resolver.resolve("./runtime/providers/" + input.provider) : await resolvePath(input.provider);
  const setup = input.setup || providerSetup[input.name];
  return {
    ...input,
    setup,
    runtime: normalize(input.provider),
    importName: `${key}Runtime$${genSafeVariableName(hash(input.provider))}`,
    runtimeOptions: input.options
  };
}
const autodetectableProviders = {
  vercel: "vercel",
  aws_amplify: "awsAmplify",
  netlify: "netlify"
};
const normalizableProviders = {
  netlify: () => {
    return process.env.NETLIFY_LFS_ORIGIN_URL ? "netlifyLargeMedia" : "netlifyImageCdn";
  }
};
function detectProvider(userInput = "") {
  if (process.env.NUXT_IMAGE_PROVIDER) {
    return process.env.NUXT_IMAGE_PROVIDER;
  }
  if (userInput && userInput !== "auto") {
    return userInput;
  }
  if (provider in autodetectableProviders) {
    return autodetectableProviders[provider];
  }
}

const module = defineNuxtModule({
  defaults: (nuxt) => ({
    inject: false,
    provider: "auto",
    dir: nuxt.options.dir.public,
    dirs: [],
    presets: {},
    domains: [],
    sharp: {},
    format: ["webp"],
    // https://tailwindcss.com/docs/breakpoints
    screens: {
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "2xl": 1536
    },
    providers: {},
    alias: {},
    densities: [1, 2]
  }),
  meta: {
    name: "@nuxt/image",
    configKey: "image",
    compatibility: {
      nuxt: ">=3.1.0"
    }
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    options.dir = resolve(nuxt.options.srcDir, options.dir);
    const publicDirs = new Set(options.dirs);
    for (const layer of nuxt.options._layers) {
      const isRootLayer = layer.config.rootDir === nuxt.options.rootDir;
      const srcDir = isRootLayer ? nuxt.options.srcDir : layer.config.srcDir;
      const path = layer?.config.image?.dir || layer.config.dir?.public || "public";
      publicDirs.add(resolve(srcDir, path));
    }
    options.dirs = [...publicDirs].filter((dir) => existsSync(dir));
    nuxt.hook("nitro:config", (nitroConfig) => {
      for (const dir of options.dirs) {
        if (!existsSync(dir)) {
          continue;
        }
        nitroConfig.publicAssets ||= [];
        if (!nitroConfig.publicAssets.some((asset) => asset && asset.dir === dir)) {
          nitroConfig.publicAssets.push({ dir, maxAge: 1 });
        }
      }
    });
    const domainsFromENV = process$1.env.NUXT_IMAGE_DOMAINS?.replace(/\s/g, "").split(",") || [];
    options.domains = [.../* @__PURE__ */ new Set([...options.domains, ...domainsFromENV])].map((d) => d && parseURL(d.startsWith("http") ? d : "http://" + d).host).filter(Boolean);
    options.alias = Object.fromEntries(Object.entries(options.alias).map((e) => [withLeadingSlash(e[0]), e[1]]));
    options.provider = detectProvider(options.provider);
    if (options.provider) {
      options[options.provider] = options[options.provider] || {};
    }
    options.densities = options.densities || [];
    const imageOptions = pick(options, [
      "screens",
      "presets",
      "provider",
      "domains",
      "alias",
      "densities",
      "format",
      "quality"
    ]);
    const providers = await resolveProviders(nuxt, options);
    addTypeTemplate({
      filename: "image/providers.d.ts",
      getContents() {
        const file = join(nuxt.options.buildDir, "image");
        return `
        import { ImageProvider } from '@nuxt/image'
        declare module '@nuxt/image' {
          interface ProviderDefaults {
            provider: ${JSON.stringify(options.provider)}
          }
          interface ConfiguredImageProviders {
${providers.map((p) => `            ${JSON.stringify(p.name)}: ${BuiltInProviders.includes(p.name) ? `ImageProviders[${JSON.stringify(p.name)}]` : `ReturnType<typeof import('${relative(file, p.runtime)}').default> extends ImageProvider<infer Options> ? Options : unknown `}`).join("\n")}
          }
          interface ImageProviders {
${BuiltInProviders.map((p) => `            ${JSON.stringify(p)}: ReturnType<typeof import('${relative(file, resolver.resolve("./runtime/providers/" + p))}').default> extends ImageProvider<infer Options> ? Options : unknown `).join("\n")}
          }
        }
        export {}
        `;
      }
    }, { nitro: true, nuxt: true, node: true, shared: true });
    for (const p of providers) {
      if (typeof p.setup === "function" && p.name !== "ipx" && p.name !== "ipxStatic") {
        await p.setup(p, options, nuxt);
      }
    }
    addImports({
      name: "useImage",
      from: resolver.resolve("runtime/composables")
    });
    addComponent({
      name: "NuxtImg",
      filePath: resolver.resolve("./runtime/components/NuxtImg.vue")
    });
    addComponent({
      name: "NuxtPicture",
      filePath: resolver.resolve("./runtime/components/NuxtPicture.vue")
    });
    addTemplate({
      filename: "image-options.mjs",
      getContents() {
        return generateImageOptions(providers, imageOptions);
      }
    });
    addServerImports([
      {
        name: "useImage",
        from: resolver.resolve("runtime/server/utils/image")
      }
    ]);
    addServerTemplate({
      filename: "#internal/nuxt-image",
      getContents() {
        return generateImageOptions(providers, imageOptions);
      }
    });
    nuxt.hook("nitro:init", async (nitro) => {
      if (!options.provider || options.provider === "ipx" || options.provider === "ipxStatic" || options.ipx) {
        const hasExternalIPX = options.ipx?.baseURL && hasProtocol(options.ipx.baseURL, { acceptRelative: true });
        const resolvedProvider = hasExternalIPX ? "ipx" : nitro.options.static || options.provider === "ipxStatic" ? "ipxStatic" : nitro.options.node ? "ipx" : "none";
        if (!options.provider || options.provider === "ipx" || options.provider === "ipxStatic") {
          imageOptions.provider = options.provider = resolvedProvider;
        }
        if (resolvedProvider === "ipxStatic") {
          options.ipxStatic ||= options.ipx || {};
        } else {
          options[resolvedProvider] = options[resolvedProvider] || {};
        }
        const p = await resolveProvider(nuxt, resolvedProvider, {
          options: options[resolvedProvider]
        });
        if (!providers.some((p2) => p2.name === resolvedProvider)) {
          providers.push(p);
        }
        if (typeof p.setup === "function") {
          await p.setup(p, options, nuxt);
        }
      }
    });
    if (options.inject) {
      addPlugin({ src: resolver.resolve("./runtime/plugins/image") });
    }
  }
});
function pick(obj, keys) {
  const newobj = {};
  for (const key of keys) {
    newobj[key] = obj[key];
  }
  return newobj;
}
function generateImageOptions(providers, imageOptions) {
  return `
  ${providers.map((p) => `import ${p.importName} from '${p.runtime}'`).join("\n")}
  
  export const imageOptions = {
    ...${JSON.stringify(imageOptions, null, 2)},
    /** @type {${JSON.stringify(imageOptions.provider)}} */
    provider: ${JSON.stringify(imageOptions.provider)},
    providers: {
      ${providers.map((p) => `  ['${p.name}']: { setup: ${p.importName}, defaults: ${JSON.stringify(p.runtimeOptions)} }`).join(",\n")}
    }
  }
`;
}

export { module as default };
