import { computed, toValue, reactive } from 'vue';
import { H as hash } from '../nitro/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { n as fetchDefaults, o as useAsyncData, p as useRequestFetch } from './server.mjs';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}

export { useFetch as u };
//# sourceMappingURL=fetch-D_T_kmxd.mjs.map
