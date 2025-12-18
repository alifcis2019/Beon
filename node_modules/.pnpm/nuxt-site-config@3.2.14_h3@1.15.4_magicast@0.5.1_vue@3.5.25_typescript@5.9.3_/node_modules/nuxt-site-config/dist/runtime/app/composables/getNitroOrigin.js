import { useRequestEvent } from "#app";
export function getNitroOrigin(e) {
  if (import.meta.server) {
    e = e || useRequestEvent();
    return e?.context?.siteConfigNitroOrigin || "";
  }
  return window.location.origin;
}
