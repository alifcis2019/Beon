import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'circle-flags': () => require('@iconify-json/circle-flags/icons.json'),
  'lucide': () => require('@iconify-json/lucide/icons.json'),
  'simple-icons': () => require('@iconify-json/simple-icons/icons.json'),
  'heroicons': () => require('@iconify-json/heroicons/icons.json'),
  'circle-flags': () => require('@iconify-json/circle-flags/icons.json'),
  'lucide': () => require('@iconify-json/lucide/icons.json'),
  'simple-icons': () => require('@iconify-json/simple-icons/icons.json'),
  'heroicons': () => require('@iconify-json/heroicons/icons.json'),
}