import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { LRUCache } from 'lru-cache';
import { createGenerator } from '@unocss/core';
import presetWind from '@unocss/preset-wind3';
import { parse as parse$1 } from 'devalue';
import { createConsola, consola } from 'consola';
import { createUnhead } from 'unhead';
import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync, mkdirSync } from 'node:fs';
import { resolve as resolve$2, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { toValue, isRef, hasInjectionContext, inject, ref, watchEffect, getCurrentInstance, onBeforeUnmount, onDeactivated, onActivated } from 'vue';
import { createRouterMatcher } from 'vue-router';
import { fileURLToPath } from 'node:url';
import { createHead as createHead$1, propsToString } from 'unhead/server';
import { FlatMetaPlugin } from 'unhead/plugins';
import { walkResolver } from 'unhead/utils';
import { createRenderer } from 'vue-bundle-renderer/runtime';
import { renderToString } from 'vue/server-renderer';
import { getIcons } from '@iconify/utils';
import Database from 'better-sqlite3';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'ipx';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withProtocol(input, protocol) {
  let match = input.match(PROTOCOL_REGEX);
  if (!match) {
    match = input.match(/^\/{2,}/);
  }
  if (!match) {
    return protocol + input;
  }
  return protocol + input.slice(match[0].length);
}
function isEqual$1(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode$1(a);
    b = decode$1(b);
  }
  return a === b;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize$2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o$1(n){throw new Error(`${n} is not implemented yet!`)}let i$2 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o$1("Readable.asyncIterator")}iterator(e){throw o$1("Readable.iterator")}map(e,t){throw o$1("Readable.map")}filter(e,t){throw o$1("Readable.filter")}forEach(e,t){throw o$1("Readable.forEach")}reduce(e,t,r){throw o$1("Readable.reduce")}find(e,t){throw o$1("Readable.find")}findIndex(e,t){throw o$1("Readable.findIndex")}some(e,t){throw o$1("Readable.some")}toArray(e){throw o$1("Readable.toArray")}every(e,t){throw o$1("Readable.every")}flatMap(e,t){throw o$1("Readable.flatMap")}drop(e,t){throw o$1("Readable.drop")}take(e,t){throw o$1("Readable.take")}asIndexedPairs(e){throw o$1("Readable.asIndexedPairs")}};let l$2 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c$2=class c{allowHalfOpen=true;_destroy;constructor(e=new i$2,t=new l$2){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _$1(){return Object.assign(c$2.prototype,i$2.prototype),Object.assign(c$2.prototype,l$2.prototype),c$2}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_$1();let A$1 = class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}};class y extends i$2{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A$1;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$2{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R$1(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S$1=new Set([101,204,205,304]);async function b$1(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R$1(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S$1.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C$1(n,e,t={}){try{const r=await b$1(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function useBase(base, handler) {
  base = withoutTrailingSlash(base);
  if (!base || base === "/") {
    return handler;
  }
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _path = event._path || event.node.req.url || "/";
    event._path = withoutBase(event.path || "/", base);
    event.node.req.url = event._path;
    try {
      return await handler(event);
    } finally {
      event._path = event.node.req.url = _path;
    }
  });
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode$1(params[key]);
    }
  }
  return params;
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
const getHeader = getRequestHeader;
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [name, opts.domain || "", opts.path || "/"].join(";");
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize$2(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i$1=globalThis.AbortController,l$1=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l$1;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l$1(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController$1 = globalThis.AbortController || i$1;
const ofetch = createFetch({ fetch: fetch$1, Headers: Headers$1, AbortController: AbortController$1 });
const $fetch$1 = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive$1(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive$1(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$2 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$2,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {
  ["nuxt-og-image:fonts:Inter-normal-400.ttf.base64"]: {
    import: () => import('../raw/Inter-normal-400.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"652cc-qEeSD1DXCSV8gPP2rnBA6ePGdZ4\"","mtime":"2025-12-18T20:17:02.298Z"}
  },
  ["nuxt-og-image:fonts:Inter-normal-700.ttf.base64"]: {
    import: () => import('../raw/Inter-normal-700.ttf.mjs').then(r => r.default || r),
    meta: {"type":"text/plain; charset=utf-8","etag":"\"674f0-FZReUXHhPTnY0HmYVn2iPpKm9ds\"","mtime":"2025-12-18T20:17:02.299Z"}
  }
};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$2(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$2(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME$1 = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME$1, "base");
  }
  opts.base = resolve$2(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME$1,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME$1,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c$1().serialize(o)}const c$1=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (serialize$1(object1) === serialize$1(object2)) {
    return true;
  }
  return false;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r$1="sha256",s="base64url";function digest(t){if(e)return e(r$1,t,s);const o=createHash(r$1).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

function hash$1(input) {
  return digest(serialize$1(input));
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  ui: {
    colors: {
      primary: "beon-blue",
      secondary: "beon-blue",
      neutral: "slate"
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "ui": {
    "colors": {
      "primary": "green",
      "error": "red",
      "warning": "yellow",
      "success": "green",
      "info": "blue",
      "neutral": "slate"
    },
    "icons": {
      "arrowDown": "i-lucide-arrow-down",
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "arrowUp": "i-lucide-arrow-up",
      "caution": "i-lucide-circle-alert",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "copy": "i-lucide-copy",
      "copyCheck": "i-lucide-copy-check",
      "dark": "i-lucide-moon",
      "drag": "i-lucide-grip-vertical",
      "ellipsis": "i-lucide-ellipsis",
      "error": "i-lucide-circle-x",
      "external": "i-lucide-arrow-up-right",
      "eye": "i-lucide-eye",
      "eyeOff": "i-lucide-eye-off",
      "file": "i-lucide-file",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "hash": "i-lucide-hash",
      "info": "i-lucide-info",
      "light": "i-lucide-sun",
      "loading": "i-lucide-loader-circle",
      "menu": "i-lucide-menu",
      "minus": "i-lucide-minus",
      "panelClose": "i-lucide-panel-left-close",
      "panelOpen": "i-lucide-panel-left-open",
      "plus": "i-lucide-plus",
      "reload": "i-lucide-rotate-ccw",
      "search": "i-lucide-search",
      "stop": "i-lucide-square",
      "success": "i-lucide-circle-check",
      "system": "i-lucide-monitor",
      "tip": "i-lucide-lightbulb",
      "upload": "i-lucide-upload",
      "warning": "i-lucide-triangle-alert"
    },
    "tv": {
      "twMergeConfig": {}
    }
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "components",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function pascalCase(str, opts) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => upperFirst(opts?.normalize ? p.toLowerCase() : p)).join("") : "";
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "2ed6e87c-33ee-428d-8b14-dc873800d6ab",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/__nuxt_content/**": {
        "robots": false
      },
      "/__nuxt_content/index/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/docs/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/pricing/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/blog/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/posts/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/changelog/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/versions/sql_dump.txt": {
        "prerender": true
      },
      "/__sitemap__/style.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "redirect": {
          "to": "/sitemap_index.xml",
          "statusCode": 307
        }
      },
      "/sitemap_index.xml": {},
      "/__sitemap__/en.xml": {},
      "/__sitemap__/ar.xml": {},
      "/_nuxt": {
        "robots": "noindex",
        "headers": {
          "X-Robots-Tag": "noindex"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable",
          "X-Robots-Tag": "noindex"
        },
        "robots": "noindex"
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "accordion": "ProseAccordion",
          "accordion-item": "ProseAccordionItem",
          "badge": "ProseBadge",
          "callout": "ProseCallout",
          "card": "ProseCard",
          "card-group": "ProseCardGroup",
          "caution": "ProseCaution",
          "code-collapse": "ProseCodeCollapse",
          "code-group": "ProseCodeGroup",
          "code-icon": "ProseCodeIcon",
          "code-preview": "ProseCodePreview",
          "code-tree": "ProseCodeTree",
          "collapsible": "ProseCollapsible",
          "field": "ProseField",
          "field-group": "ProseFieldGroup",
          "icon": "ProseIcon",
          "kbd": "ProseKbd",
          "note": "ProseNote",
          "steps": "ProseSteps",
          "tabs": "ProseTabs",
          "tabs-item": "ProseTabsItem",
          "tip": "ProseTip",
          "warning": "ProseWarning"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "wsUrl": ""
    },
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "name": "English",
          "language": ""
        },
        {
          "code": "ar",
          "name": "Arabic",
          "dir": "rtl",
          "language": ""
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "ar": {
          "domain": ""
        }
      }
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "sitemap": {
    "isI18nMapped": true,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": true,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 600,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "7.5.0",
    "sitemaps": {
      "index": {
        "sitemapName": "index",
        "_route": "sitemap_index.xml",
        "sitemaps": [],
        "include": [],
        "exclude": []
      },
      "en": {
        "include": [],
        "exclude": [
          "/_**",
          "/_nuxt/**",
          "/__nuxt_content/**"
        ],
        "includeAppSources": true,
        "sitemapName": "en",
        "_route": "/__sitemap__/en.xml"
      },
      "ar": {
        "include": [],
        "exclude": [
          "/_**",
          "/_nuxt/**",
          "/__nuxt_content/**"
        ],
        "includeAppSources": true,
        "sitemapName": "ar",
        "_route": "/__sitemap__/ar.xml"
      }
    },
    "autoI18n": {
      "differentDomains": false,
      "defaultLocale": "en",
      "locales": [
        {
          "code": "en",
          "name": "English",
          "file": "en.ts",
          "_hreflang": "en",
          "_sitemap": "en"
        },
        {
          "code": "ar",
          "name": "Arabic",
          "file": "ar.ts",
          "dir": "rtl",
          "_hreflang": "ar",
          "_sitemap": "ar"
        }
      ],
      "strategy": "prefix_except_default",
      "pages": {}
    }
  },
  "content": {
    "databaseVersion": "v3.5.0",
    "version": "3.9.0",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "/home/ali/work/beon-landing-nuxt/Beon/Beon/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "Beon",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "Saas"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://beon.chat/",
        "name": "Beon"
      },
      {
        "_context": "@nuxtjs/i18n",
        "defaultLocale": "en"
      }
    ],
    "version": "3.2.14",
    "debug": false,
    "multiTenancy": []
  },
  "nuxt-og-image": {
    "version": "5.1.13",
    "satoriOptions": {},
    "resvgOptions": {},
    "sharpOptions": {},
    "publicStoragePath": "root:public",
    "defaults": {
      "emojis": "noto",
      "renderer": "satori",
      "component": "NuxtSeo",
      "extension": "png",
      "width": 1200,
      "height": 600,
      "cacheMaxAgeSeconds": 259200
    },
    "debug": false,
    "baseCacheKey": "/cache/nuxt-og-image/5.1.13",
    "fonts": [
      {
        "cacheKey": "Inter:undefined:400",
        "style": "normal",
        "weight": 400,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-400.ttf.base64"
      },
      {
        "cacheKey": "Inter:undefined:700",
        "style": "normal",
        "weight": 700,
        "name": "Inter",
        "key": "nuxt-og-image:fonts:Inter-normal-700.ttf.base64"
      }
    ],
    "hasNuxtIcon": true,
    "colorPreference": "light",
    "strictNuxtContentPaths": "",
    "isNuxtContentDocumentDriven": false
  },
  "nuxt-robots": {
    "version": "5.6.7",
    "isNuxtContentV2": false,
    "debug": false,
    "credits": true,
    "groups": [
      {
        "userAgent": [
          "*"
        ],
        "disallow": [
          ""
        ],
        "allow": [],
        "contentUsage": [],
        "contentSignal": [],
        "_indexable": true,
        "_rules": [],
        "_normalized": true
      }
    ],
    "sitemap": [
      "/sitemap_index.xml"
    ],
    "header": true,
    "robotsEnabledValue": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "robotsDisabledValue": "noindex, nofollow",
    "cacheControl": "max-age=14400, must-revalidate",
    "botDetection": true
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": "../public"
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    let idx;
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      idx = stack.push(entry);
    return () => {
      if (typeof idx !== "undefined") {
        stack.splice(idx - 1, 1);
      }
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0]?.toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function getSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const _3idNzXIyCRttuwpgVK1PC3ZhCpELxuyFndNrBCshoWg = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const DRIVER_NAME = "lru-cache";
const lruCacheDriver = defineDriver((opts = {}) => {
  const cache = new LRUCache({
    max: 1e3,
    sizeCalculation: opts.maxSize || opts.maxEntrySize ? (value, key) => {
      return key.length + byteLength(value);
    } : void 0,
    ...opts
  });
  return {
    name: DRIVER_NAME,
    options: opts,
    getInstance: () => cache,
    hasItem(key) {
      return cache.has(key);
    },
    getItem(key) {
      return cache.get(key) ?? null;
    },
    getItemRaw(key) {
      return cache.get(key) ?? null;
    },
    setItem(key, value) {
      cache.set(key, value);
    },
    setItemRaw(key, value) {
      cache.set(key, value);
    },
    removeItem(key) {
      cache.delete(key);
    },
    getKeys() {
      return [...cache.keys()];
    },
    clear() {
      cache.clear();
    },
    dispose() {
      cache.clear();
    }
  };
});
function byteLength(value) {
  if (typeof Buffer !== "undefined") {
    try {
      return Buffer.byteLength(value);
    } catch {
    }
  }
  try {
    return typeof value === "string" ? value.length : JSON.stringify(value).length;
  } catch {
  }
  return 0;
}

const htmlPayloadCache = createStorage({
  // short cache time so we don't need many entries at runtime
  driver: lruCacheDriver({ max: 50 })
});
const fontCache = createStorage({
  driver: lruCacheDriver({ max: 10 })
});
const emojiCache = createStorage({
  driver: lruCacheDriver({ max: 1e3 })
});

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
  return ext && fileExtensions.includes(ext.replace(".", ""));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"production"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CLOUDFLARE_WORKERS","WORKERS_CI",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b();l.name;function n(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n(o.CI)||l.ci!==false,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(o.DEBUG);const a=t==="test"||n(o.TEST),h=t==="dev"||t==="development";n(o.MINIMAL)||T||a||!R;const A=/^win/i.test(I);!n(o.NO_COLOR)&&(n(o.FORCE_COLOR)||(R||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const W=globalThis.process||Object.create(null),_={versions:{}};new Proxy(W,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const O=globalThis.process?.release?.name==="node",c=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[c,"bun"],[O,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getNitroOrigin$1(ctx = {}) {
  const isDev = ctx.isDev ?? h;
  const isPrerender = ctx.isPrerender ?? !!o.prerender;
  let host = "";
  let port = "";
  let protocol = o.NITRO_SSL_CERT && o.NITRO_SSL_KEY ? "https" : "http";
  if (isDev || isPrerender) {
    const devEnv = o.__NUXT_DEV__ || o.NUXT_VITE_NODE_OPTIONS;
    if (devEnv) {
      const parsed = JSON.parse(devEnv);
      const origin = parsed.proxy?.url || parsed.baseURL?.replace("/__nuxt_vite_node__", "");
      host = origin.replace(/^https?:\/\//, "");
      protocol = origin.startsWith("https") ? "https" : "http";
    }
  }
  if (!host && ctx.requestHost) {
    host = ctx.requestHost;
    protocol = ctx.requestProtocol || protocol;
  }
  if (!host) {
    host = o.NITRO_HOST || o.HOST || "";
    if (isDev)
      port = o.NITRO_PORT || o.PORT || "3000";
  }
  if (host.includes(":")) {
    const i = host.lastIndexOf(":");
    port = host.slice(i + 1);
    host = host.slice(0, i);
  }
  host = o.NUXT_SITE_HOST_OVERRIDE || host;
  port = o.NUXT_SITE_PORT_OVERRIDE || port;
  if (host.startsWith("http://") || host.startsWith("https://")) {
    protocol = host.startsWith("https://") ? "https" : "http";
    host = host.replace(/^https?:\/\//, "");
  } else if (!host.includes("localhost") && !host.startsWith("127.")) {
    protocol = "https";
  }
  return `${protocol}://${host}${port ? `:${port}` : ""}/`;
}

function getNitroOrigin(e) {
  return getNitroOrigin$1({
    isDev: false,
    isPrerender: false,
    requestHost: e ? getRequestHost(e, { xForwardedHost: true }) : void 0,
    requestProtocol: e ? getRequestProtocol(e, { xForwardedProto: true }) : void 0
  });
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}
function withSiteUrl(e, path, options = {}) {
  const siteConfig = e.context.siteConfig?.get();
  let siteUrl = e.context.siteConfigNitroOrigin;
  if ((options.canonical !== false || false) && siteConfig.url)
    siteUrl = siteConfig.url;
  return resolveSitePath(path, {
    absolute: true,
    siteUrl,
    trailingSlash: siteConfig.trailingSlash,
    base: e.context.nitro.baseURL,
    withBase: options.withBase
  });
}

function detectBase64MimeType(data) {
  const signatures = {
    "R0lGODdh": "image/gif",
    "R0lGODlh": "image/gif",
    "iVBORw0KGgo": "image/png",
    "/9j/": "image/jpeg",
    "UklGR": "image/webp",
    "AAABAA": "image/x-icon"
  };
  for (const s in signatures) {
    if (data.startsWith(s)) {
      return signatures[s];
    }
  }
  return "image/svg+xml";
}
function toBase64Image(data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  const type = detectBase64MimeType(base64);
  return `data:${type};base64,${base64}`;
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => String(g[1]).toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function normaliseFontInput(fonts) {
  return fonts.map((f) => {
    if (typeof f === "string") {
      const vals = f.split(":");
      const includesStyle = vals.length === 3;
      let name, weight, style;
      if (includesStyle) {
        name = vals[0];
        style = vals[1];
        weight = vals[2];
      } else {
        name = vals[0];
        weight = vals[1];
      }
      return {
        cacheKey: f,
        name,
        weight: weight || 400,
        style: style || "normal",
        path: void 0
      };
    }
    return {
      cacheKey: f.key || `${f.name}:${f.style}:${f.weight}`,
      style: "normal",
      weight: 400,
      ...f
    };
  });
}

const theme = {};

function useSiteConfig(e, _options) {
  return getSiteConfig(e, _options);
}

function htmlDecodeQuotes(html) {
  return html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'");
}
function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&cent;/g, "\xA2").replace(/&pound;/g, "\xA3").replace(/&yen;/g, "\xA5").replace(/&euro;/g, "\u20AC").replace(/&copy;/g, "\xA9").replace(/&reg;/g, "\xAE").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#(\d+);/g, (full, int) => {
    return String.fromCharCode(Number.parseInt(int));
  }).replace(/&amp;/g, "&");
}
function decodeObjectHtmlEntities(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string")
      obj[key] = decodeHtml(value);
  });
  return obj;
}

function fetchIsland(e, component, props) {
  const hashId = hash$1([component, props]).replaceAll("_", "-");
  return e.$fetch(`/__nuxt_island/${component}_${hashId}.json`, {
    params: {
      props: JSON.stringify(props)
    }
  });
}
function withoutQuery$2(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$2() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$2(path)), app.baseURL)
    ).reverse());
  };
}

const logger$2 = createConsola({
  defaults: {
    tag: "Nuxt OG Image"
  }
});

const componentNames = [{"hash":"SOHaoKfoo4fUkREsCFGw8ewxkl4-XkkHkug2VwYRtFM","pascalName":"BrandedLogo","kebabName":"branded-logo","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue","category":"community"},{"hash":"tFoYPh0fXaZR3uXybAqFEOGnQuQsvz-E-Yq-CtrFlIY","pascalName":"Frame","kebabName":"frame","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue","category":"community"},{"hash":"NPQTTXYQ8toXx5OaJ1VlRUUcxy1SNOxg-FoM7C08ZPM","pascalName":"Nuxt","kebabName":"nuxt","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue","category":"community"},{"hash":"VAHSTZlVcPHzkozocV1iTnwc4-YttdoOkHsYfoSgDZ4","pascalName":"NuxtSeo","kebabName":"nuxt-seo","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue","category":"community"},{"hash":"8CNn4yU043gQFqO-sZNDPz9GKED-h7ahXJ-61c9ThHM","pascalName":"Pergel","kebabName":"pergel","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue","category":"community"},{"hash":"b-Juo-FXQepo6SOCnA478MTAqbXNZuve6-MzHgTKA7s","pascalName":"SimpleBlog","kebabName":"simple-blog","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue","category":"community"},{"hash":"vRUm5ru-64PEHIGsBby6-vCgLBg7iUJfvFKL6VuCXtI","pascalName":"UnJs","kebabName":"un-js","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue","category":"community"},{"hash":"hq07GBU-Yd16ICfETt8SfSxfaYj3qBmDAiQkTcv89nw","pascalName":"Wave","kebabName":"wave","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue","category":"community"},{"hash":"zSwOodBXcjwS1qvFqGBJqitTEEnrvVfwQYkTeIxNpws","pascalName":"WithEmoji","kebabName":"with-emoji","path":"/home/ali/work/beon-landing-nuxt/Beon/Beon/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue","category":"community"}];

function normaliseOptions(_options) {
  const options = { ..._options };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = componentNames[0]?.pascalName;
  }
  return options;
}

function useOgImageRuntimeConfig(e) {
  const c = useRuntimeConfig(e);
  return {
    ...c["nuxt-og-image"],
    app: {
      baseURL: c.app.baseURL
    }
  };
}

const satoriRendererInstance = { instance: void 0 };
const chromiumRendererInstance = { instance: void 0 };
async function useSatoriRenderer() {
  satoriRendererInstance.instance = satoriRendererInstance.instance || await import('../_/renderer.mjs').then((m) => m.default);
  return satoriRendererInstance.instance;
}
async function useChromiumRenderer() {
  chromiumRendererInstance.instance = chromiumRendererInstance.instance || await import('../_/empty.mjs').then((m) => m.default);
  return chromiumRendererInstance.instance;
}

function resolvePathCacheKey(e, path) {
  const siteConfig = useSiteConfig(e, {
    resolveRefs: true
  });
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey$1(path)));
  return [
    !basePath || basePath === "/" ? "index" : basePath,
    hash$1([
      basePath,
      siteConfig.url,
      hash$1(getQuery(e))
    ])
  ].join(":");
}
async function resolveContext(e) {
  const runtimeConfig = useOgImageRuntimeConfig();
  const resolvePathWithBase = createSitePathResolver(e, {
    absolute: false,
    withBase: true
  });
  const path = resolvePathWithBase(parseURL(e.path).pathname);
  const extension = path.split(".").pop();
  if (!extension) {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Missing OG Image type.`
    });
  }
  if (!["png", "jpeg", "jpg", "svg", "html", "json"].includes(extension)) {
    return createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Unknown OG Image type ${extension}.`
    });
  }
  const query = getQuery(e);
  let queryParams = {};
  for (const k in query) {
    const v = String(query[k]);
    if (!v)
      continue;
    if (v.startsWith("{")) {
      try {
        queryParams[k] = JSON.parse(v);
      } catch (error) {
      }
    } else {
      queryParams[k] = v;
    }
  }
  queryParams = separateProps(queryParams);
  const basePath = withoutTrailingSlash(
    path.replace(`/__og-image__/image`, "").replace(`/__og-image__/static`, "").replace(`/og.${extension}`, "")
  );
  const basePathWithQuery = queryParams._query && typeof queryParams._query === "object" ? withQuery(basePath, queryParams._query) : basePath;
  const isDebugJsonPayload = extension === "json" && runtimeConfig.debug;
  const key = resolvePathCacheKey(e, basePathWithQuery);
  let options = queryParams.options;
  if (!options) {
    if (!options) {
      const payload = await fetchPathHtmlAndExtractOptions(e, basePathWithQuery, key);
      if (payload instanceof Error)
        return payload;
      options = payload;
    }
  }
  delete queryParams.options;
  const routeRuleMatcher = createNitroRouteRuleMatcher$2();
  const routeRules = routeRuleMatcher(basePath);
  if (typeof routeRules.ogImage === "undefined" && !options) {
    return createError$1({
      statusCode: 400,
      statusMessage: "The route is missing the Nuxt OG Image payload or route rules."
    });
  }
  const ogImageRouteRules = separateProps(routeRules.ogImage);
  options = defu(queryParams, options, ogImageRouteRules, runtimeConfig.defaults);
  if (!options) {
    return createError$1({
      statusCode: 404,
      statusMessage: "[Nuxt OG Image] OG Image not found."
    });
  }
  let renderer;
  switch (options.renderer) {
    case "satori":
      renderer = await useSatoriRenderer();
      break;
    case "chromium":
      renderer = await useChromiumRenderer();
      break;
  }
  if (!renderer || renderer.__mock__) {
    throw createError$1({
      statusCode: 400,
      statusMessage: `[Nuxt OG Image] Renderer ${options.renderer} is not enabled.`
    });
  }
  const unocss = await createGenerator({ theme }, {
    presets: [
      presetWind()
    ]
  });
  const ctx = {
    unocss,
    e,
    key,
    renderer,
    isDebugJsonPayload,
    runtimeConfig,
    publicStoragePath: runtimeConfig.publicStoragePath,
    extension,
    basePath,
    options: normaliseOptions(options),
    _nitro: useNitroApp()
  };
  await ctx._nitro.hooks.callHook("nuxt-og-image:context", ctx);
  return ctx;
}
const PAYLOAD_REGEX = /<script.+id="nuxt-og-image-options"[^>]*>(.+?)<\/script>/;
function getPayloadFromHtml(html) {
  const match = String(html).match(PAYLOAD_REGEX);
  return match ? String(match[1]) : null;
}
function extractAndNormaliseOgImageOptions(html) {
  const _payload = getPayloadFromHtml(html);
  let options = false;
  try {
    const payload2 = parse$1(_payload || "{}");
    Object.entries(payload2).forEach(([key, value]) => {
      if (!value && value !== 0)
        delete payload2[key];
    });
    options = payload2;
  } catch (e) {
  }
  if (options && typeof options?.props?.description === "undefined") {
    const description = html.match(/<meta[^>]+name="description"[^>]*>/)?.[0];
    if (description) {
      const [, content] = description.match(/content="([^"]+)"/) || [];
      if (content && !options.props.description)
        options.props.description = content;
    }
  }
  const payload = decodeObjectHtmlEntities(options || {});
  return payload;
}
async function doFetchWithErrorHandling(fetch, path) {
  const res = await fetch(path, {
    redirect: "follow",
    headers: {
      accept: "text/html"
    }
  }).catch((err) => {
    return err;
  });
  let errorDescription;
  if (res.status >= 300 && res.status < 400) {
    if (res.headers.has("location")) {
      return await doFetchWithErrorHandling(fetch, res.headers.get("location") || "");
    }
    errorDescription = `${res.status} redirected to ${res.headers.get("location") || "unknown"}`;
  } else if (res.status >= 500) {
    errorDescription = `${res.status} error: ${res.statusText}`;
  }
  if (errorDescription) {
    return [null, createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to parse \`${path}\` for og-image extraction. ${errorDescription}`
    })];
  }
  if (res._data) {
    return [res._data, null];
  } else if (res.text) {
    return [await res.text(), null];
  }
  return ["", null];
}
async function fetchPathHtmlAndExtractOptions(e, path, key) {
  const cachedHtmlPayload = await htmlPayloadCache.getItem(key);
  if (cachedHtmlPayload && cachedHtmlPayload.expiresAt < Date.now())
    return cachedHtmlPayload.value;
  let _payload = null;
  let [html, err] = await doFetchWithErrorHandling(e.fetch, path);
  if (err) {
    logger$2.warn(err);
  } else {
    _payload = getPayloadFromHtml(html);
  }
  if (!_payload) {
    const [fallbackHtml, err2] = await doFetchWithErrorHandling(globalThis.$fetch.raw, path);
    if (err2) {
      return err2;
    }
    _payload = getPayloadFromHtml(fallbackHtml);
    if (_payload) {
      html = fallbackHtml;
    }
  }
  if (!html) {
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] Failed to read the path ${path} for og-image extraction, returning no HTML.`
    });
  }
  if (!_payload) {
    const payload2 = extractAndNormaliseOgImageOptions(html);
    if (payload2 && typeof payload2 === "object" && payload2.socialPreview?.og?.image) {
      const image = payload2.socialPreview.og.image;
      const p = {
        custom: true,
        url: typeof image === "string" ? image : image
      };
      if (typeof image === "object" && image["image:width"]) {
        p.width = image["image:width"];
      }
      if (typeof image === "object" && image["image:height"]) {
        p.height = image["image:height"];
      }
      return p;
    }
    return createError$1({
      statusCode: 500,
      statusMessage: `[Nuxt OG Image] HTML response from ${path} is missing the #nuxt-og-image-options script tag. Make sure you have defined an og image for this page.`
    });
  }
  const payload = extractAndNormaliseOgImageOptions(html);
  if (payload) {
    await htmlPayloadCache.setItem(key, {
      // 60 minutes for prerender, 10 seconds for runtime
      expiresAt: Date.now() + 1e3 * (10),
      value: payload
    });
  }
  return typeof payload === "object" ? payload : createError$1({
    statusCode: 500,
    statusMessage: "[Nuxt OG Image] Invalid payload type."
  });
}

const _ebDMJeMVBDtQJO7Z4VuPuGOMOYo2hR8Ql32UBNFG6xo = defineNitroPlugin(async (nitro) => {
  return;
});

const KNOWN_SEARCH_BOTS = [
  {
    pattern: "googlebot",
    name: "googlebot",
    secondaryPatterns: ["google.com/bot.html"]
  },
  {
    pattern: "bingbot",
    name: "bingbot",
    secondaryPatterns: ["msnbot"]
  },
  {
    pattern: "yandexbot",
    name: "yandexbot"
  },
  {
    pattern: "baiduspider",
    name: "baiduspider",
    secondaryPatterns: ["baidu.com"]
  },
  {
    pattern: "duckduckbot",
    name: "duckduckbot",
    secondaryPatterns: ["duckduckgo.com"]
  },
  {
    pattern: "slurp",
    name: "yahoo"
  }
];
const SOCIAL_BOTS = [
  {
    pattern: "twitterbot",
    name: "twitter",
    secondaryPatterns: ["twitter"]
  },
  {
    pattern: "facebookexternalhit",
    name: "facebook",
    secondaryPatterns: ["facebook.com"]
  },
  {
    pattern: "linkedinbot",
    name: "linkedin",
    secondaryPatterns: ["linkedin"]
  },
  {
    pattern: "pinterestbot",
    name: "pinterest",
    secondaryPatterns: ["pinterest"]
  },
  {
    pattern: "discordbot",
    name: "discord",
    secondaryPatterns: ["discordapp"]
  }
];
const SEO_BOTS = [
  {
    pattern: "mj12bot",
    name: "majestic12",
    secondaryPatterns: ["majestic12.co.uk/bot"]
  },
  {
    pattern: "ahrefsbot",
    name: "ahrefs",
    secondaryPatterns: ["ahrefs.com"]
  },
  {
    pattern: "semrushbot",
    name: "semrush",
    secondaryPatterns: ["semrush.com/bot"]
  },
  {
    pattern: "screaming frog",
    name: "screaming-frog",
    secondaryPatterns: ["screamingfrog.co.uk"]
  },
  {
    pattern: "rogerbot",
    name: "moz"
  }
];
const AI_BOTS = [
  {
    pattern: "anthropic",
    name: "anthropic"
  },
  {
    pattern: "claude",
    name: "claude"
  },
  {
    pattern: "gptbot",
    name: "gpt",
    secondaryPatterns: ["openai.com"]
  },
  {
    pattern: "googlebot-news",
    name: "google-news"
  },
  {
    pattern: "cohere",
    name: "cohere",
    secondaryPatterns: ["cohere.com"]
  },
  {
    pattern: "ccbot",
    name: "commoncrawl",
    secondaryPatterns: ["commoncrawl.org"]
  },
  {
    pattern: "perplexitybot",
    name: "perplexity",
    secondaryPatterns: ["perplexity.ai"]
  }
];
const HTTP_TOOL_BOTS = [
  {
    pattern: "python-requests",
    name: "requests",
    secondaryPatterns: ["python"]
  },
  {
    pattern: "wget",
    name: "wget"
  },
  {
    pattern: "curl",
    name: "curl",
    secondaryPatterns: ["curl"]
  }
];
const SECURITY_SCANNING_BOTS = [
  {
    pattern: "zgrab",
    name: "zgrab"
  },
  {
    pattern: "masscan",
    name: "masscan"
  },
  {
    pattern: "nmap",
    name: "nmap",
    secondaryPatterns: ["insecure.org"]
  },
  {
    pattern: "nikto",
    name: "nikto"
  },
  {
    pattern: "wpscan",
    name: "wpscan"
  }
];
const SCRAPING_BOTS = [
  {
    pattern: "scrapy",
    name: "scrapy",
    secondaryPatterns: ["scrapy.org"]
  }
];
const AUTOMATION_BOTS = [
  {
    pattern: "phantomjs",
    name: "phantomjs"
  },
  {
    pattern: "headless",
    name: "headless-browser"
  },
  {
    pattern: "playwright",
    name: "playwright"
  },
  {
    pattern: "selenium",
    name: "selenium",
    secondaryPatterns: ["webdriver"]
  },
  {
    pattern: "puppeteer",
    name: "puppeteer",
    secondaryPatterns: ["headless"]
  }
];
const GENERIC_BOTS = [
  {
    pattern: "bot",
    name: "generic-bot"
  },
  {
    pattern: "spider",
    name: "generic-spider"
  },
  {
    pattern: "crawler",
    name: "generic-crawler"
  },
  {
    pattern: "scraper",
    name: "generic-scraper"
  }
];
const BOT_MAP = [
  {
    type: "search-engine",
    bots: KNOWN_SEARCH_BOTS,
    trusted: true
  },
  {
    type: "social",
    bots: SOCIAL_BOTS,
    trusted: true
  },
  {
    type: "seo",
    bots: SEO_BOTS,
    trusted: true
  },
  {
    type: "ai",
    bots: AI_BOTS,
    trusted: true
  },
  {
    type: "generic",
    bots: GENERIC_BOTS,
    trusted: false
  },
  {
    type: "automation",
    bots: AUTOMATION_BOTS,
    trusted: false
  },
  {
    type: "http-tool",
    bots: HTTP_TOOL_BOTS,
    trusted: false
  },
  {
    type: "security-scanner",
    bots: SECURITY_SCANNING_BOTS,
    trusted: false
  },
  {
    type: "scraping",
    bots: SCRAPING_BOTS,
    trusted: false
  }
];

const ROBOT_DIRECTIVE_VALUES = {
  // Standard directives
  enabled: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  disabled: "noindex, nofollow",
  index: "index",
  noindex: "noindex",
  follow: "follow",
  nofollow: "nofollow",
  none: "none",
  all: "all",
  // Non-standard directives (not part of official robots spec)
  noai: "noai",
  noimageai: "noimageai"
};
function formatMaxImagePreview(value) {
  return `max-image-preview:${value}`;
}
function formatMaxSnippet(value) {
  return `max-snippet:${value}`;
}
function formatMaxVideoPreview(value) {
  return `max-video-preview:${value}`;
}
function matches(pattern, path) {
  const pathLength = path.length;
  const patternLength = pattern.length;
  const matchingLengths = Array.from({ length: pathLength + 1 }).fill(0);
  let numMatchingLengths = 1;
  let p = 0;
  while (p < patternLength) {
    if (pattern[p] === "$" && p + 1 === patternLength) {
      return matchingLengths[numMatchingLengths - 1] === pathLength;
    }
    if (pattern[p] === "*") {
      numMatchingLengths = pathLength - matchingLengths[0] + 1;
      for (let i = 1; i < numMatchingLengths; i++) {
        matchingLengths[i] = matchingLengths[i - 1] + 1;
      }
    } else {
      let numMatches = 0;
      for (let i = 0; i < numMatchingLengths; i++) {
        const matchLength = matchingLengths[i];
        if (matchLength < pathLength && path[matchLength] === pattern[p]) {
          matchingLengths[numMatches++] = matchLength + 1;
        }
      }
      if (numMatches === 0) {
        return false;
      }
      numMatchingLengths = numMatches;
    }
    p++;
  }
  return true;
}
function matchPathToRule(path, _rules) {
  let matchedRule = null;
  const rules = _rules.filter(Boolean);
  const rulesLength = rules.length;
  let i = 0;
  while (i < rulesLength) {
    const rule = rules[i];
    if (!rule || !matches(rule.pattern, path)) {
      i++;
      continue;
    }
    if (!matchedRule || rule.pattern.length > matchedRule.pattern.length) {
      matchedRule = rule;
    } else if (rule.pattern.length === matchedRule.pattern.length && rule.allow && !matchedRule.allow) {
      matchedRule = rule;
    }
    i++;
  }
  return matchedRule;
}
function asArray(v) {
  return typeof v === "undefined" ? [] : Array.isArray(v) ? v : [v];
}
function contentUsageToString(prefs) {
  return Object.entries(prefs).filter(([_, value]) => value !== void 0).map(([key, value]) => `${key}=${value}`).join(", ");
}
function normalizeContentPreferences(value) {
  if (!value)
    return [];
  if (Array.isArray(value))
    return value.filter((rule) => Boolean(rule));
  if (typeof value === "object" && !Array.isArray(value)) {
    const str = contentUsageToString(value);
    return str ? [str] : [];
  }
  if (typeof value === "string")
    return value ? [value] : [];
  return [];
}
function normalizeGroup(group) {
  if (group._normalized) {
    const resolvedGroup = group;
    const disallow2 = asArray(resolvedGroup.disallow);
    resolvedGroup._indexable = !disallow2.includes("/");
    resolvedGroup._rules = [
      ...resolvedGroup.disallow.filter(Boolean).map((r) => ({ pattern: r, allow: false })),
      ...resolvedGroup.allow.map((r) => ({ pattern: r, allow: true }))
    ];
    return resolvedGroup;
  }
  const disallow = asArray(group.disallow);
  const allow = asArray(group.allow).filter((rule) => Boolean(rule));
  const contentUsage = normalizeContentPreferences(group.contentUsage);
  const contentSignal = normalizeContentPreferences(group.contentSignal);
  return {
    ...group,
    userAgent: group.userAgent ? asArray(group.userAgent) : ["*"],
    disallow,
    allow,
    contentUsage,
    contentSignal,
    _indexable: !disallow.includes("/"),
    _rules: [
      ...disallow.filter(Boolean).map((r) => ({ pattern: r, allow: false })),
      ...allow.map((r) => ({ pattern: r, allow: true }))
    ],
    _normalized: true
  };
}
function generateRobotsTxt({ groups, sitemaps }) {
  const lines = [];
  for (const group of groups) {
    for (const comment of group.comment || [])
      lines.push(`# ${comment}`);
    for (const userAgent of group.userAgent || ["*"])
      lines.push(`User-agent: ${userAgent}`);
    for (const allow of group.allow || [])
      lines.push(`Allow: ${allow}`);
    for (const disallow of group.disallow || [])
      lines.push(`Disallow: ${disallow}`);
    for (const cleanParam of group.cleanParam || [])
      lines.push(`Clean-param: ${cleanParam}`);
    for (const contentUsage of group.contentUsage || [])
      lines.push(`Content-Usage: ${contentUsage}`);
    for (const contentSignal of group.contentSignal || [])
      lines.push(`Content-Signal: ${contentSignal}`);
    lines.push("");
  }
  for (const sitemap of sitemaps)
    lines.push(`Sitemap: ${sitemap}`);
  return lines.join("\n");
}
function createPatternMap() {
  const patternMap = /* @__PURE__ */ new Map();
  for (const def of BOT_MAP) {
    for (const bot of def.bots) {
      const patterns = [bot.pattern, ...bot.secondaryPatterns || []];
      for (const pattern of patterns) {
        patternMap.set(pattern.toLowerCase(), {
          botName: bot.name,
          botCategory: def.type,
          trusted: def.trusted
        });
      }
    }
  }
  return patternMap;
}
function normaliseRobotsRouteRule(config) {
  let allow;
  if (typeof config.robots === "boolean")
    allow = config.robots;
  else if (typeof config.robots === "object" && "indexable" in config.robots && typeof config.robots.indexable !== "undefined")
    allow = config.robots.indexable;
  let rule;
  if (typeof config.robots === "object" && config.robots !== null) {
    if ("rule" in config.robots && typeof config.robots.rule !== "undefined") {
      rule = config.robots.rule;
    } else if (!("indexable" in config.robots)) {
      const directives = [];
      for (const [key, value] of Object.entries(config.robots)) {
        if (value === false || value === null || value === void 0)
          continue;
        if (key in ROBOT_DIRECTIVE_VALUES && typeof value === "boolean" && value) {
          directives.push(ROBOT_DIRECTIVE_VALUES[key]);
        } else if (key === "max-image-preview" && typeof value === "string") {
          directives.push(formatMaxImagePreview(value));
        } else if (key === "max-snippet" && typeof value === "number") {
          directives.push(formatMaxSnippet(value));
        } else if (key === "max-video-preview" && typeof value === "number") {
          directives.push(formatMaxVideoPreview(value));
        }
      }
      if (directives.length > 0) {
        rule = directives.join(", ");
      }
    }
  } else if (typeof config.robots === "string") {
    rule = config.robots;
  }
  if (rule && typeof allow === "undefined") {
    const disallowIndicators = ["none", "noindex", "noai", "noimageai"];
    allow = !disallowIndicators.some(
      (indicator) => rule === indicator || rule.split(",").some((part) => part.trim() === indicator)
    );
  }
  if (typeof allow === "undefined" && typeof rule === "undefined")
    return;
  return {
    allow,
    rule
  };
}

function useRuntimeConfigNuxtRobots(event) {
  return useRuntimeConfig(event)["nuxt-robots"];
}

const logger$1 = createConsola({
  defaults: { tag: "@nuxtjs/robots" }
});

async function resolveRobotsTxtContext(e, nitro = useNitroApp()) {
  const { groups, sitemap: sitemaps } = useRuntimeConfigNuxtRobots(e);
  const generateRobotsTxtCtx = {
    event: e,
    context: e ? "robots.txt" : "init",
    ...JSON.parse(JSON.stringify({ groups, sitemaps }))
  };
  await nitro.hooks.callHook("robots:config", generateRobotsTxtCtx);
  generateRobotsTxtCtx.groups = generateRobotsTxtCtx.groups.map(normalizeGroup);
  nitro._robots.ctx = generateRobotsTxtCtx;
  return generateRobotsTxtCtx;
}

const _ofMX7gN69cEklrmCltRAsdJLAGVlff1FhKG8IeIk = defineNitroPlugin(async (nitroApp) => {
  const { isNuxtContentV2, robotsDisabledValue, botDetection } = useRuntimeConfigNuxtRobots();
  if (botDetection !== false) {
    nitroApp._robotsPatternMap = createPatternMap();
  }
  nitroApp._robots = {};
  await resolveRobotsTxtContext(void 0, nitroApp);
  const nuxtContentUrls = /* @__PURE__ */ new Set();
  if (isNuxtContentV2) {
    let urls;
    try {
      urls = await (await nitroApp.localFetch("/__robots__/nuxt-content.json", {})).json();
    } catch (e) {
      logger$1.error("Failed to read robot rules from content files.", e);
    }
    if (urls && Array.isArray(urls) && urls.length) {
      urls.forEach((url) => nuxtContentUrls.add(withoutTrailingSlash(url)));
    }
  }
  if (nuxtContentUrls.size) {
    nitroApp._robots.nuxtContentUrls = nuxtContentUrls;
  }
});

/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger$1 = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => x.default);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger$1(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
const isResolvedModule = (val) => isModule(val) || true;
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isResolvedModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

// @ts-nocheck
const localeCodes =  [
  "en",
  "ar"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_46ts_61a2b00b",
      load: () => import('../_/en.mjs' /* webpackChunkName: "locale_en_46ts_61a2b00b" */),
      cache: false
    }
  ],
  ar: [
    {
      key: "locale_ar_46ts_2c9ff3ff",
      load: () => import('../_/ar.mjs' /* webpackChunkName: "locale_ar_46ts_2c9ff3ff" */),
      cache: false
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "en",
    name: "English",
    language: undefined
  },
  {
    code: "ar",
    name: "Arabic",
    dir: "rtl",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

function baseURL() {
  return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const checksums = {
  "index": "v3.5.0--GKtIuruOc5v6odM9Aoucv7yoFc9K0V5pQTEaRD2R3is",
  "docs": "v3.5.0--quFkNIUZZFAwcn0ok74-KsIERem9u0p5DW-cqEgxrPA",
  "pricing": "v3.5.0--wnIt1a1XoCZg6ky0KqFYWZKtcfAx5Hi2rT-cJUdyfBQ",
  "blog": "v3.5.0--Y1etdP_gPJyLnAPA-R6OXTtYJcGa1HXFvcJtTz6twZI",
  "posts": "v3.5.0--T1f9Z6lBxtlaYr0h3zyERNYd5Hd-UBL_sslgdeO0wVU",
  "changelog": "v3.5.0--Mh2KMIQmN9c-GcsurZte8r6y9ct4ABLLMLnLT_vCW64",
  "versions": "v3.5.0--8U1kRoF-UyCLgtEY4L5Cie4qKP-qTKRdzzKbPn83hms"
};
const checksumsStructure = {
  "index": "GKtIuruOc5v6odM9Aoucv7yoFc9K0V5pQTEaRD2R3is",
  "docs": "quFkNIUZZFAwcn0ok74-KsIERem9u0p5DW-cqEgxrPA",
  "pricing": "wnIt1a1XoCZg6ky0KqFYWZKtcfAx5Hi2rT-cJUdyfBQ",
  "blog": "Y1etdP_gPJyLnAPA-R6OXTtYJcGa1HXFvcJtTz6twZI",
  "posts": "T1f9Z6lBxtlaYr0h3zyERNYd5Hd-UBL_sslgdeO0wVU",
  "changelog": "Mh2KMIQmN9c-GcsurZte8r6y9ct4ABLLMLnLT_vCW64",
  "versions": "8U1kRoF-UyCLgtEY4L5Cie4qKP-qTKRdzzKbPn83hms"
};

const tables = {
  "index": "_content_index",
  "docs": "_content_docs",
  "pricing": "_content_pricing",
  "blog": "_content_blog",
  "posts": "_content_posts",
  "changelog": "_content_changelog",
  "versions": "_content_versions",
  "info": "_content_info"
};

const contentManifest = {
  "index": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "cta": "json",
      "description": "string",
      "extension": "string",
      "features": "json",
      "hero": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "sections": "json",
      "seo": "json",
      "stem": "string",
      "testimonials": "json"
    }
  },
  "docs": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "pricing": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "faq": "json",
      "logos": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "plans": "json",
      "seo": "json",
      "stem": "string"
    }
  },
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "posts": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "authors": "json",
      "badge": "json",
      "body": "json",
      "date": "date",
      "description": "string",
      "extension": "string",
      "image": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "changelog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "versions": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "date": "date",
      "description": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts?.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = opts?.limit || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

async function fetchDatabase(event, collection) {
  return await $fetch(`/__nuxt_content/${collection}/sql_dump.txt`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    responseType: "text",
    headers: {
      "content-type": "text/plain",
      ...event?.node?.req?.headers?.cookie ? { cookie: event.node.req.headers.cookie } : {}
    },
    query: { v: checksums[String(collection)], t: void 0 }
  });
}
async function fetchQuery(event, collection, sql) {
  return await $fetch(`/__nuxt_content/${collection}/query`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    headers: {
      "content-type": "application/json",
      ...event?.node?.req?.headers?.cookie ? { cookie: event.node.req.headers.cookie } : {}
    },
    query: { v: checksums[String(collection)], t: void 0 },
    method: "POST",
    body: {
      sql
    }
  });
}

const queryCollection = (event, collection) => {
  return collectionQueryBuilder(collection, (collection2, sql) => fetchQuery(event, collection2, sql));
};

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function getSiteIndexable(e) {
  const { env, indexable } = getSiteConfig(e);
  if (typeof indexable !== "undefined")
    return String(indexable) === "true";
  return env === "production";
}

function useNitroOrigin(e) {
  return getNitroOrigin(e);
}

function withoutQuery$1(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher$1(e) {
  const { nitro, app } = useRuntimeConfig(e);
  const _routeRulesMatcher = toRouteMatcher(
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery$1(path)), app.baseURL)
    ).reverse());
  };
}

function getSiteRobotConfig(e) {
  const query = getQuery(e);
  const hints = [];
  const { groups, debug } = useRuntimeConfigNuxtRobots(e);
  let indexable = getSiteIndexable(e);
  const queryIndexableEnabled = String(query.mockProductionEnv) === "true" || query.mockProductionEnv === "";
  if (debug || false) {
    const { _context } = getSiteConfig(e, { debug: debug || false });
    if (queryIndexableEnabled) {
      indexable = true;
      hints.push("You are mocking a production enviroment with ?mockProductionEnv query.");
    } else if (!indexable && _context.indexable === "nuxt-robots:config") {
      hints.push("You are blocking indexing with your Nuxt Robots config.");
    } else if (!queryIndexableEnabled && !_context.indexable) {
      hints.push(`Indexing is blocked in development. You can mock a production environment with ?mockProductionEnv query.`);
    } else if (!indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is blocked by site config set by ${_context.indexable}.`);
    } else if (indexable && !queryIndexableEnabled) {
      hints.push(`Indexing is enabled from ${_context.indexable}.`);
    }
  }
  if (groups.some((g) => g.userAgent.includes("*") && g.disallow.includes("/"))) {
    indexable = false;
    hints.push("You are blocking all user agents with a wildcard `Disallow /`.");
  } else if (groups.some((g) => g.disallow.includes("/"))) {
    hints.push("You are blocking specific user agents with `Disallow /`.");
  }
  return { indexable, hints };
}

function getPathRobotConfig(e, options) {
  const runtimeConfig = useRuntimeConfig(e);
  const { robotsDisabledValue, robotsEnabledValue, isNuxtContentV2 } = useRuntimeConfigNuxtRobots(e);
  if (!options?.skipSiteIndexable) {
    if (!getSiteRobotConfig(e).indexable) {
      return {
        rule: robotsDisabledValue,
        indexable: false,
        debug: {
          source: "Site Config"
        }
      };
    }
  }
  const path = options?.path || e.path;
  let userAgent = options?.userAgent;
  if (!userAgent) {
    try {
      userAgent = getRequestHeader(e, "User-Agent");
    } catch {
    }
  }
  const nitroApp = useNitroApp();
  const groups = [
    // run explicit user agent matching first
    ...nitroApp._robots.ctx.groups.filter((g) => {
      if (userAgent) {
        return g.userAgent.some((ua) => ua.toLowerCase().includes(userAgent.toLowerCase()));
      }
      return false;
    }),
    // run wildcard matches second
    ...nitroApp._robots.ctx.groups.filter((g) => g.userAgent.includes("*"))
  ];
  for (const group of groups) {
    if (group._indexable === false) {
      return {
        indexable: false,
        rule: robotsDisabledValue,
        debug: {
          source: "/robots.txt",
          line: JSON.stringify(group)
        }
      };
    }
    const robotsTxtRule = matchPathToRule(path, group._rules || []);
    if (robotsTxtRule) {
      if (!robotsTxtRule.allow) {
        return {
          indexable: false,
          rule: robotsDisabledValue,
          debug: {
            source: "/robots.txt",
            line: `Disallow: ${robotsTxtRule.pattern}`
          }
        };
      }
      break;
    }
  }
  if (isNuxtContentV2 && nitroApp._robots?.nuxtContentUrls?.has(withoutTrailingSlash(path))) {
    return {
      indexable: false,
      rule: robotsDisabledValue,
      debug: {
        source: "Nuxt Content"
      }
    };
  }
  nitroApp._robotsRuleMatcher = nitroApp._robotsRuleMatcher || createNitroRouteRuleMatcher$1(e);
  let robotRouteRules = nitroApp._robotsRuleMatcher(path);
  let routeRulesPath = path;
  if (runtimeConfig.public?.i18n?.locales && typeof robotRouteRules.robots === "undefined") {
    const { locales } = runtimeConfig.public.i18n;
    const locale = locales.find((l) => routeRulesPath.startsWith(`/${l.code}`));
    if (locale) {
      routeRulesPath = routeRulesPath.replace(`/${locale.code}`, "");
      robotRouteRules = nitroApp._robotsRuleMatcher(routeRulesPath);
    }
  }
  const routeRules = normaliseRobotsRouteRule(robotRouteRules);
  if (routeRules && (typeof routeRules.allow !== "undefined" || typeof routeRules.rule !== "undefined")) {
    return {
      indexable: routeRules.allow ?? false,
      rule: routeRules.rule || (routeRules.allow ? robotsEnabledValue : robotsDisabledValue),
      debug: {
        source: "Route Rules"
      }
    };
  }
  return {
    indexable: true,
    rule: robotsEnabledValue
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[{"src":"https://app.beon.chat/widget.js","tagPosition":"bodyClose","data-api-key":"df73436fd31e7c4a42d187e049f746b5","async":true,"defer":true}],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt","class":"isolate"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {
  "/about": {
    "en": "/about",
    "ar": "/about"
  },
  "/": {
    "en": "/",
    "ar": "/"
  },
  "/login": {
    "en": "/login",
    "ar": "/login"
  },
  "/terms": {
    "en": "/terms",
    "ar": "/terms"
  },
  "/signup": {
    "en": "/signup",
    "ar": "/signup"
  },
  "/careers": {
    "en": "/careers",
    "ar": "/careers"
  },
  "/contact": {
    "en": "/contact",
    "ar": "/contact"
  },
  "/privacy": {
    "en": "/privacy",
    "ar": "/privacy"
  },
  "/security": {
    "en": "/security",
    "ar": "/security"
  },
  "/blog": {
    "en": "/blog",
    "ar": "/blog"
  },
  "/blog/:slug()": {
    "en": "/blog/:slug()",
    "ar": "/blog/:slug()"
  },
  "/solutions/otp": {
    "en": "/solutions/otp",
    "ar": "/solutions/otp"
  },
  "/solutions/sms": {
    "en": "/solutions/sms",
    "ar": "/solutions/sms"
  },
  "/privacy-policy": {
    "en": "/privacy-policy",
    "ar": "/privacy-policy"
  },
  "/terms-conditions": {
    "en": "/terms-conditions",
    "ar": "/terms-conditions"
  },
  "/solutions/whatsapp": {
    "en": "/solutions/whatsapp",
    "ar": "/solutions/whatsapp"
  },
  "/ndefined": {
    "en": "/ndefined",
    "ar": "/ndefined"
  }
};
const i18nPathToPath = {
  "/about": "/about",
  "/": "/",
  "/login": "/login",
  "/terms": "/terms",
  "/signup": "/signup",
  "/careers": "/careers",
  "/contact": "/contact",
  "/privacy": "/privacy",
  "/security": "/security",
  "/blog": "/blog",
  "/blog/:slug()": "/blog/:slug()",
  "/solutions/otp": "/solutions/otp",
  "/solutions/sms": "/solutions/sms",
  "/privacy-policy": "/privacy-policy",
  "/terms-conditions": "/terms-conditions",
  "/solutions/whatsapp": "/solutions/whatsapp",
  "/ndefined": "/ndefined"
};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    const isPrefixable = prefixable(locale, defaultLocale);
    return withLeadingSlash(joinURL(isPrefixable ? locale : "", match.path));
  }
}
function prefixable(currentLocale, defaultLocale) {
  return (currentLocale !== defaultLocale || "prefix_except_default" === "prefix");
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  {
    yield { locale: detectors.route(path), source: "route" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
const _Qp2W4wCUa26gJ2C7ocS9b21F9jcRsducMOfe5_viLs = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "prefix_except_default" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async ({ event }) => {
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/JGS6Bpnr") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      await sendRedirect(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _iUEGDG3brT2RmKsX51tyxueBoo0v5NxO0bkwbQVluTk = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _3idNzXIyCRttuwpgVK1PC3ZhCpELxuyFndNrBCshoWg,
_ebDMJeMVBDtQJO7Z4VuPuGOMOYo2hR8Ql32UBNFG6xo,
_ofMX7gN69cEklrmCltRAsdJLAGVlff1FhKG8IeIk,
_Qp2W4wCUa26gJ2C7ocS9b21F9jcRsducMOfe5_viLs,
_iUEGDG3brT2RmKsX51tyxueBoo0v5NxO0bkwbQVluTk
];

const assets = {
  "/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"17f7-LElE42PyKYKhg4q/avfAev+oevM\"",
    "mtime": "2025-12-18T20:17:44.020Z",
    "size": 6135,
    "path": "../public/_payload.json"
  },
  "/_payload.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"6ce-BjX8H45qeCZm6w0QB4Bn6tQlFlk\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 1742,
    "path": "../public/_payload.json.br"
  },
  "/_payload.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"821-Fq+6DHuEQqZWVXp6dwDEmeSnoPU\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 2081,
    "path": "../public/_payload.json.gz"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2025-12-18T20:18:11.466Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"3ea31-OunQwlgjhyVKEIVSyZmenQQ/exs\"",
    "mtime": "2025-12-18T20:17:43.941Z",
    "size": 256561,
    "path": "../public/index.html"
  },
  "/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"5732-gP8jT4vnW00ZEynq3mR7HOV8cqI\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 22322,
    "path": "../public/index.html.br"
  },
  "/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"717c-WWjkzGBy5Ij17ItB5OUCbINhPrc\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 29052,
    "path": "../public/index.html.gz"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"24cd-133Y6cyi5pQXyBK2zyeTHcpld/c\"",
    "mtime": "2025-12-18T20:18:11.466Z",
    "size": 9421,
    "path": "../public/logo.svg"
  },
  "/logo.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"e42-/0slxS63Yx2Z0pZLk6aI/rDV0HA\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 3650,
    "path": "../public/logo.svg.br"
  },
  "/logo.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"1004-7GueRcv8giRxEwRBamZXfR6TBf8\"",
    "mtime": "2025-12-18T20:18:13.722Z",
    "size": 4100,
    "path": "../public/logo.svg.gz"
  },
  "/logoDark.svg": {
    "type": "image/svg+xml",
    "etag": "\"265e-VqfIQgJNvpuoHxjH8MFdWjgNnqA\"",
    "mtime": "2025-12-18T20:18:11.466Z",
    "size": 9822,
    "path": "../public/logoDark.svg"
  },
  "/logoDark.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"e6b-k4S4Yb+XJlC9bw+goPcVe9qYvdc\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 3691,
    "path": "../public/logoDark.svg.br"
  },
  "/logoDark.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"101e-codAaDTGJ+Djbxvgp9WNJmdS6Cc\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 4126,
    "path": "../public/logoDark.svg.gz"
  },
  "/sitemap_index.xml": {
    "type": "application/xml",
    "etag": "\"1bf-JrdO+DPAlBe+iZRaFBKyVKfbg+U\"",
    "mtime": "2025-12-18T20:17:46.384Z",
    "size": 447,
    "path": "../public/sitemap_index.xml"
  },
  "/__sitemap__/ar.xml": {
    "type": "application/xml",
    "etag": "\"5e47-e7By9D3pX3JA2RlnXn1LSdu64V8\"",
    "mtime": "2025-12-18T20:17:46.426Z",
    "size": 24135,
    "path": "../public/__sitemap__/ar.xml"
  },
  "/__sitemap__/ar.xml.br": {
    "type": "application/xml",
    "encoding": "br",
    "etag": "\"858-A5doXLHxhiYA9ZOiHjWwzevcbso\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 2136,
    "path": "../public/__sitemap__/ar.xml.br"
  },
  "/__sitemap__/ar.xml.gz": {
    "type": "application/xml",
    "encoding": "gzip",
    "etag": "\"978-YdRo3c3fynOHUtBayMqCYbrQujY\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 2424,
    "path": "../public/__sitemap__/ar.xml.gz"
  },
  "/__sitemap__/en.xml": {
    "type": "application/xml",
    "etag": "\"74e4-Lp0kWQCAoagCFtl9Yq2XzhtA8bA\"",
    "mtime": "2025-12-18T20:17:46.415Z",
    "size": 29924,
    "path": "../public/__sitemap__/en.xml"
  },
  "/__sitemap__/en.xml.br": {
    "type": "application/xml",
    "encoding": "br",
    "etag": "\"8da-W2Zhe4CIxvTfAJSRGfKm3JaLnPw\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 2266,
    "path": "../public/__sitemap__/en.xml.br"
  },
  "/__sitemap__/en.xml.gz": {
    "type": "application/xml",
    "encoding": "gzip",
    "etag": "\"a6f-vllRVfSr/Lb/KJCUEvwdL/ko/oI\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 2671,
    "path": "../public/__sitemap__/en.xml.gz"
  },
  "/_fonts/3Ws2J95kcMT1TyAQGiRdk2vh0W513W7p9uNUw29mwp4-DGIsUGw72m06XU9HkJt9r5TiirEsJyeThIorh5fT4lA.woff": {
    "type": "font/woff",
    "etag": "\"1738-HabX/mFn6st1prnmrLgFdukoFNw\"",
    "mtime": "2025-12-18T20:18:11.018Z",
    "size": 5944,
    "path": "../public/_fonts/3Ws2J95kcMT1TyAQGiRdk2vh0W513W7p9uNUw29mwp4-DGIsUGw72m06XU9HkJt9r5TiirEsJyeThIorh5fT4lA.woff"
  },
  "/_fonts/3Ws2J95kcMT1TyAQGiRdk2vh0W513W7p9uNUw29mwp4-gRMFErJrJR04r551KWrqHRAYeNBbLowNOliZlIFKcJw.woff2": {
    "type": "font/woff2",
    "etag": "\"11ac-MysRrsCZLNbu2ZOe2/lUPfCh27c\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 4524,
    "path": "../public/_fonts/3Ws2J95kcMT1TyAQGiRdk2vh0W513W7p9uNUw29mwp4-gRMFErJrJR04r551KWrqHRAYeNBbLowNOliZlIFKcJw.woff2"
  },
  "/_fonts/66OgmLTltrATqpexu8ALPBIY7KDAspRFhec1euDoy78-PaKzvhQtWdfNma2fWKAMDs1OvC_E0njQb04_xjHyXNM.woff2": {
    "type": "font/woff2",
    "etag": "\"3da0-PS0MbwvkCKZWSRQ9wGownmdCIrM\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 15776,
    "path": "../public/_fonts/66OgmLTltrATqpexu8ALPBIY7KDAspRFhec1euDoy78-PaKzvhQtWdfNma2fWKAMDs1OvC_E0njQb04_xjHyXNM.woff2"
  },
  "/_fonts/66OgmLTltrATqpexu8ALPBIY7KDAspRFhec1euDoy78-WDkAiMYAn_1nBy9CJMbH62UxgPk-tHKYkT3NFNqYpoE.woff": {
    "type": "font/woff",
    "etag": "\"4d68-h+YOubFOq/Tvhf6YMoL+jnRvnlg\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 19816,
    "path": "../public/_fonts/66OgmLTltrATqpexu8ALPBIY7KDAspRFhec1euDoy78-WDkAiMYAn_1nBy9CJMbH62UxgPk-tHKYkT3NFNqYpoE.woff"
  },
  "/_fonts/8gyRrX3Cf_Txo5C_JboEoMnmtDUUhaFvv-hGel59Grg-n0LuB_EDs_vlVBtWSYPDqvCNL0iqlKPHCzM7FRvbCls.woff2": {
    "type": "font/woff2",
    "etag": "\"2ad8-/W8mH5LXHu2Jcixwf7TlhlWHeeE\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 10968,
    "path": "../public/_fonts/8gyRrX3Cf_Txo5C_JboEoMnmtDUUhaFvv-hGel59Grg-n0LuB_EDs_vlVBtWSYPDqvCNL0iqlKPHCzM7FRvbCls.woff2"
  },
  "/_fonts/8gyRrX3Cf_Txo5C_JboEoMnmtDUUhaFvv-hGel59Grg-xvCc_NZ0Ah7iXrbzw9su4ZKn18R4PHtRjAOM-6CVXo4.woff": {
    "type": "font/woff",
    "etag": "\"396c-W0g/AN9OwOPpIGSUGbSNCgJl8RM\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 14700,
    "path": "../public/_fonts/8gyRrX3Cf_Txo5C_JboEoMnmtDUUhaFvv-hGel59Grg-xvCc_NZ0Ah7iXrbzw9su4ZKn18R4PHtRjAOM-6CVXo4.woff"
  },
  "/_fonts/9wxo9TMxkUdGNSbCjC_P9qbk-lNUKDaZ_QmQ9rDgFkE-F8aN0ex0s_TZY7UNOs9mKSUU27GWLJZQo9x2eFETKWs.woff2": {
    "type": "font/woff2",
    "etag": "\"28d4-O8stkt2L353kXEM9rJg6PgXuTc8\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 10452,
    "path": "../public/_fonts/9wxo9TMxkUdGNSbCjC_P9qbk-lNUKDaZ_QmQ9rDgFkE-F8aN0ex0s_TZY7UNOs9mKSUU27GWLJZQo9x2eFETKWs.woff2"
  },
  "/_fonts/9wxo9TMxkUdGNSbCjC_P9qbk-lNUKDaZ_QmQ9rDgFkE-uCJrA225Z1GV4b_BSKIkxiqA0Dw0Dy7R2UTbvugRg9c.woff": {
    "type": "font/woff",
    "etag": "\"377c-supv3XklfafPbVZ4B80/4yv1llw\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 14204,
    "path": "../public/_fonts/9wxo9TMxkUdGNSbCjC_P9qbk-lNUKDaZ_QmQ9rDgFkE-uCJrA225Z1GV4b_BSKIkxiqA0Dw0Dy7R2UTbvugRg9c.woff"
  },
  "/_fonts/9zy8uf_Hqe9e1HEmGkiViP3zEXZ0A3r1nSwkPiIibDk-VSPaz_6XVG7JPXKweeZISLWvgv73AQJeai_J7AXBLZA.woff2": {
    "type": "font/woff2",
    "etag": "\"3940-baCUigUI1/n85WQoIB5vH5sH4co\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 14656,
    "path": "../public/_fonts/9zy8uf_Hqe9e1HEmGkiViP3zEXZ0A3r1nSwkPiIibDk-VSPaz_6XVG7JPXKweeZISLWvgv73AQJeai_J7AXBLZA.woff2"
  },
  "/_fonts/9zy8uf_Hqe9e1HEmGkiViP3zEXZ0A3r1nSwkPiIibDk-q1JTpYoQdD_YS35-aclLP7dgoTIPhtyY6_2ZJoLr_q4.woff": {
    "type": "font/woff",
    "etag": "\"485c-99lYEfab/d5AWMS9pXlEiscphnY\"",
    "mtime": "2025-12-18T20:18:11.019Z",
    "size": 18524,
    "path": "../public/_fonts/9zy8uf_Hqe9e1HEmGkiViP3zEXZ0A3r1nSwkPiIibDk-q1JTpYoQdD_YS35-aclLP7dgoTIPhtyY6_2ZJoLr_q4.woff"
  },
  "/_fonts/AgFJdHpkS_H9sVLl99BPuvRdzdo5FX9cPBjAMclGxDY-AHCz22zk19u8_tZcnrD9XbeXyTna1b36FssTvanq7co.woff": {
    "type": "font/woff",
    "etag": "\"4d64-tdfqqDivKlmz+PWmKrSr38i9sMg\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 19812,
    "path": "../public/_fonts/AgFJdHpkS_H9sVLl99BPuvRdzdo5FX9cPBjAMclGxDY-AHCz22zk19u8_tZcnrD9XbeXyTna1b36FssTvanq7co.woff"
  },
  "/_fonts/AgFJdHpkS_H9sVLl99BPuvRdzdo5FX9cPBjAMclGxDY-xz99nvQaMNgiHgoHRNYQ432qi1d1Fojf6ULP8tRZBYc.woff2": {
    "type": "font/woff2",
    "etag": "\"3da0-NHvjAfFIYVJKuA1ojIQxnUd+Bh8\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 15776,
    "path": "../public/_fonts/AgFJdHpkS_H9sVLl99BPuvRdzdo5FX9cPBjAMclGxDY-xz99nvQaMNgiHgoHRNYQ432qi1d1Fojf6ULP8tRZBYc.woff2"
  },
  "/_fonts/BVSU_OI1eCvr7H2X_gxbb0zAI7ulMGi3zbu0Rgag75Q-68ikQ2keTjhxJVXkMb3o3N_cyB73VriFFHZPU1zW2WA.woff2": {
    "type": "font/woff2",
    "etag": "\"1350-9mM4lkkTSOe/jr0g6o2Xrfi7yhU\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 4944,
    "path": "../public/_fonts/BVSU_OI1eCvr7H2X_gxbb0zAI7ulMGi3zbu0Rgag75Q-68ikQ2keTjhxJVXkMb3o3N_cyB73VriFFHZPU1zW2WA.woff2"
  },
  "/_fonts/BVSU_OI1eCvr7H2X_gxbb0zAI7ulMGi3zbu0Rgag75Q-yplYQr1D8xpRGbhbJCOS1YWoCBhDjZ8Zt4EKckHCopU.woff": {
    "type": "font/woff",
    "etag": "\"192c-3Qu1JWeHm49bCTq6Z7xi6YGCkY8\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 6444,
    "path": "../public/_fonts/BVSU_OI1eCvr7H2X_gxbb0zAI7ulMGi3zbu0Rgag75Q-yplYQr1D8xpRGbhbJCOS1YWoCBhDjZ8Zt4EKckHCopU.woff"
  },
  "/_fonts/CC9L0lSaqQJsWP7v0Xd4YyRp3RqytFhME4EivK9w7Ds-LZAdnaWHUVEnuIIihLSnvMVOLsDmKK8X1e2K5uypSSU.woff2": {
    "type": "font/woff2",
    "etag": "\"2b24-CdSHSJX48g6zssOcUqvleEvszs8\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 11044,
    "path": "../public/_fonts/CC9L0lSaqQJsWP7v0Xd4YyRp3RqytFhME4EivK9w7Ds-LZAdnaWHUVEnuIIihLSnvMVOLsDmKK8X1e2K5uypSSU.woff2"
  },
  "/_fonts/CC9L0lSaqQJsWP7v0Xd4YyRp3RqytFhME4EivK9w7Ds-vEx3PqWHmaVw9gKekCOrC9Z2_txAIUsqdVNTGNLkDa8.woff": {
    "type": "font/woff",
    "etag": "\"3994-Jlzg3fFJoA/ouJRNu5UhMvOM1qE\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 14740,
    "path": "../public/_fonts/CC9L0lSaqQJsWP7v0Xd4YyRp3RqytFhME4EivK9w7Ds-vEx3PqWHmaVw9gKekCOrC9Z2_txAIUsqdVNTGNLkDa8.woff"
  },
  "/_fonts/ELM09jHAgKQPwZxS9F8GwbEHm_9Gv2E9CFw7-LcKSUI-rpCq329DeMbzVy13KBjvaaVSKT5XVhMITQwASDv5kU0.woff": {
    "type": "font/woff",
    "etag": "\"1734-BDzU6Ffip/H9iTuqnzh87rWXnHU\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 5940,
    "path": "../public/_fonts/ELM09jHAgKQPwZxS9F8GwbEHm_9Gv2E9CFw7-LcKSUI-rpCq329DeMbzVy13KBjvaaVSKT5XVhMITQwASDv5kU0.woff"
  },
  "/_fonts/ELM09jHAgKQPwZxS9F8GwbEHm_9Gv2E9CFw7-LcKSUI-v3Tw8WlBbzIjsTNFGiRVR7CwqYvga_LUigYR8H6rhtU.woff2": {
    "type": "font/woff2",
    "etag": "\"1190-f6ZWCx7Lh3gq83jIUTcz43aRNag\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 4496,
    "path": "../public/_fonts/ELM09jHAgKQPwZxS9F8GwbEHm_9Gv2E9CFw7-LcKSUI-v3Tw8WlBbzIjsTNFGiRVR7CwqYvga_LUigYR8H6rhtU.woff2"
  },
  "/_fonts/M5O9b7gOIpkWvw_n4yn6wc_llytaTcVXJ-Zi98vXPsw-UfgPgSmbSFb5N8aQ5KPSwsjmgoyQC7XM62RGz3R3Y9Y.woff2": {
    "type": "font/woff2",
    "etag": "\"11a0-G8qdtfyeGwVklcPo4QrQUImayY4\"",
    "mtime": "2025-12-18T20:18:11.021Z",
    "size": 4512,
    "path": "../public/_fonts/M5O9b7gOIpkWvw_n4yn6wc_llytaTcVXJ-Zi98vXPsw-UfgPgSmbSFb5N8aQ5KPSwsjmgoyQC7XM62RGz3R3Y9Y.woff2"
  },
  "/_fonts/M5O9b7gOIpkWvw_n4yn6wc_llytaTcVXJ-Zi98vXPsw-bR0Z3zI1iAnabH4YQfwyTfdocmhah52_6fbivPmIcxk.woff": {
    "type": "font/woff",
    "etag": "\"172c-l+nTv22VCh5XmBCQ5gzdMXUCuCs\"",
    "mtime": "2025-12-18T20:18:11.025Z",
    "size": 5932,
    "path": "../public/_fonts/M5O9b7gOIpkWvw_n4yn6wc_llytaTcVXJ-Zi98vXPsw-bR0Z3zI1iAnabH4YQfwyTfdocmhah52_6fbivPmIcxk.woff"
  },
  "/_fonts/Sq4_savrZFyDI7wQ2FunT_92Lm8jvFRSout0Csrtykk-YO1end5yg7R_qKPxTxN5lDJjUEuOcHvEAYcc4JjEm2w.woff2": {
    "type": "font/woff2",
    "etag": "\"3d84-Nm9xILAs/UgUT5Cl3wx8rR4B5qk\"",
    "mtime": "2025-12-18T20:18:11.020Z",
    "size": 15748,
    "path": "../public/_fonts/Sq4_savrZFyDI7wQ2FunT_92Lm8jvFRSout0Csrtykk-YO1end5yg7R_qKPxTxN5lDJjUEuOcHvEAYcc4JjEm2w.woff2"
  },
  "/_fonts/Sq4_savrZFyDI7wQ2FunT_92Lm8jvFRSout0Csrtykk-ajvGtPRnjDEI3l_qMnamOO6AfcsgwnrRfbpRd3034PA.woff": {
    "type": "font/woff",
    "etag": "\"4dc4-Du66MCbVnI5oyRN687kKnbWYugk\"",
    "mtime": "2025-12-18T20:18:11.025Z",
    "size": 19908,
    "path": "../public/_fonts/Sq4_savrZFyDI7wQ2FunT_92Lm8jvFRSout0Csrtykk-ajvGtPRnjDEI3l_qMnamOO6AfcsgwnrRfbpRd3034PA.woff"
  },
  "/_fonts/UpMGSTgcKoFQippwkukmFsVdLhUa-3WBgoLJGgYHF0U-UAoxk_twk46_RXDoH94n_GHcSdS10quuongznZOU3lk.woff2": {
    "type": "font/woff2",
    "etag": "\"1194-MxAISce4hGQnf5wj5JNAUjqokt4\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 4500,
    "path": "../public/_fonts/UpMGSTgcKoFQippwkukmFsVdLhUa-3WBgoLJGgYHF0U-UAoxk_twk46_RXDoH94n_GHcSdS10quuongznZOU3lk.woff2"
  },
  "/_fonts/UpMGSTgcKoFQippwkukmFsVdLhUa-3WBgoLJGgYHF0U-mP1auA2R5H2rg7W84BtV6Fo7OI67CdlYYmHU8dZrbRg.woff": {
    "type": "font/woff",
    "etag": "\"1738-ofmhZbQwIhy9HrKn18H87uZB7RE\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 5944,
    "path": "../public/_fonts/UpMGSTgcKoFQippwkukmFsVdLhUa-3WBgoLJGgYHF0U-mP1auA2R5H2rg7W84BtV6Fo7OI67CdlYYmHU8dZrbRg.woff"
  },
  "/_fonts/WtxvZkMuB48zrZ4cEK88Of_aOgHBScVzQ-DxHJ3cEMY-00Se_e2o5B8iZ_4wX7sj8jUczGDGoSfDYQ3C-2pe9MY.woff": {
    "type": "font/woff",
    "etag": "\"37b4-1Y1KKD5xsNV3xM13b6r4E9nusaE\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 14260,
    "path": "../public/_fonts/WtxvZkMuB48zrZ4cEK88Of_aOgHBScVzQ-DxHJ3cEMY-00Se_e2o5B8iZ_4wX7sj8jUczGDGoSfDYQ3C-2pe9MY.woff"
  },
  "/_fonts/WtxvZkMuB48zrZ4cEK88Of_aOgHBScVzQ-DxHJ3cEMY-0dzG_VuTaI43p2Oq5lEZD95deNWp3mF5uOTq90kl8Y4.woff2": {
    "type": "font/woff2",
    "etag": "\"291c-20ag9xS1MlycAsZuiLM0K7A+gWM\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 10524,
    "path": "../public/_fonts/WtxvZkMuB48zrZ4cEK88Of_aOgHBScVzQ-DxHJ3cEMY-0dzG_VuTaI43p2Oq5lEZD95deNWp3mF5uOTq90kl8Y4.woff2"
  },
  "/_fonts/Xuq8aYbREkpx-qeJnlFoITQgdfxD4xtrVDomGlSURrI-KZvFQ34YO0qeyql_Qc3Z50SMytIfx_M_PyXhpT226uk.woff": {
    "type": "font/woff",
    "etag": "\"3768-LcEhbSZx2C5JilSVUmOHOrjXHV0\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 14184,
    "path": "../public/_fonts/Xuq8aYbREkpx-qeJnlFoITQgdfxD4xtrVDomGlSURrI-KZvFQ34YO0qeyql_Qc3Z50SMytIfx_M_PyXhpT226uk.woff"
  },
  "/_fonts/Xuq8aYbREkpx-qeJnlFoITQgdfxD4xtrVDomGlSURrI-Ma87XT529_KLzq8Sv9ge8kms0i1A0hY-WcZ02LYVP04.woff2": {
    "type": "font/woff2",
    "etag": "\"2924-Acx3k1D3fbsbaXMgi3xGjCMjc8s\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 10532,
    "path": "../public/_fonts/Xuq8aYbREkpx-qeJnlFoITQgdfxD4xtrVDomGlSURrI-Ma87XT529_KLzq8Sv9ge8kms0i1A0hY-WcZ02LYVP04.woff2"
  },
  "/_fonts/a99YZjN80v4yUA4Z2_VsjL13SZm43bSXiij8DTKvSsk-0fH_eGXVxHJH_Un_UG6-uJoyiFhofljTwjajVbsckFI.woff": {
    "type": "font/woff",
    "etag": "\"4d68-bQ2JjgBGpA7uGjSmXWLFN5P+/8U\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 19816,
    "path": "../public/_fonts/a99YZjN80v4yUA4Z2_VsjL13SZm43bSXiij8DTKvSsk-0fH_eGXVxHJH_Un_UG6-uJoyiFhofljTwjajVbsckFI.woff"
  },
  "/_fonts/a99YZjN80v4yUA4Z2_VsjL13SZm43bSXiij8DTKvSsk-GO3YyKzfWW8Ut9_i4RIJ2skMN5NU28DUlFoN1HIFL_M.woff2": {
    "type": "font/woff2",
    "etag": "\"3d1c-cFmSXSlYU24wbWSH+TbI17KYjV8\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 15644,
    "path": "../public/_fonts/a99YZjN80v4yUA4Z2_VsjL13SZm43bSXiij8DTKvSsk-GO3YyKzfWW8Ut9_i4RIJ2skMN5NU28DUlFoN1HIFL_M.woff2"
  },
  "/_fonts/iZOlT0Me5UbmVrqMiUktbk7e9R6rwZ0n7gNk4nbnDhU-1cx0JYsWmNHHWI1A92vYmYfJXsUkacJL4uz_GQTpE5U.woff2": {
    "type": "font/woff2",
    "etag": "\"1324-fnw7KN6b5IRmhlslM+hfLcuBgyA\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 4900,
    "path": "../public/_fonts/iZOlT0Me5UbmVrqMiUktbk7e9R6rwZ0n7gNk4nbnDhU-1cx0JYsWmNHHWI1A92vYmYfJXsUkacJL4uz_GQTpE5U.woff2"
  },
  "/_fonts/iZOlT0Me5UbmVrqMiUktbk7e9R6rwZ0n7gNk4nbnDhU-tnLSMC7f__CRddAC6hHm0ltJ9H1Z53JNfMbKimagfHU.woff": {
    "type": "font/woff",
    "etag": "\"1924-VX3Lm/fcRqXEpBS2e/0NlmC3oHs\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 6436,
    "path": "../public/_fonts/iZOlT0Me5UbmVrqMiUktbk7e9R6rwZ0n7gNk4nbnDhU-tnLSMC7f__CRddAC6hHm0ltJ9H1Z53JNfMbKimagfHU.woff"
  },
  "/_fonts/nlAbRvQULpa5oJyvhmIeqN_zcq4idGxHaTbpSpImlZY-n1spduAShxEoaUNp4Cu61jfJABYYur7_3ahXGbh943g.woff": {
    "type": "font/woff",
    "etag": "\"487c-iGT13d2Cr0vfrk/uMHNRzvr6oLY\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 18556,
    "path": "../public/_fonts/nlAbRvQULpa5oJyvhmIeqN_zcq4idGxHaTbpSpImlZY-n1spduAShxEoaUNp4Cu61jfJABYYur7_3ahXGbh943g.woff"
  },
  "/_fonts/nlAbRvQULpa5oJyvhmIeqN_zcq4idGxHaTbpSpImlZY-p8PMBJXqEoFBsD2AZZUNmEhrz0_HlkNXjL1KjG8dl2A.woff2": {
    "type": "font/woff2",
    "etag": "\"3900-UhY3tq2GODmpMNNPv2nnBPkASpw\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 14592,
    "path": "../public/_fonts/nlAbRvQULpa5oJyvhmIeqN_zcq4idGxHaTbpSpImlZY-p8PMBJXqEoFBsD2AZZUNmEhrz0_HlkNXjL1KjG8dl2A.woff2"
  },
  "/_fonts/oLUEFoOPXmpOVo-Uy_SDBjp4fBK4rpcX5iCD0MJCWFk-kY01gIRvj7ujyYP4qHgwSiJ4XYvcNitCZZZKE1ekpFc.woff2": {
    "type": "font/woff2",
    "etag": "\"1354-bs2Hv+7kbABdalz9kVT+5ewDiV8\"",
    "mtime": "2025-12-18T20:18:11.027Z",
    "size": 4948,
    "path": "../public/_fonts/oLUEFoOPXmpOVo-Uy_SDBjp4fBK4rpcX5iCD0MJCWFk-kY01gIRvj7ujyYP4qHgwSiJ4XYvcNitCZZZKE1ekpFc.woff2"
  },
  "/_fonts/oLUEFoOPXmpOVo-Uy_SDBjp4fBK4rpcX5iCD0MJCWFk-oNABOeb3dwbPgYOsg_PkC9-fFhpKrGUisLioGHYlI4k.woff": {
    "type": "font/woff",
    "etag": "\"1960-G33PPvDxinbZYRvk3y1CFwZMY4I\"",
    "mtime": "2025-12-18T20:18:11.026Z",
    "size": 6496,
    "path": "../public/_fonts/oLUEFoOPXmpOVo-Uy_SDBjp4fBK4rpcX5iCD0MJCWFk-oNABOeb3dwbPgYOsg_PkC9-fFhpKrGUisLioGHYlI4k.woff"
  },
  "/_fonts/qSDgeczq3g3RV7_G1oBfTizK830GNNim2LdBeVeumuw-7_ClVNhAJo4OzeYCVigjzrBPR6shVKYpEyRSxOG48Ec.woff": {
    "type": "font/woff",
    "etag": "\"377c-KDXKZJFMQOp7Iw3YRScNNUffPLM\"",
    "mtime": "2025-12-18T20:18:11.027Z",
    "size": 14204,
    "path": "../public/_fonts/qSDgeczq3g3RV7_G1oBfTizK830GNNim2LdBeVeumuw-7_ClVNhAJo4OzeYCVigjzrBPR6shVKYpEyRSxOG48Ec.woff"
  },
  "/_fonts/qSDgeczq3g3RV7_G1oBfTizK830GNNim2LdBeVeumuw-Bfpuq_Tgx1qRBYYpVvhR24VkF6U8Ni9Df9CKYMAKF1M.woff2": {
    "type": "font/woff2",
    "etag": "\"28d0-TRfu7JO3qrNtGkIjbdocLT6j/7M\"",
    "mtime": "2025-12-18T20:18:11.027Z",
    "size": 10448,
    "path": "../public/_fonts/qSDgeczq3g3RV7_G1oBfTizK830GNNim2LdBeVeumuw-Bfpuq_Tgx1qRBYYpVvhR24VkF6U8Ni9Df9CKYMAKF1M.woff2"
  },
  "/_fonts/rGdGJFBVWz5IXgopRK4huE9IawP8hV7mdspskpjQmqo-OqxXNlLnGGvgt1R7N4ScdgjwDaih8SPEFn81R7XbO38.woff": {
    "type": "font/woff",
    "etag": "\"191c-QU1d2NeGfrZt1aRBJ9Fi6kdFigU\"",
    "mtime": "2025-12-18T20:18:11.027Z",
    "size": 6428,
    "path": "../public/_fonts/rGdGJFBVWz5IXgopRK4huE9IawP8hV7mdspskpjQmqo-OqxXNlLnGGvgt1R7N4ScdgjwDaih8SPEFn81R7XbO38.woff"
  },
  "/_fonts/rGdGJFBVWz5IXgopRK4huE9IawP8hV7mdspskpjQmqo-_q7yzBfoHeHqvAa1tnZ_UTB5i8JbjmFlAzvV1t8tWIQ.woff2": {
    "type": "font/woff2",
    "etag": "\"1308-zbZI0FtzBHXLVNzJREezmIw+f1Y\"",
    "mtime": "2025-12-18T20:18:11.032Z",
    "size": 4872,
    "path": "../public/_fonts/rGdGJFBVWz5IXgopRK4huE9IawP8hV7mdspskpjQmqo-_q7yzBfoHeHqvAa1tnZ_UTB5i8JbjmFlAzvV1t8tWIQ.woff2"
  },
  "/_fonts/xKYNDem92T-JVpiWsbZHYe3Wb5jmqcuXq9Z7OCrbcLU-wCly_tTeE4JS1e0UNeG3FzdtxAcDFp_0Qo4CX0ZG7gs.woff2": {
    "type": "font/woff2",
    "etag": "\"2b28-VSoXwAcoVXLEzVHiTjP77KlKyp8\"",
    "mtime": "2025-12-18T20:18:11.032Z",
    "size": 11048,
    "path": "../public/_fonts/xKYNDem92T-JVpiWsbZHYe3Wb5jmqcuXq9Z7OCrbcLU-wCly_tTeE4JS1e0UNeG3FzdtxAcDFp_0Qo4CX0ZG7gs.woff2"
  },
  "/_fonts/xKYNDem92T-JVpiWsbZHYe3Wb5jmqcuXq9Z7OCrbcLU-yNpH3cMrQhslOqhvIwN73qx7yNc9OxOgenxGEtp22_A.woff": {
    "type": "font/woff",
    "etag": "\"3994-SemXGG0Lmd/PdP/yB4P07FRfYp8\"",
    "mtime": "2025-12-18T20:18:11.032Z",
    "size": 14740,
    "path": "../public/_fonts/xKYNDem92T-JVpiWsbZHYe3Wb5jmqcuXq9Z7OCrbcLU-yNpH3cMrQhslOqhvIwN73qx7yNc9OxOgenxGEtp22_A.woff"
  },
  "/_fonts/xtUFickObW_1eEmYngWiiuQ4WA7T7gI4A4xt9C4v14Q-AjaoThZxeB4DqEHd9zD_3DiqPMLrVOqypuzFpEtmDVE.woff2": {
    "type": "font/woff2",
    "etag": "\"2aa8-/pqi4GSLn6pt/dlLtCeVhOcNpSA\"",
    "mtime": "2025-12-18T20:18:11.032Z",
    "size": 10920,
    "path": "../public/_fonts/xtUFickObW_1eEmYngWiiuQ4WA7T7gI4A4xt9C4v14Q-AjaoThZxeB4DqEHd9zD_3DiqPMLrVOqypuzFpEtmDVE.woff2"
  },
  "/_fonts/xtUFickObW_1eEmYngWiiuQ4WA7T7gI4A4xt9C4v14Q-Ho1xhHHlPCHCxEJquJuNHx3stXO3Aumgwcy5q_E3m_A.woff": {
    "type": "font/woff",
    "etag": "\"399c-trpX+fcrINJndWOcP2PidWXxo5A\"",
    "mtime": "2025-12-18T20:18:11.033Z",
    "size": 14748,
    "path": "../public/_fonts/xtUFickObW_1eEmYngWiiuQ4WA7T7gI4A4xt9C4v14Q-Ho1xhHHlPCHCxEJquJuNHx3stXO3Aumgwcy5q_E3m_A.woff"
  },
  "/_fonts/xwBQvxZ157Cs9Y0KQJ1Q0Ww-wXlCMMEmyVTK6foWSmM-76XwIzFDGZOhhHz2cUPLIGCLOyOlLzh5lZ6FzQ0gCSE.woff2": {
    "type": "font/woff2",
    "etag": "\"3928-iX2SzIIY0aEzlACSmABPrY89Xr4\"",
    "mtime": "2025-12-18T20:18:11.033Z",
    "size": 14632,
    "path": "../public/_fonts/xwBQvxZ157Cs9Y0KQJ1Q0Ww-wXlCMMEmyVTK6foWSmM-76XwIzFDGZOhhHz2cUPLIGCLOyOlLzh5lZ6FzQ0gCSE.woff2"
  },
  "/_fonts/xwBQvxZ157Cs9Y0KQJ1Q0Ww-wXlCMMEmyVTK6foWSmM-NS4wbpfjmteY756_q_EOq0hbiRzkeK9tbB56KElBkmc.woff": {
    "type": "font/woff",
    "etag": "\"4838-MluiDwXLuLPSixodTDamjpXbk70\"",
    "mtime": "2025-12-18T20:18:11.033Z",
    "size": 18488,
    "path": "../public/_fonts/xwBQvxZ157Cs9Y0KQJ1Q0Ww-wXlCMMEmyVTK6foWSmM-NS4wbpfjmteY756_q_EOq0hbiRzkeK9tbB56KElBkmc.woff"
  },
  "/_fonts/yWOuAnFE_1xH3Um3bZEcab4St5xlHxcl11j8SGm2lg8-8sHB9quOfs5B4SvLWht_VRc_cICcXxnDtoLLBWd1fNg.woff": {
    "type": "font/woff",
    "etag": "\"48dc-oYLc8absz/2rCA2Rst399W/zgNg\"",
    "mtime": "2025-12-18T20:18:11.033Z",
    "size": 18652,
    "path": "../public/_fonts/yWOuAnFE_1xH3Um3bZEcab4St5xlHxcl11j8SGm2lg8-8sHB9quOfs5B4SvLWht_VRc_cICcXxnDtoLLBWd1fNg.woff"
  },
  "/_fonts/yWOuAnFE_1xH3Um3bZEcab4St5xlHxcl11j8SGm2lg8-nObwAz_x6hTAcsGJae-6ksQCWc4PaPdYaRI5xC4dPhM.woff2": {
    "type": "font/woff2",
    "etag": "\"3908-fGpPrxU4b6fQzIptJMLfMtsNrPw\"",
    "mtime": "2025-12-18T20:18:11.033Z",
    "size": 14600,
    "path": "../public/_fonts/yWOuAnFE_1xH3Um3bZEcab4St5xlHxcl11j8SGm2lg8-nObwAz_x6hTAcsGJae-6ksQCWc4PaPdYaRI5xC4dPhM.woff2"
  },
  "/about/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.177Z",
    "size": 69,
    "path": "../public/about/_payload.json"
  },
  "/about/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c01f-Ix7e/YMgUC4yy4bUWZVASSTbshY\"",
    "mtime": "2025-12-18T20:17:44.926Z",
    "size": 49183,
    "path": "../public/about/index.html"
  },
  "/about/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d1f-lsqepXAwuTMOciym2W2CjnvqLQE\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 11551,
    "path": "../public/about/index.html.br"
  },
  "/about/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"36f5-2dQqzAOjC2q3kfenJO5LrrKLMoc\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 14069,
    "path": "../public/about/index.html.gz"
  },
  "/_nuxt/0XLNZkUU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"195-9xOax3L/gcHDJa91P1PrAewIROQ\"",
    "mtime": "2025-12-18T20:18:11.443Z",
    "size": 405,
    "path": "../public/_nuxt/0XLNZkUU.js"
  },
  "/_nuxt/5PKC4vm3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"29b4-+IxtxKoBnG72jSbLHco3QwRFym8\"",
    "mtime": "2025-12-18T20:18:11.443Z",
    "size": 10676,
    "path": "../public/_nuxt/5PKC4vm3.js"
  },
  "/_nuxt/5PKC4vm3.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"f1c-D0mgCfvodNQp3YZZzNvo+8HVhCg\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 3868,
    "path": "../public/_nuxt/5PKC4vm3.js.br"
  },
  "/_nuxt/5PKC4vm3.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"10b6-ui4LGMZe2LqpQ6ZeYAu/17Qop68\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 4278,
    "path": "../public/_nuxt/5PKC4vm3.js.gz"
  },
  "/_nuxt/6vYkD0ej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"269-eMmmuzL0UsE1iqyLrqgNq0vfW9s\"",
    "mtime": "2025-12-18T20:18:11.443Z",
    "size": 617,
    "path": "../public/_nuxt/6vYkD0ej.js"
  },
  "/_nuxt/B2-KHubh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1443-TbWr/zZC90zzAdXI5EtiqbiWcBI\"",
    "mtime": "2025-12-18T20:18:11.443Z",
    "size": 5187,
    "path": "../public/_nuxt/B2-KHubh.js"
  },
  "/_nuxt/B2-KHubh.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"517-ZOGM0qNE51HJmiM94H7y+229T90\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1303,
    "path": "../public/_nuxt/B2-KHubh.js.br"
  },
  "/_nuxt/B2-KHubh.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5eb-L477yCAk+NtysvC5LyZFhtOs98c\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1515,
    "path": "../public/_nuxt/B2-KHubh.js.gz"
  },
  "/_nuxt/B4GjPSWe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"668-pTy7EHNwaLtVKxHxAlY74m8iLMo\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 1640,
    "path": "../public/_nuxt/B4GjPSWe.js"
  },
  "/_nuxt/B4GjPSWe.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d8-yFoo06yCAt8wcNjZkn/cuchlh/o\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 728,
    "path": "../public/_nuxt/B4GjPSWe.js.br"
  },
  "/_nuxt/B4GjPSWe.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"338-BSM90chNOWKiXnWVtABo+oRSfsc\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 824,
    "path": "../public/_nuxt/B4GjPSWe.js.gz"
  },
  "/_nuxt/B80qwHk4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9f5-jFzWMWwV3xkeBm7xJ0IIqdTtHr8\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 2549,
    "path": "../public/_nuxt/B80qwHk4.js"
  },
  "/_nuxt/B80qwHk4.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3f1-qQrDD1arLhMs/M3BYnCD3k942e4\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1009,
    "path": "../public/_nuxt/B80qwHk4.js.br"
  },
  "/_nuxt/B80qwHk4.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"463-Pkkciqb7eyQTxIvCUo3/j6oQt60\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1123,
    "path": "../public/_nuxt/B80qwHk4.js.gz"
  },
  "/_nuxt/BD_VFtN_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"129a-ClTAcZWmObQZ5VHibQJjvP0FrPU\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 4762,
    "path": "../public/_nuxt/BD_VFtN_.js"
  },
  "/_nuxt/BD_VFtN_.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"686-cSlaENUz7FNT7qmapYBjUFNLlqs\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1670,
    "path": "../public/_nuxt/BD_VFtN_.js.br"
  },
  "/_nuxt/BD_VFtN_.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"73d-mXG2miaI2f1F/O9aqS/UBsgm8DQ\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1853,
    "path": "../public/_nuxt/BD_VFtN_.js.gz"
  },
  "/_nuxt/BEhSX8Yh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1366-vIxY9t48kYgdyWo6A3zMDig5xqQ\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 4966,
    "path": "../public/_nuxt/BEhSX8Yh.js"
  },
  "/_nuxt/BEhSX8Yh.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"636-HRiOAdUJJT8AZ9q/gX4SOpAuS5E\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1590,
    "path": "../public/_nuxt/BEhSX8Yh.js.br"
  },
  "/_nuxt/BEhSX8Yh.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6f6-+BGeqBbGjnNz6VPmNICADAnEFik\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1782,
    "path": "../public/_nuxt/BEhSX8Yh.js.gz"
  },
  "/_nuxt/BJTXryzq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"153-euJ1EVHPg6jYHpAc2gzc+HjGZnA\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 339,
    "path": "../public/_nuxt/BJTXryzq.js"
  },
  "/_nuxt/BPWo_0j_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ac4-KCMX3tZonHhI9t97UAu70vdIANA\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 2756,
    "path": "../public/_nuxt/BPWo_0j_.js"
  },
  "/_nuxt/BPWo_0j_.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"41f-5L8/ZLMunmDP6YE18pj7lBRWXy0\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1055,
    "path": "../public/_nuxt/BPWo_0j_.js.br"
  },
  "/_nuxt/BPWo_0j_.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"599-L3Kbx+j7BxOJbIs6I2ZIav2MGj4\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1433,
    "path": "../public/_nuxt/BPWo_0j_.js.gz"
  },
  "/_nuxt/BQpHVH5K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3078-ewA70UYfDso5a5dE3K4vi+66m8s\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 12408,
    "path": "../public/_nuxt/BQpHVH5K.js"
  },
  "/_nuxt/BQpHVH5K.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1048-Fzf9ky7hF5KoPE+4qmlAo5bx4M4\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 4168,
    "path": "../public/_nuxt/BQpHVH5K.js.br"
  },
  "/_nuxt/BQpHVH5K.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"11dc-meTPQpgRLqau6s3LJvDufO3zY90\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 4572,
    "path": "../public/_nuxt/BQpHVH5K.js.gz"
  },
  "/_nuxt/BTkwiD_8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1db-hMdiKP9r4QgbVNW2Cr75FBzB3CU\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 475,
    "path": "../public/_nuxt/BTkwiD_8.js"
  },
  "/_nuxt/BVkgZOx9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cdf-79IG3cSl7E72zEI5yKAVF8S+r0c\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 3295,
    "path": "../public/_nuxt/BVkgZOx9.js"
  },
  "/_nuxt/BVkgZOx9.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"33b-jmZxVtkdGZ5Xx4ZMbblku/BcBf0\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 827,
    "path": "../public/_nuxt/BVkgZOx9.js.br"
  },
  "/_nuxt/BVkgZOx9.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"37b-/p8HlAfhhDeKioK28VFz6SWlj5M\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 891,
    "path": "../public/_nuxt/BVkgZOx9.js.gz"
  },
  "/_nuxt/BWfgNipj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f1-Yw/yKbe5uukxR5uDQF62CRuArL0\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 497,
    "path": "../public/_nuxt/BWfgNipj.js"
  },
  "/_nuxt/BX6roT4b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"229-3fUokfTq89CiE8PJmyw6RWLrcHk\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 553,
    "path": "../public/_nuxt/BX6roT4b.js"
  },
  "/_nuxt/B_fIk9aq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15c-NgEGKFkhCGYAhD+dnkcFT7Ip9t4\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 348,
    "path": "../public/_nuxt/B_fIk9aq.js"
  },
  "/_nuxt/Bb01wvDx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"212-zNDy442BHKWkwUf2VcoUHwWGqNg\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 530,
    "path": "../public/_nuxt/Bb01wvDx.js"
  },
  "/_nuxt/Bcrl-if_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ac409-oUSzXzZM6qSaag8WqRas3JjpYjQ\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 705545,
    "path": "../public/_nuxt/Bcrl-if_.js"
  },
  "/_nuxt/Bcrl-if_.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d9ec-FV7FdYQNhWzMUvh/YYV3LH9H+y8\"",
    "mtime": "2025-12-18T20:18:15.901Z",
    "size": 186860,
    "path": "../public/_nuxt/Bcrl-if_.js.br"
  },
  "/_nuxt/Bcrl-if_.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"36ad0-vCk7TkakOMt+yyWD9LjehqSyLns\"",
    "mtime": "2025-12-18T20:18:14.488Z",
    "size": 223952,
    "path": "../public/_nuxt/Bcrl-if_.js.gz"
  },
  "/_nuxt/Be5Eq_P8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"173-PVaBGn292o4NHD84igtm+5PakdM\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 371,
    "path": "../public/_nuxt/Be5Eq_P8.js"
  },
  "/_nuxt/Bi0Wb6iN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"185c-xcB2ySXFZ3RPNCPRU9Jz0IiRUm4\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 6236,
    "path": "../public/_nuxt/Bi0Wb6iN.js"
  },
  "/_nuxt/Bi0Wb6iN.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6a7-RLcAZEt3QXWbote1ONDHL1874GQ\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1703,
    "path": "../public/_nuxt/Bi0Wb6iN.js.br"
  },
  "/_nuxt/Bi0Wb6iN.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7ac-QvAh8w1/A9/GO4lpsGayNS98yKM\"",
    "mtime": "2025-12-18T20:18:13.723Z",
    "size": 1964,
    "path": "../public/_nuxt/Bi0Wb6iN.js.gz"
  },
  "/_nuxt/BlmvSWOB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f1-quevvRMrNR9NA+naDFKIxDH8MG8\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 497,
    "path": "../public/_nuxt/BlmvSWOB.js"
  },
  "/_nuxt/BmquTfVJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f8-ycVMevlMoMV4b241e10EyL4cp8M\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 504,
    "path": "../public/_nuxt/BmquTfVJ.js"
  },
  "/_nuxt/Bn79WJRC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"260-R1Z+mnnf6zUvNg46iy2VC1LM1OQ\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 608,
    "path": "../public/_nuxt/Bn79WJRC.js"
  },
  "/_nuxt/BusNyAKh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"900c-jalGag+FlFUabuMDtkAppVOuSCs\"",
    "mtime": "2025-12-18T20:18:11.444Z",
    "size": 36876,
    "path": "../public/_nuxt/BusNyAKh.js"
  },
  "/_nuxt/BusNyAKh.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"221e-t5qRhG36bnFN9V8ORzMN2C6AOoM\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 8734,
    "path": "../public/_nuxt/BusNyAKh.js.br"
  },
  "/_nuxt/BusNyAKh.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"27f6-m10CSmzGmhPb/Bjti4diGE4oef4\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 10230,
    "path": "../public/_nuxt/BusNyAKh.js.gz"
  },
  "/_nuxt/Bw3hv5Xr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ed-XEbSozWUNX+dw8vePjBlFS1+36Y\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 493,
    "path": "../public/_nuxt/Bw3hv5Xr.js"
  },
  "/_nuxt/C1XoNdN_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5c3-Mw1Xg9yuuxUItQ8yY/wFJvAg8wU\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 1475,
    "path": "../public/_nuxt/C1XoNdN_.js"
  },
  "/_nuxt/C1XoNdN_.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2b9-vzv38yIi0lzsJn0yHHJaHH418ik\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 697,
    "path": "../public/_nuxt/C1XoNdN_.js.br"
  },
  "/_nuxt/C1XoNdN_.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"316-z4L0O9i4dwRrkFs0iQIMWt0+4aI\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 790,
    "path": "../public/_nuxt/C1XoNdN_.js.gz"
  },
  "/_nuxt/C5-RjwCQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25c9-XxVZmFMz73rlqutAQSjMHJ/W0Nc\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 9673,
    "path": "../public/_nuxt/C5-RjwCQ.js"
  },
  "/_nuxt/C5-RjwCQ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b57-n9pTouakIKn2aRdPp3ZTfyu+hlg\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 2903,
    "path": "../public/_nuxt/C5-RjwCQ.js.br"
  },
  "/_nuxt/C5-RjwCQ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d55-JXcBlLHNg46YzKcqbT74mU7P6rM\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 3413,
    "path": "../public/_nuxt/C5-RjwCQ.js.gz"
  },
  "/_nuxt/C7x-RUC1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"393-hxFN0oL2E6c9c8VsbLgtPzaMb+Y\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 915,
    "path": "../public/_nuxt/C7x-RUC1.js"
  },
  "/_nuxt/C9GAI8kJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32a-H7NlmiMoP1R5XsJECgK3TT+Cghs\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 810,
    "path": "../public/_nuxt/C9GAI8kJ.js"
  },
  "/_nuxt/CKJykz2p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16c-MeezMhki9HAvTwgIve+4RhEQIaM\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 364,
    "path": "../public/_nuxt/CKJykz2p.js"
  },
  "/_nuxt/CLlc1jX0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15e-cwCl+Qz3sfReVfCNmRjca810GG0\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 350,
    "path": "../public/_nuxt/CLlc1jX0.js"
  },
  "/_nuxt/CRQerMVf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"78c-JqCDh8vbhxJc+02pE0rwu+WJF6I\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 1932,
    "path": "../public/_nuxt/CRQerMVf.js"
  },
  "/_nuxt/CRQerMVf.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"352-w9JOlvnfFzv+/b4UI+HRbe/HQus\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 850,
    "path": "../public/_nuxt/CRQerMVf.js.br"
  },
  "/_nuxt/CRQerMVf.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3b8-BP3uN55FPbI0oYJs/1kfMwgkniI\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 952,
    "path": "../public/_nuxt/CRQerMVf.js.gz"
  },
  "/_nuxt/CUvCUat3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14d-sIQWdsySHz8plJtMOJVCWoRD5YY\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 333,
    "path": "../public/_nuxt/CUvCUat3.js"
  },
  "/_nuxt/CV4GMCzf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"149-WpwENhWp1BKchnpDd9KULJkEJm8\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 329,
    "path": "../public/_nuxt/CV4GMCzf.js"
  },
  "/_nuxt/CW5OKw2-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"341-ZKEpYiZypqjmYtpNik7OqYv/6i0\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 833,
    "path": "../public/_nuxt/CW5OKw2-.js"
  },
  "/_nuxt/Cdya4NIL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b4-xTh/1ERlIm/dol4kpXhAXQEOENI\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 436,
    "path": "../public/_nuxt/Cdya4NIL.js"
  },
  "/_nuxt/CnQSQwJM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"df7-aDfvCV3kxUaa7+BQZweoSL4WVMk\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 3575,
    "path": "../public/_nuxt/CnQSQwJM.js"
  },
  "/_nuxt/CnQSQwJM.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"524-IvjRybr+9Zi2s4Y/kWOkfW2kh40\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1316,
    "path": "../public/_nuxt/CnQSQwJM.js.br"
  },
  "/_nuxt/CnQSQwJM.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5b9-J76Rlv7c2vW4wcnkRZ+O//5kRAg\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1465,
    "path": "../public/_nuxt/CnQSQwJM.js.gz"
  },
  "/_nuxt/CntNjfTl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d1c-an49271ti2Tbh5E/+eZY/XtScm8\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 7452,
    "path": "../public/_nuxt/CntNjfTl.js"
  },
  "/_nuxt/CntNjfTl.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"8a2-n04UbgnHEsA69fMtbvqhLhg7GOE\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 2210,
    "path": "../public/_nuxt/CntNjfTl.js.br"
  },
  "/_nuxt/CntNjfTl.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"a4a-mP9L/Q27CV2A7gVBxbpLfLAqudg\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 2634,
    "path": "../public/_nuxt/CntNjfTl.js.gz"
  },
  "/_nuxt/CptKv65w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5e-ugvxryQX58U2hBBDxHtruONizS0\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 2910,
    "path": "../public/_nuxt/CptKv65w.js"
  },
  "/_nuxt/CptKv65w.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4ce-HTT2WsHafCLC0ST2wtozj1c+1VA\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1230,
    "path": "../public/_nuxt/CptKv65w.js.br"
  },
  "/_nuxt/CptKv65w.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"55b-fzaUIU8K+8DFrzQ+khS6QPZsXsw\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1371,
    "path": "../public/_nuxt/CptKv65w.js.gz"
  },
  "/_nuxt/CtIXoMIb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"166-+NSLtFQNraGWh8KuNQt4/c6tMsE\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 358,
    "path": "../public/_nuxt/CtIXoMIb.js"
  },
  "/_nuxt/CtvbGxnT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"af4-OBQ0YW+zlS/MukegCEUfc00sNDo\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 2804,
    "path": "../public/_nuxt/CtvbGxnT.js"
  },
  "/_nuxt/CtvbGxnT.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4aa-Lm68I3XyjWCZC+GBU0Pt7qgQZ1s\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1194,
    "path": "../public/_nuxt/CtvbGxnT.js.br"
  },
  "/_nuxt/CtvbGxnT.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"53f-SSkqk6Yq0Fbciz/jwkCm3G9+W+A\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1343,
    "path": "../public/_nuxt/CtvbGxnT.js.gz"
  },
  "/_nuxt/CvyyNQ0f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"186-sP6zVF04Xdmq8HX64nIvmiQb6eg\"",
    "mtime": "2025-12-18T20:18:11.445Z",
    "size": 390,
    "path": "../public/_nuxt/CvyyNQ0f.js"
  },
  "/_nuxt/D1aOyi8a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"204-F6UmTJxBb7AflRYJDQ+drG1qKLw\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 516,
    "path": "../public/_nuxt/D1aOyi8a.js"
  },
  "/_nuxt/D6k07krR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"199-OKrRRWp2U142LAoUHBNKCk+pWCc\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 409,
    "path": "../public/_nuxt/D6k07krR.js"
  },
  "/_nuxt/D9T_TRf_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b7d-G4g5KNA29YpMBrCYs4bjL5fQsdw\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 7037,
    "path": "../public/_nuxt/D9T_TRf_.js"
  },
  "/_nuxt/D9T_TRf_.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"7f6-4u9tRyYi+cugavWAUf2X7vZBXE4\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 2038,
    "path": "../public/_nuxt/D9T_TRf_.js.br"
  },
  "/_nuxt/D9T_TRf_.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"8db-GytM8qUarteOFfZCWZ7VXHtzOWU\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 2267,
    "path": "../public/_nuxt/D9T_TRf_.js.gz"
  },
  "/_nuxt/DDPA8A9q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fc3-iyXGJIADJ3tyCxGmJgVqTw683zI\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 8131,
    "path": "../public/_nuxt/DDPA8A9q.js"
  },
  "/_nuxt/DDPA8A9q.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"aae-wUiU+swfu0iOQnCytXG79SUK9+U\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 2734,
    "path": "../public/_nuxt/DDPA8A9q.js.br"
  },
  "/_nuxt/DDPA8A9q.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d94-CEm0a1r7eeLAOuSWn/UgkLUIbyw\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 3476,
    "path": "../public/_nuxt/DDPA8A9q.js.gz"
  },
  "/_nuxt/DLqFsRi2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c7-pvQJ3I08isXciNwXykBRUFpQYcY\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 1223,
    "path": "../public/_nuxt/DLqFsRi2.js"
  },
  "/_nuxt/DLqFsRi2.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"227-n6mXbXgXG+3Asck2uWqtBFOJnhc\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 551,
    "path": "../public/_nuxt/DLqFsRi2.js.br"
  },
  "/_nuxt/DLqFsRi2.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"251-Una+LruaSv3KYFwgEoxoty8fcrs\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 593,
    "path": "../public/_nuxt/DLqFsRi2.js.gz"
  },
  "/_nuxt/DNH8A6g0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22e-7mrY2H3Fr1nkT5V8V/PBHvkTHRI\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 558,
    "path": "../public/_nuxt/DNH8A6g0.js"
  },
  "/_nuxt/DTFwWJnC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cc6-M5GN8hYFb8G7B3wq3TWpH+l/ik8\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 3270,
    "path": "../public/_nuxt/DTFwWJnC.js"
  },
  "/_nuxt/DTFwWJnC.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"472-l9lf3zPgQVsbWZEqazS01JrYnQc\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1138,
    "path": "../public/_nuxt/DTFwWJnC.js.br"
  },
  "/_nuxt/DTFwWJnC.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"516-+zHb+/PmO5ggxTP6NZPwKyTMNBw\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 1302,
    "path": "../public/_nuxt/DTFwWJnC.js.gz"
  },
  "/_nuxt/DTS6Q5dF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e24-Kmz6LW8DWAcJ4jzF+VMG64bm7WA\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 7716,
    "path": "../public/_nuxt/DTS6Q5dF.js"
  },
  "/_nuxt/DTS6Q5dF.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b10-4aEeneSCVXxEvDP8HFQBQcaPRgs\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 2832,
    "path": "../public/_nuxt/DTS6Q5dF.js.br"
  },
  "/_nuxt/DTS6Q5dF.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c36-QyC3PrWYUk2tmZyJ6S7R1KsUXqY\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 3126,
    "path": "../public/_nuxt/DTS6Q5dF.js.gz"
  },
  "/_nuxt/DUmXduEb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"238-oAtZpp/0NyKuSk4RAbGwP8k/kLY\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 568,
    "path": "../public/_nuxt/DUmXduEb.js"
  },
  "/_nuxt/DV2B0H7i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cda7-GLugT5I8qWm0jRD6ilUzOhp0X8o\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 52647,
    "path": "../public/_nuxt/DV2B0H7i.js"
  },
  "/_nuxt/DV2B0H7i.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3e64-2FTQf5q2YL9cv2kfAVGyDICJ4uI\"",
    "mtime": "2025-12-18T20:18:13.730Z",
    "size": 15972,
    "path": "../public/_nuxt/DV2B0H7i.js.br"
  },
  "/_nuxt/DV2B0H7i.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"46f2-dJfz/JR5QNVEyLDkm9jMzYxaDUw\"",
    "mtime": "2025-12-18T20:18:14.102Z",
    "size": 18162,
    "path": "../public/_nuxt/DV2B0H7i.js.gz"
  },
  "/_nuxt/DWgaTjGQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"178-wJ08Kpv1mAVM67cHQnWKOoKToTE\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 376,
    "path": "../public/_nuxt/DWgaTjGQ.js"
  },
  "/_nuxt/DYxpoFCy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"200a2-y92HkRrAda4h8Pt1TAF65kIF5Io\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 131234,
    "path": "../public/_nuxt/DYxpoFCy.js"
  },
  "/_nuxt/DYxpoFCy.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"956c-CDvx/s+1ErwPrsQ8APxYvCV6mqo\"",
    "mtime": "2025-12-18T20:18:14.149Z",
    "size": 38252,
    "path": "../public/_nuxt/DYxpoFCy.js.br"
  },
  "/_nuxt/DYxpoFCy.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"a770-MzOsh/EkzEY+6jRGWMKrwVTvRPs\"",
    "mtime": "2025-12-18T20:18:14.158Z",
    "size": 42864,
    "path": "../public/_nuxt/DYxpoFCy.js.gz"
  },
  "/_nuxt/DZrTwdqc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5c3-WJohngI7rgiy/MkkVHAcAUxANcM\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 1475,
    "path": "../public/_nuxt/DZrTwdqc.js"
  },
  "/_nuxt/DZrTwdqc.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2be-riy+9Ar5TLbFdGvmDINR8yCqJR4\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 702,
    "path": "../public/_nuxt/DZrTwdqc.js.br"
  },
  "/_nuxt/DZrTwdqc.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"318-2KWHSrQV/v/uhROEwiNFAAfACDs\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 792,
    "path": "../public/_nuxt/DZrTwdqc.js.gz"
  },
  "/_nuxt/D_Tg0cuW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"156-kkgGULlzACZIhRHBM6maNZ/mLLk\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 342,
    "path": "../public/_nuxt/D_Tg0cuW.js"
  },
  "/_nuxt/Db6G5euP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30c55-DGKc6Nh3Jzy+EIozPzVH9MovINg\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 199765,
    "path": "../public/_nuxt/Db6G5euP.js"
  },
  "/_nuxt/Db6G5euP.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c925-Io6J9axjp7SPQQV6c2nVX0N3C1A\"",
    "mtime": "2025-12-18T20:18:14.244Z",
    "size": 51493,
    "path": "../public/_nuxt/Db6G5euP.js.br"
  },
  "/_nuxt/Db6G5euP.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e63f-m0XNQv03xxAqb6xfu+EM+f6LStE\"",
    "mtime": "2025-12-18T20:18:14.216Z",
    "size": 58943,
    "path": "../public/_nuxt/Db6G5euP.js.gz"
  },
  "/_nuxt/Dbp3gq0D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"190-Dz27OqPe8OFQ2wKKoCOoNsYD9+I\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 400,
    "path": "../public/_nuxt/Dbp3gq0D.js"
  },
  "/_nuxt/DbyStO6W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1de1-56gSUASXhGeq9UQFLcOCPaiz/k8\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 7649,
    "path": "../public/_nuxt/DbyStO6W.js"
  },
  "/_nuxt/DbyStO6W.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"b3a-yfD2UHmAxYxROc8Gv1sBmEHIdQY\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 2874,
    "path": "../public/_nuxt/DbyStO6W.js.br"
  },
  "/_nuxt/DbyStO6W.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"dc4-ldvUwpaKCp3s+7Js6Df5670XIrU\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 3524,
    "path": "../public/_nuxt/DbyStO6W.js.gz"
  },
  "/_nuxt/Ddyvc1_j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27e-aqzSgGJEtNFfsMqWSz8/NYcn5T8\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 638,
    "path": "../public/_nuxt/Ddyvc1_j.js"
  },
  "/_nuxt/Dhh4vm-7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dd-8MogHNQdDPFmf0rVfx5R3tCelW0\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 477,
    "path": "../public/_nuxt/Dhh4vm-7.js"
  },
  "/_nuxt/DkR4udcX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a69-y+X/lwuVoHupNSgt5fbPooUjuR4\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 2665,
    "path": "../public/_nuxt/DkR4udcX.js"
  },
  "/_nuxt/DkR4udcX.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"402-ZqgN7QEnu6GziVB3rGEwdZg73DE\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 1026,
    "path": "../public/_nuxt/DkR4udcX.js.br"
  },
  "/_nuxt/DkR4udcX.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"539-O3IezNj2ZDYIQ5VKNheew9mSj+U\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 1337,
    "path": "../public/_nuxt/DkR4udcX.js.gz"
  },
  "/_nuxt/DpfUGWjF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"154-/1QLrcU48OajKdDhZQSu4mNuLkc\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 340,
    "path": "../public/_nuxt/DpfUGWjF.js"
  },
  "/_nuxt/Dr5Neupp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22d-FX6cpO33eSmYGeGZTYdu+ELwtRU\"",
    "mtime": "2025-12-18T20:18:11.446Z",
    "size": 557,
    "path": "../public/_nuxt/Dr5Neupp.js"
  },
  "/_nuxt/DrCZFg2j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b5-Pitxv2QhxreOWtw9RWGoAPBsiu4\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 437,
    "path": "../public/_nuxt/DrCZFg2j.js"
  },
  "/_nuxt/Dtrtw0zj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ec-t/8yON9u9zlH31H2vzAFCzU+lvo\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 2284,
    "path": "../public/_nuxt/Dtrtw0zj.js"
  },
  "/_nuxt/Dtrtw0zj.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"387-AScbTNuNpMswOBV6e5UZF0lDcYg\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 903,
    "path": "../public/_nuxt/Dtrtw0zj.js.br"
  },
  "/_nuxt/Dtrtw0zj.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3f5-DE70sqAHvshCu9vZBiDM9nGQgFw\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 1013,
    "path": "../public/_nuxt/Dtrtw0zj.js.gz"
  },
  "/_nuxt/LVG_eY9u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"948-QG26pf/JC91P4klg7Q49eOHG5Bc\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 2376,
    "path": "../public/_nuxt/LVG_eY9u.js"
  },
  "/_nuxt/LVG_eY9u.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3f5-66YP/yRhRrOr4FQ7a6zfJeVzOuI\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 1013,
    "path": "../public/_nuxt/LVG_eY9u.js.br"
  },
  "/_nuxt/LVG_eY9u.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"463-0LYENaN3omLMNJQHj5z5KkTCMBQ\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 1123,
    "path": "../public/_nuxt/LVG_eY9u.js.gz"
  },
  "/_nuxt/Pre.DmpPSE9a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"112-0F1qp4TMJ/Z1WczZql3VIqywhuE\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 274,
    "path": "../public/_nuxt/Pre.DmpPSE9a.css"
  },
  "/_nuxt/Q-Z54XYt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"37f-qrTb4cq88G2/WYo1hlZ0z/YHKJY\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 895,
    "path": "../public/_nuxt/Q-Z54XYt.js"
  },
  "/_nuxt/STFoaAla.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"341-N2iTo1lkzIMWPasZh5B9GiN2fvI\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 833,
    "path": "../public/_nuxt/STFoaAla.js"
  },
  "/_nuxt/VQkV9OjM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bc-2k3KsUr455ZkAeSkRMibqM5RGxM\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 700,
    "path": "../public/_nuxt/VQkV9OjM.js"
  },
  "/_nuxt/VnXBSyfG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e7-CZkn7Q1K82GazypngiEnlQthHS0\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 487,
    "path": "../public/_nuxt/VnXBSyfG.js"
  },
  "/_nuxt/XBkkc1T4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"157-FYvS6GY0FWbrx2bAh1rln5iW6Cc\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 343,
    "path": "../public/_nuxt/XBkkc1T4.js"
  },
  "/_nuxt/_slug_.CvGaBJ8U.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"158-W/yEKfCERLCH9EvaT/3aMto7Ypo\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 344,
    "path": "../public/_nuxt/_slug_.CvGaBJ8U.css"
  },
  "/_nuxt/_vxOqwqs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1de-7l71bkKxuhjzlP88lElxXf1bWYU\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 478,
    "path": "../public/_nuxt/_vxOqwqs.js"
  },
  "/_nuxt/aXV0z2Vp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2901-fS0ElCRir0LSEWeof4uJiFwl5Qo\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 10497,
    "path": "../public/_nuxt/aXV0z2Vp.js"
  },
  "/_nuxt/aXV0z2Vp.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c9b-7FOa2hsztG0oH6PUFIxtUseLAlA\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 3227,
    "path": "../public/_nuxt/aXV0z2Vp.js.br"
  },
  "/_nuxt/aXV0z2Vp.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"f7b-tcrZv038KTV0Yf8fKKUV1Bg2gC8\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 3963,
    "path": "../public/_nuxt/aXV0z2Vp.js.gz"
  },
  "/_nuxt/cPRBNM-t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"116ee-TCWLPexgB/xUWAeb6VH5wmEhcLM\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 71406,
    "path": "../public/_nuxt/cPRBNM-t.js"
  },
  "/_nuxt/cPRBNM-t.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5103-zlLHfbwm3KWMlNJ+vM7+qXxm3tw\"",
    "mtime": "2025-12-18T20:18:14.106Z",
    "size": 20739,
    "path": "../public/_nuxt/cPRBNM-t.js.br"
  },
  "/_nuxt/cPRBNM-t.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5c53-rfZYhPs9SgcMefc1N2YR51sn6qk\"",
    "mtime": "2025-12-18T20:18:14.106Z",
    "size": 23635,
    "path": "../public/_nuxt/cPRBNM-t.js.gz"
  },
  "/_nuxt/contact.DDvx0KhP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"188-i+2HHI1c5hy0aA1efNBdPDfb2UU\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 392,
    "path": "../public/_nuxt/contact.DDvx0KhP.css"
  },
  "/_nuxt/dmUyu2q4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"46a3-QwQgcFeHMVUIzEj97tXKnfuOhnk\"",
    "mtime": "2025-12-18T20:18:11.447Z",
    "size": 18083,
    "path": "../public/_nuxt/dmUyu2q4.js"
  },
  "/_nuxt/dmUyu2q4.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"12ae-Rrpb7ktlJqaxIKXt89w96cKp3Qg\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 4782,
    "path": "../public/_nuxt/dmUyu2q4.js.br"
  },
  "/_nuxt/dmUyu2q4.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"155a-us5D6mfLJqyC1zErN6GGsx8jZD4\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 5466,
    "path": "../public/_nuxt/dmUyu2q4.js.gz"
  },
  "/_nuxt/ecLH3xz1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"365-Igpzg4XMi9TggVR2Er6MqB33910\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 869,
    "path": "../public/_nuxt/ecLH3xz1.js"
  },
  "/_nuxt/entry.CnYYOErt.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"416bd-KfmXewqYVjoJ4g81SyFIkcdptHg\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 267965,
    "path": "../public/_nuxt/entry.CnYYOErt.css"
  },
  "/_nuxt/entry.CnYYOErt.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"724e-oe2y1Z4PIR0DakoSX4Wyxy8PgDU\"",
    "mtime": "2025-12-18T20:18:14.158Z",
    "size": 29262,
    "path": "../public/_nuxt/entry.CnYYOErt.css.br"
  },
  "/_nuxt/entry.CnYYOErt.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"9276-DsRYTmSyaoM/LIzxg0DxtfTJ6/0\"",
    "mtime": "2025-12-18T20:18:14.199Z",
    "size": 37494,
    "path": "../public/_nuxt/entry.CnYYOErt.css.gz"
  },
  "/_nuxt/g4rUF-EL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"672-gsJ+Mi4u1PRCciYIRCE944kEoDI\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 1650,
    "path": "../public/_nuxt/g4rUF-EL.js"
  },
  "/_nuxt/g4rUF-EL.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2a1-zS4TeZSBCl3b1quc9IJSNIO9cUY\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 673,
    "path": "../public/_nuxt/g4rUF-EL.js.br"
  },
  "/_nuxt/g4rUF-EL.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2dc-0VY2wtkXB7TZFPRVdHYoc8Rl6gQ\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 732,
    "path": "../public/_nuxt/g4rUF-EL.js.gz"
  },
  "/_nuxt/gHBWm_bT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"51e3-vtKHpvYnMyxHDc/Neu9E//YlA6Y\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 20963,
    "path": "../public/_nuxt/gHBWm_bT.js"
  },
  "/_nuxt/gHBWm_bT.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"132c-70vK7tpBfxCog9CYoBM8YGQKANg\"",
    "mtime": "2025-12-18T20:18:13.732Z",
    "size": 4908,
    "path": "../public/_nuxt/gHBWm_bT.js.br"
  },
  "/_nuxt/gHBWm_bT.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"166e-0Kcj9v/CJXLWjlYx7SyoeNXt/h4\"",
    "mtime": "2025-12-18T20:18:13.731Z",
    "size": 5742,
    "path": "../public/_nuxt/gHBWm_bT.js.gz"
  },
  "/_nuxt/gtFs4xag.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"123a-/htbHVJoUKgLYehb97yqDyDXcI0\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 4666,
    "path": "../public/_nuxt/gtFs4xag.js"
  },
  "/_nuxt/gtFs4xag.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"832-eJy+MDEWlaQoTLVu5EVFuwsolsE\"",
    "mtime": "2025-12-18T20:18:13.790Z",
    "size": 2098,
    "path": "../public/_nuxt/gtFs4xag.js.br"
  },
  "/_nuxt/gtFs4xag.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"9a4-b1dPxzPbrC6opPsc2GFgDmQmODc\"",
    "mtime": "2025-12-18T20:18:13.752Z",
    "size": 2468,
    "path": "../public/_nuxt/gtFs4xag.js.gz"
  },
  "/_nuxt/index.CvfSqyjU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d7-ysLeMNyer5PvIXRiere7nJDx8vM\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 727,
    "path": "../public/_nuxt/index.CvfSqyjU.css"
  },
  "/_nuxt/index.tn0RQdqM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 0,
    "path": "../public/_nuxt/index.tn0RQdqM.css"
  },
  "/_nuxt/mhJ-osCf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"63d-k+e6wp4VdGsQZ6xL3ecMKNGnomo\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 1597,
    "path": "../public/_nuxt/mhJ-osCf.js"
  },
  "/_nuxt/mhJ-osCf.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2bd-19X1RH2qYb4xV+/q5rwlWKFTAQo\"",
    "mtime": "2025-12-18T20:18:13.849Z",
    "size": 701,
    "path": "../public/_nuxt/mhJ-osCf.js.br"
  },
  "/_nuxt/mhJ-osCf.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"300-zOeKCa7f/FV3fLJ0EUTFSp29DwM\"",
    "mtime": "2025-12-18T20:18:13.816Z",
    "size": 768,
    "path": "../public/_nuxt/mhJ-osCf.js.gz"
  },
  "/_nuxt/otp.DWvo8k5K.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4c5-mlri8bpErTDVktMMTQcRIup/fJI\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 1221,
    "path": "../public/_nuxt/otp.DWvo8k5K.css"
  },
  "/_nuxt/otp.DWvo8k5K.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"154-D5PCZzratojxibmd7plhKiS805w\"",
    "mtime": "2025-12-18T20:18:13.911Z",
    "size": 340,
    "path": "../public/_nuxt/otp.DWvo8k5K.css.br"
  },
  "/_nuxt/otp.DWvo8k5K.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"177-9CiydLC/bDjpGD69kT6udXnRyzY\"",
    "mtime": "2025-12-18T20:18:13.878Z",
    "size": 375,
    "path": "../public/_nuxt/otp.DWvo8k5K.css.gz"
  },
  "/_nuxt/pl8mmZlG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"238e-lw23ubRzNGKJM7ZxU0nsqvUmRCs\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 9102,
    "path": "../public/_nuxt/pl8mmZlG.js"
  },
  "/_nuxt/pl8mmZlG.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"976-0NMQug9O/qBm9eM3shRLf0cFtLk\"",
    "mtime": "2025-12-18T20:18:13.975Z",
    "size": 2422,
    "path": "../public/_nuxt/pl8mmZlG.js.br"
  },
  "/_nuxt/pl8mmZlG.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"aa0-1UESQURUNJ9TCyhJAq+hX7riDtc\"",
    "mtime": "2025-12-18T20:18:13.974Z",
    "size": 2720,
    "path": "../public/_nuxt/pl8mmZlG.js.gz"
  },
  "/_nuxt/rl817ooQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"76f-KrUl7mZZOBeDJigNuKuDoF1mfBU\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 1903,
    "path": "../public/_nuxt/rl817ooQ.js"
  },
  "/_nuxt/rl817ooQ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"211-hR2u+F2Hjy0+iQvc4eUHRl54SSE\"",
    "mtime": "2025-12-18T20:18:13.941Z",
    "size": 529,
    "path": "../public/_nuxt/rl817ooQ.js.br"
  },
  "/_nuxt/rl817ooQ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"274-evkOk5GqtSn3xoz3im8RUxhj3zY\"",
    "mtime": "2025-12-18T20:18:13.929Z",
    "size": 628,
    "path": "../public/_nuxt/rl817ooQ.js.gz"
  },
  "/_nuxt/sms.CohslaKl.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41b-xmlQNyGAY0rsFOpg1Tu2RLa/xRA\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 1051,
    "path": "../public/_nuxt/sms.CohslaKl.css"
  },
  "/_nuxt/sms.CohslaKl.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"124-JLYK5t7i0UtaqTajy6Fj7VAh2wc\"",
    "mtime": "2025-12-18T20:18:13.973Z",
    "size": 292,
    "path": "../public/_nuxt/sms.CohslaKl.css.br"
  },
  "/_nuxt/sms.CohslaKl.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"146-cbMbovTfEAtZH/iBgMxYjC2Z0dY\"",
    "mtime": "2025-12-18T20:18:13.959Z",
    "size": 326,
    "path": "../public/_nuxt/sms.CohslaKl.css.gz"
  },
  "/_nuxt/sqlite3-DBpDb1lf.wasm": {
    "type": "application/wasm",
    "etag": "\"d117f-DZ/FD4oW3SqSLEuDOEQ4+vXRNGQ\"",
    "mtime": "2025-12-18T20:18:11.449Z",
    "size": 856447,
    "path": "../public/_nuxt/sqlite3-DBpDb1lf.wasm"
  },
  "/_nuxt/sqlite3-DBpDb1lf.wasm.br": {
    "type": "application/wasm",
    "encoding": "br",
    "etag": "\"52e5f-2yiV6m+/SzwlKMRTOuOmskkAp4s\"",
    "mtime": "2025-12-18T20:18:18.951Z",
    "size": 339551,
    "path": "../public/_nuxt/sqlite3-DBpDb1lf.wasm.br"
  },
  "/_nuxt/sqlite3-DBpDb1lf.wasm.gz": {
    "type": "application/wasm",
    "encoding": "gzip",
    "etag": "\"5ffe1-T4GuuSwny+UAZCVtmI9eoSgimmI\"",
    "mtime": "2025-12-18T20:18:14.567Z",
    "size": 393185,
    "path": "../public/_nuxt/sqlite3-DBpDb1lf.wasm.gz"
  },
  "/_nuxt/sqlite3-opfs-async-proxy-C_otN2ZJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24eb-/FBLK7guMdffqRNvJNbJgk4Zwss\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 9451,
    "path": "../public/_nuxt/sqlite3-opfs-async-proxy-C_otN2ZJ.js"
  },
  "/_nuxt/sqlite3-opfs-async-proxy-C_otN2ZJ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"ce4-KboBmrBLWH5BdwBGrLpHdPiWW90\"",
    "mtime": "2025-12-18T20:18:13.977Z",
    "size": 3300,
    "path": "../public/_nuxt/sqlite3-opfs-async-proxy-C_otN2ZJ.js.br"
  },
  "/_nuxt/sqlite3-opfs-async-proxy-C_otN2ZJ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e3b-3rGcMoZWUiP7jFKqNIUNRMuB650\"",
    "mtime": "2025-12-18T20:18:13.976Z",
    "size": 3643,
    "path": "../public/_nuxt/sqlite3-opfs-async-proxy-C_otN2ZJ.js.gz"
  },
  "/_nuxt/sqlite3-worker1-bundler-friendly-Bv6ABw9v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30103-GOxHNTh2sTNh/exLYlR0tZpazpY\"",
    "mtime": "2025-12-18T20:18:11.449Z",
    "size": 196867,
    "path": "../public/_nuxt/sqlite3-worker1-bundler-friendly-Bv6ABw9v.js"
  },
  "/_nuxt/sqlite3-worker1-bundler-friendly-Bv6ABw9v.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c5fa-De1nZ13OBKLtRDjVVBpxT3xiOXs\"",
    "mtime": "2025-12-18T20:18:14.295Z",
    "size": 50682,
    "path": "../public/_nuxt/sqlite3-worker1-bundler-friendly-Bv6ABw9v.js.br"
  },
  "/_nuxt/sqlite3-worker1-bundler-friendly-Bv6ABw9v.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e27d-TugBgwMMLCldIqQf5UmfXxRmZaA\"",
    "mtime": "2025-12-18T20:18:14.281Z",
    "size": 57981,
    "path": "../public/_nuxt/sqlite3-worker1-bundler-friendly-Bv6ABw9v.js.gz"
  },
  "/_nuxt/sqlite3.DBpDb1lf.wasm": {
    "type": "application/wasm",
    "etag": "\"d117f-DZ/FD4oW3SqSLEuDOEQ4+vXRNGQ\"",
    "mtime": "2025-12-18T20:18:11.449Z",
    "size": 856447,
    "path": "../public/_nuxt/sqlite3.DBpDb1lf.wasm"
  },
  "/_nuxt/sqlite3.DBpDb1lf.wasm.br": {
    "type": "application/wasm",
    "encoding": "br",
    "etag": "\"52e5f-2yiV6m+/SzwlKMRTOuOmskkAp4s\"",
    "mtime": "2025-12-18T20:18:18.801Z",
    "size": 339551,
    "path": "../public/_nuxt/sqlite3.DBpDb1lf.wasm.br"
  },
  "/_nuxt/sqlite3.DBpDb1lf.wasm.gz": {
    "type": "application/wasm",
    "encoding": "gzip",
    "etag": "\"5ffe1-T4GuuSwny+UAZCVtmI9eoSgimmI\"",
    "mtime": "2025-12-18T20:18:14.568Z",
    "size": 393185,
    "path": "../public/_nuxt/sqlite3.DBpDb1lf.wasm.gz"
  },
  "/_nuxt/whatsapp.DufOa_Gz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b4-49z4C9GZ8pWR8w92HSRCTp2E7sM\"",
    "mtime": "2025-12-18T20:18:11.448Z",
    "size": 1972,
    "path": "../public/_nuxt/whatsapp.DufOa_Gz.css"
  },
  "/_nuxt/whatsapp.DufOa_Gz.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1f1-MbnTLwTMA6arc40hfN+l+HO/BvQ\"",
    "mtime": "2025-12-18T20:18:13.977Z",
    "size": 497,
    "path": "../public/_nuxt/whatsapp.DufOa_Gz.css.br"
  },
  "/_nuxt/whatsapp.DufOa_Gz.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"236-rh3QvzMcs+muFTKnEizKAr5KHBc\"",
    "mtime": "2025-12-18T20:18:13.977Z",
    "size": 566,
    "path": "../public/_nuxt/whatsapp.DufOa_Gz.css.gz"
  },
  "/_nuxt/wrqBHFeW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b27-wdlq5AEpSpfKVKeSlqdiD6+4u10\"",
    "mtime": "2025-12-18T20:18:11.449Z",
    "size": 2855,
    "path": "../public/_nuxt/wrqBHFeW.js"
  },
  "/_nuxt/wrqBHFeW.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"4a4-d5pquh/yETALe+rhk+eIXETB88M\"",
    "mtime": "2025-12-18T20:18:13.978Z",
    "size": 1188,
    "path": "../public/_nuxt/wrqBHFeW.js.br"
  },
  "/_nuxt/wrqBHFeW.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"521-JrSItlQWjSc9QNF2BNich58lD24\"",
    "mtime": "2025-12-18T20:18:13.978Z",
    "size": 1313,
    "path": "../public/_nuxt/wrqBHFeW.js.gz"
  },
  "/_nuxt/zUXEmvGC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"193-kCPmwj7S0N20oxCwsOyh7Pj56rw\"",
    "mtime": "2025-12-18T20:18:11.449Z",
    "size": 403,
    "path": "../public/_nuxt/zUXEmvGC.js"
  },
  "/contact/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.406Z",
    "size": 69,
    "path": "../public/contact/_payload.json"
  },
  "/contact/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"eb5c-LDCMqdis3csZ6puW7HyqfkQn6fs\"",
    "mtime": "2025-12-18T20:17:45.018Z",
    "size": 60252,
    "path": "../public/contact/index.html"
  },
  "/contact/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"33a0-Ge6xJ/zuBVH0AJLaD0JpgFItUvY\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 13216,
    "path": "../public/contact/index.html.br"
  },
  "/contact/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3f18-X4IePy1RzrrlTqWpTXoVGSKaY74\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 16152,
    "path": "../public/contact/index.html.gz"
  },
  "/careers/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.331Z",
    "size": 69,
    "path": "../public/careers/_payload.json"
  },
  "/careers/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c04a-KGAy6F/GMKc50pSihTbXMLV83Mc\"",
    "mtime": "2025-12-18T20:17:44.956Z",
    "size": 49226,
    "path": "../public/careers/index.html"
  },
  "/careers/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d3d-1+tVDE8yRv1gvY+mXtAuD+NrNog\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 11581,
    "path": "../public/careers/index.html.br"
  },
  "/careers/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"370c-UTPj6szwxVVkxa//t4IBk/CiJDE\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 14092,
    "path": "../public/careers/index.html.gz"
  },
  "/ar/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"17f7-AuzO5pykVk98DU5v53UTdu4LP9Q\"",
    "mtime": "2025-12-18T20:17:45.445Z",
    "size": 6135,
    "path": "../public/ar/_payload.json"
  },
  "/ar/_payload.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"6cb-LO3RUHe4MfcrK5QywZ6e2LKAxXo\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 1739,
    "path": "../public/ar/_payload.json.br"
  },
  "/ar/_payload.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"81f-us2c8kRePr2vTT+9g4sHBjLx/WQ\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 2079,
    "path": "../public/ar/_payload.json.gz"
  },
  "/ar/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"3f13b-iIrRFuJPXRn22/S5i34Pn93BSV4\"",
    "mtime": "2025-12-18T20:17:45.042Z",
    "size": 258363,
    "path": "../public/ar/index.html"
  },
  "/ar/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"599e-9Oga2bzregZK/WKiQIHDVEvlVco\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 22942,
    "path": "../public/ar/index.html.br"
  },
  "/ar/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"74e5-cGYq2jYIb3FZLUGdJAuQR6pCEBA\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 29925,
    "path": "../public/ar/index.html.gz"
  },
  "/blog/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.661Z",
    "size": 69,
    "path": "../public/blog/_payload.json"
  },
  "/blog/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"11cdd-JSojIueFwfu4ZPnBAlCqbZ2l32s\"",
    "mtime": "2025-12-18T20:17:45.531Z",
    "size": 72925,
    "path": "../public/blog/index.html"
  },
  "/blog/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3667-8eqJW9byGvt2FbnMaPWmxjaxXv8\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 13927,
    "path": "../public/blog/index.html.br"
  },
  "/blog/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"425f-kDdNHIEauXr0VT2Q7pmwIUeo3jE\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 16991,
    "path": "../public/blog/index.html.gz"
  },
  "/login/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.177Z",
    "size": 69,
    "path": "../public/login/_payload.json"
  },
  "/login/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c0ca-1R01Gf2WRg0eObDvpYmChNDZkU8\"",
    "mtime": "2025-12-18T20:17:44.926Z",
    "size": 49354,
    "path": "../public/login/index.html"
  },
  "/login/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d5d-pRaMDLmnrWzQDoCFoMDOf6Q69qg\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 11613,
    "path": "../public/login/index.html.br"
  },
  "/login/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3718-TlrOirzPQvboV7b8effsYOqjo4Q\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 14104,
    "path": "../public/login/index.html.gz"
  },
  "/privacy/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-IHmYbegL1LSx47yQP2gCcxdhByA\"",
    "mtime": "2025-12-18T20:17:45.953Z",
    "size": 69,
    "path": "../public/privacy/_payload.json"
  },
  "/privacy/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c0d9-dU2WBMNitJppdnEwvZYL+FLBsOM\"",
    "mtime": "2025-12-18T20:17:45.646Z",
    "size": 49369,
    "path": "../public/privacy/index.html"
  },
  "/privacy/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d55-XOJ95iQEqqDnXrWN8oIbjKCyL1Y\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 11605,
    "path": "../public/privacy/index.html.br"
  },
  "/privacy/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3725-gHhBqPXq6uAyokHat8SDWhnP7oU\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 14117,
    "path": "../public/privacy/index.html.gz"
  },
  "/privacy-policy/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.220Z",
    "size": 69,
    "path": "../public/privacy-policy/_payload.json"
  },
  "/privacy-policy/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c89a-on0Df+4Lkbgybah+6dDmvhCyU+I\"",
    "mtime": "2025-12-18T20:17:44.926Z",
    "size": 51354,
    "path": "../public/privacy-policy/index.html"
  },
  "/privacy-policy/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"301d-qmvmm82eldEkrxB7c9mw5U6fCVs\"",
    "mtime": "2025-12-18T20:17:47.424Z",
    "size": 12317,
    "path": "../public/privacy-policy/index.html.br"
  },
  "/privacy-policy/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3b04-INPM5O+/7dmnPRRmsYGTbXVt9AI\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15108,
    "path": "../public/privacy-policy/index.html.gz"
  },
  "/security/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.177Z",
    "size": 69,
    "path": "../public/security/_payload.json"
  },
  "/security/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c053-oQGRNpdWnzyXUw8HFAE6KjkdJxw\"",
    "mtime": "2025-12-18T20:17:44.926Z",
    "size": 49235,
    "path": "../public/security/index.html"
  },
  "/security/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d3a-3xifnmeUvQHeDAdbSavV6Dv67L0\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11578,
    "path": "../public/security/index.html.br"
  },
  "/security/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"370b-YBQCtiO8W/elvJgyZqfdlHfvqMs\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14091,
    "path": "../public/security/index.html.gz"
  },
  "/signup/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-lQGG6gr+Ip6yVVP3dY2+nmZbEvM\"",
    "mtime": "2025-12-18T20:17:45.177Z",
    "size": 69,
    "path": "../public/signup/_payload.json"
  },
  "/signup/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c0d9-8GkclZYzE6Ddo1iQM3ZZBv+qepE\"",
    "mtime": "2025-12-18T20:17:44.926Z",
    "size": 49369,
    "path": "../public/signup/index.html"
  },
  "/signup/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d4e-0mX6GuRAHoWM7zVwQVvzgAx0hZ4\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11598,
    "path": "../public/signup/index.html.br"
  },
  "/signup/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3727-fdlVJjok2oW/p2Tl/jyuq/uQ9y8\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14119,
    "path": "../public/signup/index.html.gz"
  },
  "/sitemap.xml/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"68-l9jsPo6sU6PxyzeP+P1pUxbRoP0\"",
    "mtime": "2025-12-18T20:17:45.950Z",
    "size": 104,
    "path": "../public/sitemap.xml/index.html"
  },
  "/terms/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-lQGG6gr+Ip6yVVP3dY2+nmZbEvM\"",
    "mtime": "2025-12-18T20:17:45.177Z",
    "size": 69,
    "path": "../public/terms/_payload.json"
  },
  "/terms/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c0e3-y0ZczHnhP7Jb7T4Yw2qCYmvjPvg\"",
    "mtime": "2025-12-18T20:17:44.926Z",
    "size": 49379,
    "path": "../public/terms/index.html"
  },
  "/terms/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d5b-BQFmWgb8to7njZ2snP5UljCKjB0\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11611,
    "path": "../public/terms/index.html.br"
  },
  "/terms/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"372d-hhr/Ay3NsuHe+qcd/kv/W9/4fP0\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14125,
    "path": "../public/terms/index.html.gz"
  },
  "/terms-conditions/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.404Z",
    "size": 69,
    "path": "../public/terms-conditions/_payload.json"
  },
  "/terms-conditions/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c901-873wcEf6e6rb/wZQBCDZG7aymMc\"",
    "mtime": "2025-12-18T20:17:44.957Z",
    "size": 51457,
    "path": "../public/terms-conditions/index.html"
  },
  "/terms-conditions/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3041-+laot29sY2gSFmDwiEKZ3Tg/7Oc\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 12353,
    "path": "../public/terms-conditions/index.html.br"
  },
  "/terms-conditions/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3b6f-xEkiLM16+q1LfK/9UAOL+ztK+VQ\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15215,
    "path": "../public/terms-conditions/index.html.gz"
  },
  "/__nuxt_content/blog/sql_dump.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"230-iPlneToscS12biq+62u55Ffm42o\"",
    "mtime": "2025-12-18T20:17:41.785Z",
    "size": 560,
    "path": "../public/__nuxt_content/blog/sql_dump.txt"
  },
  "/__nuxt_content/changelog/sql_dump.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"238-XpN9ierJxgbJMg25UG5nIZNuhQ0\"",
    "mtime": "2025-12-18T20:17:41.785Z",
    "size": 568,
    "path": "../public/__nuxt_content/changelog/sql_dump.txt"
  },
  "/__nuxt_content/docs/sql_dump.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"230-GBRfjsn/LDzEi+MOLN4tXd1Syk8\"",
    "mtime": "2025-12-18T20:17:41.785Z",
    "size": 560,
    "path": "../public/__nuxt_content/docs/sql_dump.txt"
  },
  "/__nuxt_content/index/sql_dump.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"260-4/IZMRPNz9zXQfKT+8CVH7YVw0E\"",
    "mtime": "2025-12-18T20:17:41.785Z",
    "size": 608,
    "path": "../public/__nuxt_content/index/sql_dump.txt"
  },
  "/__nuxt_content/posts/sql_dump.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"254-e8WJy9sWvEtRWnXmBCTCFV4AbQw\"",
    "mtime": "2025-12-18T20:17:41.785Z",
    "size": 596,
    "path": "../public/__nuxt_content/posts/sql_dump.txt"
  },
  "/__nuxt_content/pricing/sql_dump.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"250-6TbhC1yeCnWafRwBdOiBZWAxZ5M\"",
    "mtime": "2025-12-18T20:17:41.785Z",
    "size": 592,
    "path": "../public/__nuxt_content/pricing/sql_dump.txt"
  },
  "/__nuxt_content/versions/sql_dump.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"240-b6RXk7ZwyGK2oPnwACld6NgUAuA\"",
    "mtime": "2025-12-18T20:17:41.785Z",
    "size": 576,
    "path": "../public/__nuxt_content/versions/sql_dump.txt"
  },
  "/_ipx/_/logoDark.svg": {
    "type": "image/svg+xml",
    "etag": "\"24a5-Cmwaws2bION0h1OLjNG9XrA3aUE\"",
    "mtime": "2025-12-18T20:17:46.363Z",
    "size": 9381,
    "path": "../public/_ipx/_/logoDark.svg"
  },
  "/_ipx/_/logoDark.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"e44-VW1zFuPQNSoBhwiOLbCIwIYbECA\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 3652,
    "path": "../public/_ipx/_/logoDark.svg.br"
  },
  "/_ipx/_/logoDark.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"feb-Dld5NpY3/cai99qoevTdK4HGfl4\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 4075,
    "path": "../public/_ipx/_/logoDark.svg.gz"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-nWOj7ayO88ZW+WUz6jTNk73SbmE\"",
    "mtime": "2025-12-18T20:18:10.660Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/ar/about/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.331Z",
    "size": 69,
    "path": "../public/ar/about/_payload.json"
  },
  "/ar/about/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c007-5I/VmNRG9avdhOh55CdH8bX230g\"",
    "mtime": "2025-12-18T20:17:44.957Z",
    "size": 49159,
    "path": "../public/ar/about/index.html"
  },
  "/ar/about/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d26-5Zipo+8VC6TatoOASbGe/CvUKy8\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11558,
    "path": "../public/ar/about/index.html.br"
  },
  "/ar/about/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3726-DacBS/1wZJdSC37dvy89T+6bKFU\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14118,
    "path": "../public/ar/about/index.html.gz"
  },
  "/ar/blog/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-IHmYbegL1LSx47yQP2gCcxdhByA\"",
    "mtime": "2025-12-18T20:17:45.953Z",
    "size": 69,
    "path": "../public/ar/blog/_payload.json"
  },
  "/ar/blog/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"11d35-3B9nNBBNG8AJIueF8FL7RFkIWcI\"",
    "mtime": "2025-12-18T20:17:45.637Z",
    "size": 73013,
    "path": "../public/ar/blog/index.html"
  },
  "/ar/blog/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3655-xL7bKo6j3pb8bPQOXoh1bJr2a+8\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13909,
    "path": "../public/ar/blog/index.html.br"
  },
  "/ar/blog/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4284-7H+PKHRTuZ7jdUrJtbhPSfXY8kc\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 17028,
    "path": "../public/ar/blog/index.html.gz"
  },
  "/ar/careers/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-IHmYbegL1LSx47yQP2gCcxdhByA\"",
    "mtime": "2025-12-18T20:17:45.884Z",
    "size": 69,
    "path": "../public/ar/careers/_payload.json"
  },
  "/ar/careers/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c032-xrGM/SR4YMUrgZr/3Y9OcfsIZf0\"",
    "mtime": "2025-12-18T20:17:45.565Z",
    "size": 49202,
    "path": "../public/ar/careers/index.html"
  },
  "/ar/careers/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d35-3b/UF02ENxPYHLqgM8+mHB/jmtQ\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11573,
    "path": "../public/ar/careers/index.html.br"
  },
  "/ar/careers/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"373d-ROPe6m970JK8CqCzmMPxgrxEntI\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14141,
    "path": "../public/ar/careers/index.html.gz"
  },
  "/ar/contact/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-IHmYbegL1LSx47yQP2gCcxdhByA\"",
    "mtime": "2025-12-18T20:17:45.942Z",
    "size": 69,
    "path": "../public/ar/contact/_payload.json"
  },
  "/ar/contact/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"ed04-NmYnjqhvz7XzHJYa5z1OojNYIgc\"",
    "mtime": "2025-12-18T20:17:45.605Z",
    "size": 60676,
    "path": "../public/ar/contact/index.html"
  },
  "/ar/contact/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3494-0o8SSeExf1Ul0fjCqch4q10C7sA\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13460,
    "path": "../public/ar/contact/index.html.br"
  },
  "/ar/contact/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4074-Ri6DRkyEXjqeaUQaFFDftQWw7SM\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 16500,
    "path": "../public/ar/contact/index.html.gz"
  },
  "/ar/login/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.404Z",
    "size": 69,
    "path": "../public/ar/login/_payload.json"
  },
  "/ar/login/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c139-OeJnFtOXRq3tl3qvhHoS3Qgdl6Q\"",
    "mtime": "2025-12-18T20:17:45.018Z",
    "size": 49465,
    "path": "../public/ar/login/index.html"
  },
  "/ar/login/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d87-HIu7M2V0elOSPuT17Lc//Ki219U\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11655,
    "path": "../public/ar/login/index.html.br"
  },
  "/ar/login/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"37b8-fkwYUOTo0v24iqg2FlGuLUXHi+Q\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14264,
    "path": "../public/ar/login/index.html.gz"
  },
  "/ar/privacy/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-IHmYbegL1LSx47yQP2gCcxdhByA\"",
    "mtime": "2025-12-18T20:17:45.953Z",
    "size": 69,
    "path": "../public/ar/privacy/_payload.json"
  },
  "/ar/privacy/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c101-zIVBba5HAcSos/2De6amRwBkM6I\"",
    "mtime": "2025-12-18T20:17:45.646Z",
    "size": 49409,
    "path": "../public/ar/privacy/index.html"
  },
  "/ar/privacy/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d65-8uRifRcvSRpJr96lYH904b39On8\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11621,
    "path": "../public/ar/privacy/index.html.br"
  },
  "/ar/privacy/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3776-iKqkn/a9panfZz6qeqwl8HWT2qM\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14198,
    "path": "../public/ar/privacy/index.html.gz"
  },
  "/ar/privacy-policy/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-24ZslRPn25NqZ9UV76/6t4l83gE\"",
    "mtime": "2025-12-18T20:17:45.661Z",
    "size": 69,
    "path": "../public/ar/privacy-policy/_payload.json"
  },
  "/ar/privacy-policy/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c882-lYJ0Q9aE1mMdk8GjFkBODsa7SPc\"",
    "mtime": "2025-12-18T20:17:45.531Z",
    "size": 51330,
    "path": "../public/ar/privacy-policy/index.html"
  },
  "/ar/privacy-policy/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"300a-eosPLJeWtAzNCAgAw020kn8iO+A\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 12298,
    "path": "../public/ar/privacy-policy/index.html.br"
  },
  "/ar/privacy-policy/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3b39-IV49rPG/3ibhdUMsLZWpTU82DrY\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15161,
    "path": "../public/ar/privacy-policy/index.html.gz"
  },
  "/ar/security/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-IHmYbegL1LSx47yQP2gCcxdhByA\"",
    "mtime": "2025-12-18T20:17:45.950Z",
    "size": 69,
    "path": "../public/ar/security/_payload.json"
  },
  "/ar/security/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c03b-WaQ436m2rx0008Cpnv7ksTgnJGQ\"",
    "mtime": "2025-12-18T20:17:45.613Z",
    "size": 49211,
    "path": "../public/ar/security/index.html"
  },
  "/ar/security/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d39-0R2/ra6CD5A8ynWnjNyivQAT86s\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11577,
    "path": "../public/ar/security/index.html.br"
  },
  "/ar/security/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"373d-Ae3sMRIPBfIr8GWrOpTYP7jaCuo\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14141,
    "path": "../public/ar/security/index.html.gz"
  },
  "/ar/signup/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-lQGG6gr+Ip6yVVP3dY2+nmZbEvM\"",
    "mtime": "2025-12-18T20:17:45.445Z",
    "size": 69,
    "path": "../public/ar/signup/_payload.json"
  },
  "/ar/signup/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c12d-WGC5dPmQpcoc8IQpDbtzLVP8SWQ\"",
    "mtime": "2025-12-18T20:17:45.037Z",
    "size": 49453,
    "path": "../public/ar/signup/index.html"
  },
  "/ar/signup/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d82-l1aOaAplWQbpIqL1jGnr0+XfJTk\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11650,
    "path": "../public/ar/signup/index.html.br"
  },
  "/ar/signup/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"37ac-L7U2Y0enKMDOHYu00NaXypYt5Ro\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14252,
    "path": "../public/ar/signup/index.html.gz"
  },
  "/ar/sitemap.xml/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-wGEpePx7Q/lBKtduiQ9mSlAikFg\"",
    "mtime": "2025-12-18T20:17:45.988Z",
    "size": 69,
    "path": "../public/ar/sitemap.xml/_payload.json"
  },
  "/ar/sitemap.xml/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"beca-z3/MDr99P+P9u+UnfRX9U/6Hoj8\"",
    "mtime": "2025-12-18T20:17:45.959Z",
    "size": 48842,
    "path": "../public/ar/sitemap.xml/index.html"
  },
  "/ar/sitemap.xml/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2ced-PPmomuWdKU/58qX9WrOidcdUKkM\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11501,
    "path": "../public/ar/sitemap.xml/index.html.br"
  },
  "/ar/sitemap.xml/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"36db-4Dr5qOLCZwBmNBOLBgmnqyMVVjA\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14043,
    "path": "../public/ar/sitemap.xml/index.html.gz"
  },
  "/ar/terms/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-lQGG6gr+Ip6yVVP3dY2+nmZbEvM\"",
    "mtime": "2025-12-18T20:17:45.445Z",
    "size": 69,
    "path": "../public/ar/terms/_payload.json"
  },
  "/ar/terms/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c10b-D/LBsHlrqr7OdS3k0aiiLtv/TQQ\"",
    "mtime": "2025-12-18T20:17:45.027Z",
    "size": 49419,
    "path": "../public/ar/terms/index.html"
  },
  "/ar/terms/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"2d71-DirmH6N9EPd7MKljArDTnFROyms\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 11633,
    "path": "../public/ar/terms/index.html.br"
  },
  "/ar/terms/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3781-gFSK/68cB8uPJf2Djtnfz9Yxe5U\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 14209,
    "path": "../public/ar/terms/index.html.gz"
  },
  "/ar/terms-conditions/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-24ZslRPn25NqZ9UV76/6t4l83gE\"",
    "mtime": "2025-12-18T20:17:45.884Z",
    "size": 69,
    "path": "../public/ar/terms-conditions/_payload.json"
  },
  "/ar/terms-conditions/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"c8e9-lm289+QrD1rY8IMUNaTkaytKxzk\"",
    "mtime": "2025-12-18T20:17:45.565Z",
    "size": 51433,
    "path": "../public/ar/terms-conditions/index.html"
  },
  "/ar/terms-conditions/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3022-WvtnlKmYOE6QXFbVVuhVC4gnutg\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 12322,
    "path": "../public/ar/terms-conditions/index.html.br"
  },
  "/ar/terms-conditions/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3ba1-fhZJNOj7bACMDJ6jaak0azL2W5U\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15265,
    "path": "../public/ar/terms-conditions/index.html.gz"
  },
  "/blog/5-tips-for-better-sms-campaigns/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-W5vYggHhyUZN1aKbDHS0X/R0t0k\"",
    "mtime": "2025-12-18T20:17:46.154Z",
    "size": 69,
    "path": "../public/blog/5-tips-for-better-sms-campaigns/_payload.json"
  },
  "/blog/5-tips-for-better-sms-campaigns/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"e183-WZArOds+oJ9DUgDjX1bKnybrGxI\"",
    "mtime": "2025-12-18T20:17:46.091Z",
    "size": 57731,
    "path": "../public/blog/5-tips-for-better-sms-campaigns/index.html"
  },
  "/blog/5-tips-for-better-sms-campaigns/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"32ea-lc4IbAC35mUNyJFhDSH8HcVqdSo\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13034,
    "path": "../public/blog/5-tips-for-better-sms-campaigns/index.html.br"
  },
  "/blog/5-tips-for-better-sms-campaigns/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3dfd-TPnihxiXrEw1qhMuZcZj5aqlDo8\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15869,
    "path": "../public/blog/5-tips-for-better-sms-campaigns/index.html.gz"
  },
  "/blog/automating-your-sales-funnel/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-W5vYggHhyUZN1aKbDHS0X/R0t0k\"",
    "mtime": "2025-12-18T20:17:46.154Z",
    "size": 69,
    "path": "../public/blog/automating-your-sales-funnel/_payload.json"
  },
  "/blog/automating-your-sales-funnel/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"e17a-slclNMCg4UZYDKbJCtzyMofhooE\"",
    "mtime": "2025-12-18T20:17:46.091Z",
    "size": 57722,
    "path": "../public/blog/automating-your-sales-funnel/index.html"
  },
  "/blog/automating-your-sales-funnel/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"32e6-ByBoyLA0VAysNNPKTrVjTTjjouU\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13030,
    "path": "../public/blog/automating-your-sales-funnel/index.html.br"
  },
  "/blog/automating-your-sales-funnel/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3df8-eRzppWrFib3D6D5C11XTGSSPijM\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15864,
    "path": "../public/blog/automating-your-sales-funnel/index.html.gz"
  },
  "/blog/future-of-customer-communication/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-W5vYggHhyUZN1aKbDHS0X/R0t0k\"",
    "mtime": "2025-12-18T20:17:46.154Z",
    "size": 69,
    "path": "../public/blog/future-of-customer-communication/_payload.json"
  },
  "/blog/future-of-customer-communication/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"e636-nSDDLR2CCjU24H+a5PWMAsARXyA\"",
    "mtime": "2025-12-18T20:17:46.090Z",
    "size": 58934,
    "path": "../public/blog/future-of-customer-communication/index.html"
  },
  "/blog/future-of-customer-communication/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"33c3-wSyCQD14x+unc7bdqW5vvlDcRug\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13251,
    "path": "../public/blog/future-of-customer-communication/index.html.br"
  },
  "/blog/future-of-customer-communication/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3fc0-AofdvglSoUyJhE/9TnBSe+9toAU\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 16320,
    "path": "../public/blog/future-of-customer-communication/index.html.gz"
  },
  "/blog/mastering-whatsapp-business-api/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-W5vYggHhyUZN1aKbDHS0X/R0t0k\"",
    "mtime": "2025-12-18T20:17:46.154Z",
    "size": 69,
    "path": "../public/blog/mastering-whatsapp-business-api/_payload.json"
  },
  "/blog/mastering-whatsapp-business-api/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"e51b-MEZZcpN0uZd9rKCSzSc1k5idW4A\"",
    "mtime": "2025-12-18T20:17:46.090Z",
    "size": 58651,
    "path": "../public/blog/mastering-whatsapp-business-api/index.html"
  },
  "/blog/mastering-whatsapp-business-api/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"3365-OycA2eWO6KvaI6dAm2d9saWky48\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13157,
    "path": "../public/blog/mastering-whatsapp-business-api/index.html.br"
  },
  "/blog/mastering-whatsapp-business-api/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3efa-JMGS1OLWM6yqLp4FL1oxOiK04aQ\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 16122,
    "path": "../public/blog/mastering-whatsapp-business-api/index.html.gz"
  },
  "/blog/understanding-chatbot-analytics/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-W5vYggHhyUZN1aKbDHS0X/R0t0k\"",
    "mtime": "2025-12-18T20:17:46.156Z",
    "size": 69,
    "path": "../public/blog/understanding-chatbot-analytics/_payload.json"
  },
  "/blog/understanding-chatbot-analytics/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"e183-AaRJvlLZARVLG8alLA1TPSag1f0\"",
    "mtime": "2025-12-18T20:17:46.091Z",
    "size": 57731,
    "path": "../public/blog/understanding-chatbot-analytics/index.html"
  },
  "/blog/understanding-chatbot-analytics/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"32db-oz9RUhZpxGb0/m0hlh8NEonmfWs\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13019,
    "path": "../public/blog/understanding-chatbot-analytics/index.html.br"
  },
  "/blog/understanding-chatbot-analytics/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3dff-Y/uIAyBgyC8XwDmLXqXn06NLCBo\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15871,
    "path": "../public/blog/understanding-chatbot-analytics/index.html.gz"
  },
  "/blog/why-multi-channel-support-matters/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-W5vYggHhyUZN1aKbDHS0X/R0t0k\"",
    "mtime": "2025-12-18T20:17:46.154Z",
    "size": 69,
    "path": "../public/blog/why-multi-channel-support-matters/_payload.json"
  },
  "/blog/why-multi-channel-support-matters/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"e189-soKOESNHnLEyTpDpWuAMTg29ZO0\"",
    "mtime": "2025-12-18T20:17:46.091Z",
    "size": 57737,
    "path": "../public/blog/why-multi-channel-support-matters/index.html"
  },
  "/blog/why-multi-channel-support-matters/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"32e5-ULa9cQUoQEORavYAVn5li4dzTq0\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 13029,
    "path": "../public/blog/why-multi-channel-support-matters/index.html.br"
  },
  "/blog/why-multi-channel-support-matters/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3e03-3H9tbdMCadaMvZoLHlPA0FVjlI0\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 15875,
    "path": "../public/blog/why-multi-channel-support-matters/index.html.gz"
  },
  "/images/footer/appScreen.webp": {
    "type": "image/webp",
    "etag": "\"2958e-ZJ/Y1r7B89LyqWfZYmwdxjtD3gk\"",
    "mtime": "2025-12-18T20:18:11.465Z",
    "size": 169358,
    "path": "../public/images/footer/appScreen.webp"
  },
  "/images/services/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"468ab-Vb4WWvKt4flvXwt//EdRDv+nIro\"",
    "mtime": "2025-12-18T20:18:11.465Z",
    "size": 288939,
    "path": "../public/images/services/1.jpg"
  },
  "/images/services/2.webp": {
    "type": "image/webp",
    "etag": "\"1e92e-VHpOpFgLWA851njja7B01pPvv50\"",
    "mtime": "2025-12-18T20:18:11.465Z",
    "size": 125230,
    "path": "../public/images/services/2.webp"
  },
  "/images/services/3.webp": {
    "type": "image/webp",
    "etag": "\"2676-lp3TMvqQYQMUqjdMynmM8xkW0bI\"",
    "mtime": "2025-12-18T20:18:11.465Z",
    "size": 9846,
    "path": "../public/images/services/3.webp"
  },
  "/images/services/4.webp": {
    "type": "image/webp",
    "etag": "\"23614-B2V5wqudGCBPhaB3z+vOpft7o+M\"",
    "mtime": "2025-12-18T20:18:11.465Z",
    "size": 144916,
    "path": "../public/images/services/4.webp"
  },
  "/images/services/5.webp": {
    "type": "image/webp",
    "etag": "\"11574-+cU24yoC0eHDjxwwOjkL9mg9n6w\"",
    "mtime": "2025-12-18T20:18:11.465Z",
    "size": 71028,
    "path": "../public/images/services/5.webp"
  },
  "/solutions/otp/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.957Z",
    "size": 69,
    "path": "../public/solutions/otp/_payload.json"
  },
  "/solutions/otp/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"15386-vJ8FK+Skhd+6sI0HixxmieQf/js\"",
    "mtime": "2025-12-18T20:17:45.661Z",
    "size": 86918,
    "path": "../public/solutions/otp/index.html"
  },
  "/solutions/otp/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"4095-ID1kjbOo6Xnx4upIkDzS+t9Qhc8\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 16533,
    "path": "../public/solutions/otp/index.html.br"
  },
  "/solutions/otp/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4e38-W51QJC7BkPuVe9smJZ5peu6n3pc\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 20024,
    "path": "../public/solutions/otp/index.html.gz"
  },
  "/solutions/sms/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-0Z6Qo4IspKShsWo2ze3RUa2zkXQ\"",
    "mtime": "2025-12-18T20:17:45.953Z",
    "size": 69,
    "path": "../public/solutions/sms/_payload.json"
  },
  "/solutions/sms/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"1531f-ztZVs5sLcTZFwVbOqK9hxmRNhtg\"",
    "mtime": "2025-12-18T20:17:45.646Z",
    "size": 86815,
    "path": "../public/solutions/sms/index.html"
  },
  "/solutions/sms/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"40ba-xA9O8/GP8uOhR0xahlqiWXlYzCQ\"",
    "mtime": "2025-12-18T20:17:47.428Z",
    "size": 16570,
    "path": "../public/solutions/sms/index.html.br"
  },
  "/solutions/sms/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4eb2-jVzoO+jtHDBmN65fOCifcbZztJo\"",
    "mtime": "2025-12-18T20:17:47.427Z",
    "size": 20146,
    "path": "../public/solutions/sms/index.html.gz"
  },
  "/solutions/whatsapp/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"17f7-0JggcpNNnRxlncWn0q0Md/Qd4rs\"",
    "mtime": "2025-12-18T20:17:46.090Z",
    "size": 6135,
    "path": "../public/solutions/whatsapp/_payload.json"
  },
  "/solutions/whatsapp/_payload.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"6c9-wWYaLEMtqltZSr1mwzmC8tBn35g\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 1737,
    "path": "../public/solutions/whatsapp/_payload.json.br"
  },
  "/solutions/whatsapp/_payload.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"820-W339ht70i6moryo2uSaHMOIjHtY\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 2080,
    "path": "../public/solutions/whatsapp/_payload.json.gz"
  },
  "/solutions/whatsapp/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"1f14c-wPeO0i0O/KL4Ezto8J1m7cznEUU\"",
    "mtime": "2025-12-18T20:17:46.000Z",
    "size": 127308,
    "path": "../public/solutions/whatsapp/index.html"
  },
  "/solutions/whatsapp/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"5060-5yjMWpmqcLfkg2WHbNWzK+Fc7h8\"",
    "mtime": "2025-12-18T20:17:47.501Z",
    "size": 20576,
    "path": "../public/solutions/whatsapp/index.html.br"
  },
  "/solutions/whatsapp/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"64ca-c8vcBBeJwAKblLBE5fY5OBagWUA\"",
    "mtime": "2025-12-18T20:17:47.428Z",
    "size": 25802,
    "path": "../public/solutions/whatsapp/index.html.gz"
  },
  "/_i18n/JGS6Bpnr/ar/messages.json": {
    "type": "application/json",
    "etag": "\"29d8-zdegvem/nC9KHbjx6Dqxi7Cz7lY\"",
    "mtime": "2025-12-18T20:17:44.052Z",
    "size": 10712,
    "path": "../public/_i18n/JGS6Bpnr/ar/messages.json"
  },
  "/_i18n/JGS6Bpnr/ar/messages.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"c0a-puNhGB3J6QLsMUvtgQKj1jq75yA\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 3082,
    "path": "../public/_i18n/JGS6Bpnr/ar/messages.json.br"
  },
  "/_i18n/JGS6Bpnr/ar/messages.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"eae-JFup7RqVt8cId12jgGZD9OO4+SY\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 3758,
    "path": "../public/_i18n/JGS6Bpnr/ar/messages.json.gz"
  },
  "/_i18n/JGS6Bpnr/en/messages.json": {
    "type": "application/json",
    "etag": "\"209a-2aUM/cM5IWzL0A/rrW1GbUsFKaw\"",
    "mtime": "2025-12-18T20:17:44.052Z",
    "size": 8346,
    "path": "../public/_i18n/JGS6Bpnr/en/messages.json"
  },
  "/_i18n/JGS6Bpnr/en/messages.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"a14-pYqAaXlmT42mVnp59tqGTuksOrc\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 2580,
    "path": "../public/_i18n/JGS6Bpnr/en/messages.json.br"
  },
  "/_i18n/JGS6Bpnr/en/messages.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"ce5-ZvvEL+jQ99w1Pll+9hzG+rqE0qE\"",
    "mtime": "2025-12-18T20:17:47.425Z",
    "size": 3301,
    "path": "../public/_i18n/JGS6Bpnr/en/messages.json.gz"
  },
  "/_nuxt/builds/meta/2ed6e87c-33ee-428d-8b14-dc873800d6ab.json": {
    "type": "application/json",
    "etag": "\"4ef-G2t+m0VqugIkxbEq21MdUefnz9w\"",
    "mtime": "2025-12-18T20:18:10.548Z",
    "size": 1263,
    "path": "../public/_nuxt/builds/meta/2ed6e87c-33ee-428d-8b14-dc873800d6ab.json"
  },
  "/_nuxt/builds/meta/2ed6e87c-33ee-428d-8b14-dc873800d6ab.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"194-3ZlCmKEDmn6Qwy0ExljTCtE7sLE\"",
    "mtime": "2025-12-18T20:18:14.028Z",
    "size": 404,
    "path": "../public/_nuxt/builds/meta/2ed6e87c-33ee-428d-8b14-dc873800d6ab.json.br"
  },
  "/_nuxt/builds/meta/2ed6e87c-33ee-428d-8b14-dc873800d6ab.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"1e6-Otmn4eGcYZS7Y5sWsXRSdqwQkmc\"",
    "mtime": "2025-12-18T20:18:14.010Z",
    "size": 486,
    "path": "../public/_nuxt/builds/meta/2ed6e87c-33ee-428d-8b14-dc873800d6ab.json.gz"
  },
  "/ar/solutions/otp/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-24ZslRPn25NqZ9UV76/6t4l83gE\"",
    "mtime": "2025-12-18T20:17:45.957Z",
    "size": 69,
    "path": "../public/ar/solutions/otp/_payload.json"
  },
  "/ar/solutions/otp/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"1536e-/Pi3/1ZR6qqt2aS0hxFJP6hFVnU\"",
    "mtime": "2025-12-18T20:17:45.660Z",
    "size": 86894,
    "path": "../public/ar/solutions/otp/index.html"
  },
  "/ar/solutions/otp/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"409d-PyRSBwIm7Ea9T2TRRIE5EIJotCI\"",
    "mtime": "2025-12-18T20:17:47.428Z",
    "size": 16541,
    "path": "../public/ar/solutions/otp/index.html.br"
  },
  "/ar/solutions/otp/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4e65-6jaDJM4kn+PcX6t8mnnWeuazw5w\"",
    "mtime": "2025-12-18T20:17:47.428Z",
    "size": 20069,
    "path": "../public/ar/solutions/otp/index.html.gz"
  },
  "/ar/solutions/sms/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"45-24ZslRPn25NqZ9UV76/6t4l83gE\"",
    "mtime": "2025-12-18T20:17:45.953Z",
    "size": 69,
    "path": "../public/ar/solutions/sms/_payload.json"
  },
  "/ar/solutions/sms/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"15307-MsxGUX+PeLnYM42rac04I67GxPI\"",
    "mtime": "2025-12-18T20:17:45.646Z",
    "size": 86791,
    "path": "../public/ar/solutions/sms/index.html"
  },
  "/ar/solutions/sms/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"40e7-Wl4ZVIh0rnOsAL83ocobqOZz63Q\"",
    "mtime": "2025-12-18T20:17:47.458Z",
    "size": 16615,
    "path": "../public/ar/solutions/sms/index.html.br"
  },
  "/ar/solutions/sms/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"4ede-eJGvLQZENJyOam8CRNcv/g1eAys\"",
    "mtime": "2025-12-18T20:17:47.428Z",
    "size": 20190,
    "path": "../public/ar/solutions/sms/index.html.gz"
  },
  "/ar/solutions/whatsapp/_payload.json": {
    "type": "application/json;charset=utf-8",
    "etag": "\"17f7-KMzZVpJAMStvqFawtEqPKSjf+9M\"",
    "mtime": "2025-12-18T20:17:46.091Z",
    "size": 6135,
    "path": "../public/ar/solutions/whatsapp/_payload.json"
  },
  "/ar/solutions/whatsapp/_payload.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"6c7-fdFMbOoy4WiQ8cMivHti/QlXox8\"",
    "mtime": "2025-12-18T20:17:47.426Z",
    "size": 1735,
    "path": "../public/ar/solutions/whatsapp/_payload.json.br"
  },
  "/ar/solutions/whatsapp/_payload.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"820-gnA0/aCqcDmU1xuj6jQuK4d7RfQ\"",
    "mtime": "2025-12-18T20:17:47.426Z",
    "size": 2080,
    "path": "../public/ar/solutions/whatsapp/_payload.json.gz"
  },
  "/ar/solutions/whatsapp/index.html": {
    "type": "text/html;charset=utf-8",
    "etag": "\"1f154-g/V5FTaLWcCTKYbv3KnTzBx23HA\"",
    "mtime": "2025-12-18T20:17:46.005Z",
    "size": 127316,
    "path": "../public/ar/solutions/whatsapp/index.html"
  },
  "/ar/solutions/whatsapp/index.html.br": {
    "type": "text/html; charset=utf-8",
    "encoding": "br",
    "etag": "\"5036-pPzUVUMoyRIDe+sOdHY21AQ6oHk\"",
    "mtime": "2025-12-18T20:17:47.558Z",
    "size": 20534,
    "path": "../public/ar/solutions/whatsapp/index.html.br"
  },
  "/ar/solutions/whatsapp/index.html.gz": {
    "type": "text/html; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"6521-+B2qj8/HeI97f/oNhrcagFqqoSo\"",
    "mtime": "2025-12-18T20:17:47.428Z",
    "size": 25889,
    "path": "../public/ar/solutions/whatsapp/index.html.gz"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve$1 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
const basename = function(p, extension) {
  const segments = normalizeWindowsPath(p).split("/");
  let lastSegment = "";
  for (let i = segments.length - 1; i >= 0; i--) {
    const val = segments[i];
    if (val) {
      lastSegment = val;
      break;
    }
  }
  return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _79vV4O = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead();
  return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  let entry;
  watchEffect(() => {
    const i = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i);
    } else {
      entry = head.push(i, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}
function useSeoMeta(input = {}, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead();
  head.use(FlatMetaPlugin);
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    _flatMeta: meta
  }, options);
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const createHeadCore = createUnhead;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('../build/server.mjs').then((r) => r.default || r);
const getPrecomputedDependencies = () => import('../build/client.precomputed.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const precomputed = await getPrecomputedDependencies();
  const renderer = createRenderer(createSSRApp, {
    precomputed,
    manifest: void 0,
    renderToString: renderToString$1,
    buildAssetsURL
  });
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const precomputed = await getPrecomputedDependencies();
  const spaTemplate = await import('../virtual/_virtual_spa-template.mjs').then((r) => r.template).catch(() => "").then((r) => {
    {
      const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
      const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
      const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
      const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
      return appTemplate + loaderTemplate;
    }
  });
  const renderer = createRenderer(() => () => {
  }, {
    precomputed,
    manifest: void 0,
    renderToString: () => spaTemplate,
    buildAssetsURL
  });
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => import('../build/styles.mjs').then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", err);
    throw err;
  });
  if (ssrContext.payload?.error) {
    throw ssrContext.payload.error;
  }
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const collections = {
  'circle-flags': () => import('../_/icons.mjs').then(m => m.default),
  'lucide': () => import('../_/icons2.mjs').then(m => m.default),
  'simple-icons': () => import('../_/icons3.mjs').then(m => m.default),
  'heroicons': () => import('../_/icons4.mjs').then(m => m.default),
  'circle-flags': () => import('../_/icons.mjs').then(m => m.default),
  'lucide': () => import('../_/icons2.mjs').then(m => m.default),
  'simple-icons': () => import('../_/icons3.mjs').then(m => m.default),
  'heroicons': () => import('../_/icons4.mjs').then(m => m.default),
};

const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _xwPhkG = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError$1({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError$1({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola.error(e);
      if (e.status === 404)
        return createError$1({ status: 404 });
      else
        return createError$1({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError$1({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _XzNTS3 = eventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = getNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host;
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _2HI1bj = defineEventHandler(async (e) => {
  const nitroApp = useNitroApp();
  const { indexable} = getSiteRobotConfig(e);
  const { credits, isNuxtContentV2, cacheControl } = useRuntimeConfigNuxtRobots(e);
  let robotsTxtCtx = {
    sitemaps: [],
    groups: [
      {
        allow: [],
        comment: [],
        userAgent: ["*"],
        disallow: ["/"]
      }
    ]
  };
  if (indexable) {
    robotsTxtCtx = await resolveRobotsTxtContext(e);
    robotsTxtCtx.sitemaps = [...new Set(
      asArray(robotsTxtCtx.sitemaps).map((s) => !s.startsWith("http") ? withSiteUrl(e, s, { withBase: true}) : s)
    )];
    if (isNuxtContentV2) {
      const contentWithRobotRules = await e.$fetch("/__robots__/nuxt-content.json", {
        headers: {
          Accept: "application/json"
        }
      });
      if (String(contentWithRobotRules).trim().startsWith("<!DOCTYPE")) {
        logger$1.error("Invalid HTML returned from /__robots__/nuxt-content.json, skipping.");
      } else {
        for (const group of robotsTxtCtx.groups) {
          if (group.userAgent.includes("*")) {
            group.disallow.push(...contentWithRobotRules);
            group.disallow = group.disallow.filter(Boolean);
          }
        }
      }
    }
  }
  let robotsTxt = generateRobotsTxt(robotsTxtCtx);
  if (credits) {
    robotsTxt = [
      `# START nuxt-robots (${indexable ? "indexable" : "indexing disabled"})`,
      robotsTxt,
      "# END nuxt-robots"
    ].filter(Boolean).join("\n");
  }
  setHeader(e, "Content-Type", "text/plain; charset=utf-8");
  setHeader(e, "Cache-Control", globalThis._importMeta_.test || !cacheControl ? "no-store" : cacheControl);
  const hookCtx = { robotsTxt, e };
  await nitroApp.hooks.callHook("robots:robots-txt", hookCtx);
  return hookCtx.robotsTxt;
});

const _wL89JZ = defineEventHandler(async (e) => {
  if (e.path === "/robots.txt" || e.path.startsWith("/__") || e.path.startsWith("/api") || e.path.startsWith("/_nuxt"))
    return;
  const nuxtRobotsConfig = useRuntimeConfigNuxtRobots(e);
  if (nuxtRobotsConfig) {
    const { header } = nuxtRobotsConfig;
    const robotConfig = getPathRobotConfig(e, { skipSiteIndexable: Boolean(getQuery(e)?.mockProductionEnv) });
    if (header) {
      setHeader(e, "X-Robots-Tag", robotConfig.rule);
    }
    e.context.robots = robotConfig;
  }
});

const _HCPQOs = defineEventHandler(async (e) => {
  const collections = [];
  for (const collection in contentManifest) {
    if (contentManifest[collection].fields.sitemap) {
      collections.push(collection);
    }
  }
  const contentList = [];
  for (const collection of collections) {
    contentList.push(
      // @ts-expect-error dynamic collection name
      queryCollection(e, collection).select("path", "sitemap").where("path", "IS NOT NULL").where("sitemap", "IS NOT NULL").all()
    );
  }
  const results = await Promise.all(contentList);
  return results.flatMap(
    (entries) => entries.filter((c) => c.sitemap !== false && c.path).map((c) => ({
      loc: c.path,
      ...typeof c.sitemap === "object" ? c.sitemap : {}
    }))
  ).filter(Boolean);
});

const logger = createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const seen = /* @__PURE__ */ new Map();
  let resultLength = 0;
  const result = Array.from({ length: arr.length });
  for (const item of arr) {
    const k = item[key];
    if (seen.has(k)) {
      const existingIndex = seen.get(k);
      result[existingIndex] = merger(item, result[existingIndex]);
    } else {
      seen.set(k, resultLength);
      result[resultLength++] = item;
    }
  }
  result.length = resultLength;
  return result;
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (prefix && locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  const excludeRegex = exclude.filter((r) => r instanceof RegExp);
  const includeRegex = include.filter((r) => r instanceof RegExp);
  const excludeStrings = exclude.filter((r) => typeof r === "string");
  const includeStrings = include.filter((r) => typeof r === "string");
  const excludeMatcher = excludeStrings.length > 0 ? toRouteMatcher(createRouter$1({
    routes: Object.fromEntries(excludeStrings.map((r) => [r, true])),
    strictTrailingSlash: false
  })) : null;
  const includeMatcher = includeStrings.length > 0 ? toRouteMatcher(createRouter$1({
    routes: Object.fromEntries(includeStrings.map((r) => [r, true])),
    strictTrailingSlash: false
  })) : null;
  const excludeExact = new Set(excludeStrings);
  const includeExact = new Set(includeStrings);
  return function(path) {
    if (excludeRegex.some((r) => r.test(path)))
      return false;
    if (excludeExact.has(path))
      return false;
    if (excludeMatcher && excludeMatcher.matchAll(path).length > 0)
      return false;
    if (includeRegex.some((r) => r.test(path)))
      return true;
    if (includeExact.has(path))
      return true;
    if (includeMatcher && includeMatcher.matchAll(path).length > 0)
      return true;
    return include.length === 0;
  };
}

function xmlEscape(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function useSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _VX1CS8 = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery$1(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${xmlEscape(withQuery("/__sitemap__/debug.json", { sitemap: sitemapName }))}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  const fetchErrors = [];
  const xslQuery = getQuery(e);
  if (xslQuery.error_messages) {
    const errorMessages = xslQuery.error_messages;
    const errorUrls = xslQuery.error_urls;
    if (errorMessages) {
      const messages = Array.isArray(errorMessages) ? errorMessages : [errorMessages];
      const urls = Array.isArray(errorUrls) ? errorUrls : errorUrls ? [errorUrls] : [];
      messages.forEach((msg, i) => {
        const errorParts = [xmlEscape(msg)];
        if (urls[i]) {
          errorParts.push(xmlEscape(urls[i]));
        }
        fetchErrors.push(`<strong style="color: #dc2626;">Error ${i + 1}:</strong> ${errorParts.join(" - ")}`);
      });
    }
  }
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${xmlEscape(siteUrl)}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${xmlEscape(canonicalPreviewUrl)}" style="color: #398465; white-space: nowrap;">${xmlEscape(fixPath(canonicalPreviewUrl))}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${xmlEscape(fixPath(referrer))}" style="color: #398465; white-space: nowrap ">${xmlEscape(fixPath(referrer))}</a>`);
  }
  const hasRuntimeErrors = fetchErrors.length > 0;
  const showSidebar = hasRuntimeErrors;
  const runtimeErrors = hasRuntimeErrors ? fetchErrors.map((t) => `<li><p>${t}</p></li>`).join("\n") : "";
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465;
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465;
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${xmlEscape(title)}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${xmlEscape(fixPath("/sitemap_index.xml"))}">${xmlEscape(fixPath("/sitemap_index.xml"))}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${showSidebar ? `<div class="w-30 top-2 shadow rounded p-5 right-2" style="margin: 0 auto;">
                      ${""}
                      ${hasRuntimeErrors ? `<div${""}><p><strong style="color: #dc2626;">Runtime Errors</strong></p><ul style="margin: 1rem 0; padding: 0;">${runtimeErrors}</ul></div>` : ""}
                      ${""}
                    </div>` : ""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter$1({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

function resolve(s, resolvers) {
  if (typeof s === "undefined")
    return void 0;
  const str = typeof s === "string" ? s : s.toString();
  if (!resolvers)
    return str;
  if (hasProtocol(str, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(str);
  return resolvers.canonicalUrlResolver(str);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const input = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (input.url && !input.loc) {
    input.loc = input.url;
  }
  delete input.url;
  if (typeof input.loc !== "string") {
    input.loc = "";
  }
  const skipEncoding = input._encoded === true;
  const e = input;
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch {
    e._path = null;
  }
  if (e._path) {
    const search = e._path.search;
    const qs = search && search.length > 1 ? stringifyQuery(parseQuery(search)) : "";
    const pathname = skipEncoding ? e._path.pathname : encodePath(e._path.pathname);
    e._relativeLoc = `${pathname}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else if (!skipEncoding && !isEncoded(e.loc)) {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function isEncoded(url) {
  try {
    return url !== decodeURIComponent(url);
  } catch {
    return false;
  }
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu(_e, defaults);
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    const alternatives = e.alternatives.map((a) => ({ ...a }));
    for (const alt of alternatives) {
      if (typeof alt.href === "string") {
        alt.href = resolve(alt.href, resolvers);
      } else if (typeof alt.href === "object" && alt.href) {
        alt.href = resolve(alt.href.href, resolvers);
      }
    }
    e.alternatives = mergeOnKey(alternatives, "hreflang");
  }
  if (e.images) {
    const images = e.images.map((i) => ({ ...i }));
    for (const img of images) {
      img.loc = resolve(img.loc, resolvers);
    }
    e.images = mergeOnKey(images, "loc");
  }
  if (e.videos) {
    const videos = e.videos.map((v) => ({ ...v }));
    for (const video of videos) {
      if (video.content_loc) {
        video.content_loc = resolve(video.content_loc, resolvers);
      }
    }
    e.videos = mergeOnKey(videos, "content_loc");
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    const tIdx = d.indexOf("T");
    if (tIdx !== -1) {
      const t = d.slice(tIdx + 1);
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

function isValidString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function parseNumber(value) {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim()) {
    const num = Number.parseFloat(value.trim());
    return Number.isNaN(num) ? void 0 : num;
  }
  return void 0;
}
function parseInteger(value) {
  if (typeof value === "number") return Math.floor(value);
  if (typeof value === "string" && value.trim()) {
    const num = Number.parseInt(value.trim(), 10);
    return Number.isNaN(num) ? void 0 : num;
  }
  return void 0;
}
function extractUrlFromParsedElement(urlElement, warnings) {
  if (!isValidString(urlElement.loc)) {
    warnings.push({
      type: "validation",
      message: "URL entry missing required loc element",
      context: { url: String(urlElement.loc || "undefined") }
    });
    return null;
  }
  const urlObj = { loc: urlElement.loc };
  if (isValidString(urlElement.lastmod)) {
    urlObj.lastmod = urlElement.lastmod;
  }
  if (isValidString(urlElement.changefreq)) {
    const validFreqs = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
    if (validFreqs.includes(urlElement.changefreq)) {
      urlObj.changefreq = urlElement.changefreq;
    } else {
      warnings.push({
        type: "validation",
        message: "Invalid changefreq value",
        context: { url: urlElement.loc, field: "changefreq", value: urlElement.changefreq }
      });
    }
  }
  const priority = parseNumber(urlElement.priority);
  if (priority !== void 0 && !Number.isNaN(priority)) {
    if (priority < 0 || priority > 1) {
      warnings.push({
        type: "validation",
        message: "Priority value should be between 0.0 and 1.0, clamping to valid range",
        context: { url: urlElement.loc, field: "priority", value: priority }
      });
    }
    urlObj.priority = Math.max(0, Math.min(1, priority));
  } else if (urlElement.priority !== void 0) {
    warnings.push({
      type: "validation",
      message: "Invalid priority value",
      context: { url: urlElement.loc, field: "priority", value: urlElement.priority }
    });
  }
  if (urlElement.image) {
    const images = Array.isArray(urlElement.image) ? urlElement.image : [urlElement.image];
    const validImages = images.map((img) => {
      if (isValidString(img.loc)) {
        return { loc: img.loc };
      } else {
        warnings.push({
          type: "validation",
          message: "Image missing required loc element",
          context: { url: urlElement.loc, field: "image.loc" }
        });
        return null;
      }
    }).filter((img) => img !== null);
    if (validImages.length > 0) {
      urlObj.images = validImages;
    }
  }
  if (urlElement.video) {
    const videos = Array.isArray(urlElement.video) ? urlElement.video : [urlElement.video];
    const validVideos = videos.map((video) => {
      const missingFields = [];
      if (!isValidString(video.title)) missingFields.push("title");
      if (!isValidString(video.thumbnail_loc)) missingFields.push("thumbnail_loc");
      if (!isValidString(video.description)) missingFields.push("description");
      if (!isValidString(video.content_loc)) missingFields.push("content_loc");
      if (missingFields.length > 0) {
        warnings.push({
          type: "validation",
          message: `Video missing required fields: ${missingFields.join(", ")}`,
          context: { url: urlElement.loc, field: "video" }
        });
        return null;
      }
      const videoObj = {
        title: video.title,
        thumbnail_loc: video.thumbnail_loc,
        description: video.description,
        content_loc: video.content_loc
      };
      if (isValidString(video.player_loc)) {
        videoObj.player_loc = video.player_loc;
      }
      const duration = parseInteger(video.duration);
      if (duration !== void 0) {
        videoObj.duration = duration;
      } else if (video.duration !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video duration value",
          context: { url: urlElement.loc, field: "video.duration", value: video.duration }
        });
      }
      if (isValidString(video.expiration_date)) {
        videoObj.expiration_date = video.expiration_date;
      }
      const rating = parseNumber(video.rating);
      if (rating !== void 0) {
        if (rating < 0 || rating > 5) {
          warnings.push({
            type: "validation",
            message: "Video rating should be between 0.0 and 5.0",
            context: { url: urlElement.loc, field: "video.rating", value: rating }
          });
        }
        videoObj.rating = rating;
      } else if (video.rating !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video rating value",
          context: { url: urlElement.loc, field: "video.rating", value: video.rating }
        });
      }
      const viewCount = parseInteger(video.view_count);
      if (viewCount !== void 0) {
        videoObj.view_count = viewCount;
      } else if (video.view_count !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video view_count value",
          context: { url: urlElement.loc, field: "video.view_count", value: video.view_count }
        });
      }
      if (isValidString(video.publication_date)) {
        videoObj.publication_date = video.publication_date;
      }
      if (isValidString(video.family_friendly)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.family_friendly)) {
          videoObj.family_friendly = video.family_friendly;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video family_friendly value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.family_friendly", value: video.family_friendly }
          });
        }
      }
      if (isValidString(video.requires_subscription)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.requires_subscription)) {
          videoObj.requires_subscription = video.requires_subscription;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video requires_subscription value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.requires_subscription", value: video.requires_subscription }
          });
        }
      }
      if (isValidString(video.live)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.live)) {
          videoObj.live = video.live;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video live value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.live", value: video.live }
          });
        }
      }
      if (video.restriction && typeof video.restriction === "object") {
        const restriction = video.restriction;
        if (isValidString(restriction.relationship) && isValidString(restriction["#text"])) {
          const validRelationships = ["allow", "deny"];
          if (validRelationships.includes(restriction.relationship)) {
            videoObj.restriction = {
              relationship: restriction.relationship,
              restriction: restriction["#text"]
            };
          } else {
            warnings.push({
              type: "validation",
              message: 'Invalid video restriction relationship, should be "allow" or "deny"',
              context: { url: urlElement.loc, field: "video.restriction.relationship", value: restriction.relationship }
            });
          }
        }
      }
      if (video.platform && typeof video.platform === "object") {
        const platform = video.platform;
        if (isValidString(platform.relationship) && isValidString(platform["#text"])) {
          const validRelationships = ["allow", "deny"];
          if (validRelationships.includes(platform.relationship)) {
            videoObj.platform = {
              relationship: platform.relationship,
              platform: platform["#text"]
            };
          } else {
            warnings.push({
              type: "validation",
              message: 'Invalid video platform relationship, should be "allow" or "deny"',
              context: { url: urlElement.loc, field: "video.platform.relationship", value: platform.relationship }
            });
          }
        }
      }
      if (video.price) {
        const prices = Array.isArray(video.price) ? video.price : [video.price];
        const validPrices = prices.map((price) => {
          const priceValue = price["#text"];
          if (priceValue == null || typeof priceValue !== "string" && typeof priceValue !== "number") {
            warnings.push({
              type: "validation",
              message: "Video price missing value",
              context: { url: urlElement.loc, field: "video.price" }
            });
            return null;
          }
          const validTypes = ["rent", "purchase", "package", "subscription"];
          if (price.type && !validTypes.includes(price.type)) {
            warnings.push({
              type: "validation",
              message: `Invalid video price type "${price.type}", should be one of: ${validTypes.join(", ")}`,
              context: { url: urlElement.loc, field: "video.price.type", value: price.type }
            });
          }
          return {
            price: String(priceValue),
            currency: price.currency,
            type: price.type
          };
        }).filter((p) => p !== null);
        if (validPrices.length > 0) {
          videoObj.price = validPrices;
        }
      }
      if (video.uploader && typeof video.uploader === "object") {
        const uploader = video.uploader;
        if (isValidString(uploader.info) && isValidString(uploader["#text"])) {
          videoObj.uploader = {
            uploader: uploader["#text"],
            info: uploader.info
          };
        } else {
          warnings.push({
            type: "validation",
            message: "Video uploader missing required info or name",
            context: { url: urlElement.loc, field: "video.uploader" }
          });
        }
      }
      if (video.tag) {
        const tags = Array.isArray(video.tag) ? video.tag : [video.tag];
        const validTags = tags.filter(isValidString);
        if (validTags.length > 0) {
          videoObj.tag = validTags;
        }
      }
      return videoObj;
    }).filter((video) => video !== null);
    if (validVideos.length > 0) {
      urlObj.videos = validVideos;
    }
  }
  if (urlElement.link) {
    const links = Array.isArray(urlElement.link) ? urlElement.link : [urlElement.link];
    const alternatives = links.map((link) => {
      if (link.rel === "alternate" && isValidString(link.hreflang) && isValidString(link.href)) {
        return {
          hreflang: link.hreflang,
          href: link.href
        };
      } else {
        warnings.push({
          type: "validation",
          message: 'Alternative link missing required rel="alternate", hreflang, or href',
          context: { url: urlElement.loc, field: "link" }
        });
        return null;
      }
    }).filter((alt) => alt !== null);
    if (alternatives.length > 0) {
      urlObj.alternatives = alternatives;
    }
  }
  if (urlElement.news && typeof urlElement.news === "object") {
    const news = urlElement.news;
    if (isValidString(news.title) && isValidString(news.publication_date) && news.publication && isValidString(news.publication.name) && isValidString(news.publication.language)) {
      urlObj.news = {
        title: news.title,
        publication_date: news.publication_date,
        publication: {
          name: news.publication.name,
          language: news.publication.language
        }
      };
    } else {
      warnings.push({
        type: "validation",
        message: "News entry missing required fields (title, publication_date, publication.name, publication.language)",
        context: { url: urlElement.loc, field: "news" }
      });
    }
  }
  return Object.fromEntries(
    Object.entries(urlObj).filter(
      ([_, value]) => value != null && (!Array.isArray(value) || value.length > 0)
    )
  );
}
async function parseSitemapXml(xml) {
  const warnings = [];
  if (!xml) {
    throw new Error("Empty XML input provided");
  }
  const { XMLParser } = await import('fast-xml-parser');
  const parser = new XMLParser({
    isArray: (tagName) => ["url", "image", "video", "link", "tag", "price"].includes(tagName),
    removeNSPrefix: true,
    parseAttributeValue: false,
    ignoreAttributes: false,
    attributeNamePrefix: "",
    trimValues: true
  });
  try {
    const parsed = parser.parse(xml);
    if (!parsed?.urlset) {
      throw new Error("XML does not contain a valid urlset element");
    }
    if (!parsed.urlset.url) {
      throw new Error("Sitemap contains no URL entries");
    }
    const urls = Array.isArray(parsed.urlset.url) ? parsed.urlset.url : [parsed.urlset.url];
    const validUrls = urls.map((url) => extractUrlFromParsedElement(url, warnings)).filter((url) => url !== null);
    if (validUrls.length === 0 && urls.length > 0) {
      warnings.push({
        type: "validation",
        message: "No valid URLs found in sitemap after validation"
      });
    }
    return { urls: validUrls, warnings };
  } catch (error) {
    if (error instanceof Error && (error.message === "Empty XML input provided" || error.message === "XML does not contain a valid urlset element" || error.message === "Sitemap contains no URL entries")) {
      throw error;
    }
    throw new Error(`Failed to parse XML: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function tryFetchWithFallback(url, options, event) {
  const isExternalUrl = !url.startsWith("/");
  if (isExternalUrl) {
    const strategies = [
      // Strategy 1: Use globalThis.$fetch (original approach)
      () => globalThis.$fetch(url, options),
      // Strategy 2: If event is available, try using event context even for external URLs
      event ? () => event.$fetch(url, options) : null,
      // Strategy 3: Use native fetch as last resort
      () => $fetch(url, options)
    ].filter(Boolean);
    let lastError = null;
    for (const strategy of strategies) {
      try {
        return await strategy();
      } catch (error) {
        lastError = error;
        continue;
      }
    }
    throw lastError;
  }
  const fetchContainer = url.startsWith("/") && event ? event : globalThis;
  return await fetchContainer.$fetch(url, options);
}
async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const isExternalUrl = !url.startsWith("/");
  const timeout = isExternalUrl ? 1e4 : options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  try {
    let isMaybeErrorResponse = false;
    const isXmlRequest = parseURL(url).pathname.endsWith(".xml");
    const mergedHeaders = defu(
      options?.headers,
      {
        Accept: isXmlRequest ? "text/xml" : "application/json"
      },
      event ? { host: getRequestHost(event, { xForwardedHost: true }) } : {}
    );
    const fetchOptions = {
      ...options,
      responseType: isXmlRequest ? "text" : "json",
      signal: timeoutController.signal,
      headers: mergedHeaders,
      // Use ofetch's built-in retry for external sources
      ...isExternalUrl && {
        retry: 2,
        retryDelay: 200
      },
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isMaybeErrorResponse = true;
      }
    };
    const res = await tryFetchWithFallback(url, fetchOptions, event);
    const timeTakenMs = Date.now() - start;
    if (isMaybeErrorResponse) {
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    let urls = [];
    if (typeof res === "object") {
      urls = res.urls || res;
    } else if (typeof res === "string" && parseURL(url).pathname.endsWith(".xml")) {
      const result = await parseSitemapXml(res);
      urls = result.urls;
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (isExternalUrl) {
      const errorInfo = {
        url,
        timeout,
        error: error.message,
        statusCode: error.response?.status,
        statusText: error.response?.statusText,
        method: options?.method || "GET"
      };
      logger.error("Failed to fetch external source.", errorInfo);
    } else {
      logger.error("Failed to fetch source.", { url, error: error.message });
    }
    return {
      ...input,
      context,
      urls: [],
      error: error.message,
      _isFailure: true
      // Mark as failure to prevent caching
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
async function globalSitemapSources() {
  const m = await import('../virtual/global-sources.mjs');
  return [...m.sources];
}
async function childSitemapSources(definition) {
  if (!definition?._hasSourceChunk)
    return [];
  const m = await import('../virtual/child-sources.mjs');
  return [...m.sources[definition.sitemapName] || []];
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function sortInPlace(urls) {
  urls.sort((a, b) => {
    const aLoc = typeof a === "string" ? a : a.loc;
    const bLoc = typeof b === "string" ? b : b.loc;
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments !== bSegments) {
      return aSegments - bSegments;
    }
    return aLoc.localeCompare(bLoc, void 0, { numeric: true });
  });
  return urls;
}

function parseChunkInfo(sitemapName, sitemaps, defaultChunkSize) {
  defaultChunkSize = defaultChunkSize || 1e3;
  if (typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName))) {
    return {
      isChunked: true,
      baseSitemapName: "sitemap",
      chunkIndex: Number(sitemapName),
      chunkSize: defaultChunkSize
    };
  }
  if (sitemapName.includes("-")) {
    const parts = sitemapName.split("-");
    const lastPart = parts.pop();
    if (!Number.isNaN(Number(lastPart))) {
      const baseSitemapName = parts.join("-");
      const baseSitemap = sitemaps[baseSitemapName];
      if (baseSitemap && (baseSitemap.chunks || baseSitemap._isChunking)) {
        const chunkSize = typeof baseSitemap.chunks === "number" ? baseSitemap.chunks : baseSitemap.chunkSize || defaultChunkSize;
        return {
          isChunked: true,
          baseSitemapName,
          chunkIndex: Number(lastPart),
          chunkSize
        };
      }
    }
  }
  return {
    isChunked: false,
    baseSitemapName: sitemapName,
    chunkIndex: void 0,
    chunkSize: defaultChunkSize
  };
}
function getSitemapConfig(sitemapName, sitemaps, defaultChunkSize = 1e3) {
  const chunkInfo = parseChunkInfo(sitemapName, sitemaps, defaultChunkSize);
  if (chunkInfo.isChunked) {
    if (chunkInfo.baseSitemapName === "sitemap" && typeof sitemaps.chunks !== "undefined") {
      return {
        ...sitemaps.chunks,
        sitemapName,
        _isChunking: true,
        _chunkSize: chunkInfo.chunkSize
      };
    }
    const baseSitemap = sitemaps[chunkInfo.baseSitemapName];
    if (baseSitemap) {
      return {
        ...baseSitemap,
        sitemapName,
        // Use the full name with chunk index
        _isChunking: true,
        _chunkSize: chunkInfo.chunkSize
      };
    }
  }
  return sitemaps[sitemapName];
}
function sliceUrlsForChunk(urls, sitemapName, sitemaps, defaultChunkSize = 1e3) {
  const chunkInfo = parseChunkInfo(sitemapName, sitemaps, defaultChunkSize);
  if (chunkInfo.isChunked && chunkInfo.chunkIndex !== void 0) {
    const startIndex = chunkInfo.chunkIndex * chunkInfo.chunkSize;
    const endIndex = (chunkInfo.chunkIndex + 1) * chunkInfo.chunkSize;
    return urls.slice(startIndex, endIndex);
  }
  return urls;
}

function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return xmlEscape(String(value));
}
const yesNo = (v) => v === "yes" || v === true ? "yes" : "no";
const URLSET_OPENING_TAG = '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
function buildUrlXml(url, NL, I1, I2, I3, I4) {
  let xml = `${I1}<url>${NL}`;
  if (url.loc) xml += `${I2}<loc>${xmlEscape(url.loc)}</loc>${NL}`;
  if (url.lastmod) xml += `${I2}<lastmod>${url.lastmod}</lastmod>${NL}`;
  if (url.changefreq) xml += `${I2}<changefreq>${url.changefreq}</changefreq>${NL}`;
  if (url.priority !== void 0) {
    const p = typeof url.priority === "number" ? url.priority : Number.parseFloat(url.priority);
    xml += `${I2}<priority>${p.toFixed(1)}</priority>${NL}`;
  }
  if (url.alternatives) {
    for (const alt of url.alternatives) {
      let attrs = "";
      for (const [k, v] of Object.entries(alt)) attrs += ` ${k}="${xmlEscape(String(v))}"`;
      xml += `${I2}<xhtml:link rel="alternate"${attrs} />${NL}`;
    }
  }
  if (url.images) {
    for (const img of url.images) {
      xml += `${I2}<image:image>${NL}${I3}<image:loc>${xmlEscape(img.loc)}</image:loc>${NL}`;
      if (img.title) xml += `${I3}<image:title>${xmlEscape(img.title)}</image:title>${NL}`;
      if (img.caption) xml += `${I3}<image:caption>${xmlEscape(img.caption)}</image:caption>${NL}`;
      if (img.geo_location) xml += `${I3}<image:geo_location>${xmlEscape(img.geo_location)}</image:geo_location>${NL}`;
      if (img.license) xml += `${I3}<image:license>${xmlEscape(img.license)}</image:license>${NL}`;
      xml += `${I2}</image:image>${NL}`;
    }
  }
  if (url.videos) {
    for (const video of url.videos) {
      xml += `${I2}<video:video>${NL}${I3}<video:title>${xmlEscape(video.title)}</video:title>${NL}`;
      if (video.thumbnail_loc) xml += `${I3}<video:thumbnail_loc>${xmlEscape(video.thumbnail_loc)}</video:thumbnail_loc>${NL}`;
      xml += `${I3}<video:description>${xmlEscape(video.description)}</video:description>${NL}`;
      if (video.content_loc) xml += `${I3}<video:content_loc>${xmlEscape(video.content_loc)}</video:content_loc>${NL}`;
      if (video.player_loc) xml += `${I3}<video:player_loc>${xmlEscape(video.player_loc)}</video:player_loc>${NL}`;
      if (video.duration !== void 0) xml += `${I3}<video:duration>${video.duration}</video:duration>${NL}`;
      if (video.expiration_date) xml += `${I3}<video:expiration_date>${video.expiration_date}</video:expiration_date>${NL}`;
      if (video.rating !== void 0) xml += `${I3}<video:rating>${video.rating}</video:rating>${NL}`;
      if (video.view_count !== void 0) xml += `${I3}<video:view_count>${video.view_count}</video:view_count>${NL}`;
      if (video.publication_date) xml += `${I3}<video:publication_date>${video.publication_date}</video:publication_date>${NL}`;
      if (video.family_friendly !== void 0) xml += `${I3}<video:family_friendly>${yesNo(video.family_friendly)}</video:family_friendly>${NL}`;
      if (video.restriction) xml += `${I3}<video:restriction relationship="${video.restriction.relationship || "allow"}">${xmlEscape(video.restriction.restriction)}</video:restriction>${NL}`;
      if (video.platform) xml += `${I3}<video:platform relationship="${video.platform.relationship || "allow"}">${xmlEscape(video.platform.platform)}</video:platform>${NL}`;
      if (video.requires_subscription !== void 0) xml += `${I3}<video:requires_subscription>${yesNo(video.requires_subscription)}</video:requires_subscription>${NL}`;
      if (video.price) {
        for (const price of video.price) {
          const c = price.currency ? ` currency="${price.currency}"` : "";
          const t = price.type ? ` type="${price.type}"` : "";
          xml += `${I3}<video:price${c}${t}>${xmlEscape(String(price.price ?? ""))}</video:price>${NL}`;
        }
      }
      if (video.uploader) {
        const info = video.uploader.info ? ` info="${xmlEscape(video.uploader.info)}"` : "";
        xml += `${I3}<video:uploader${info}>${xmlEscape(video.uploader.uploader)}</video:uploader>${NL}`;
      }
      if (video.live !== void 0) xml += `${I3}<video:live>${yesNo(video.live)}</video:live>${NL}`;
      if (video.tag) {
        const tags = Array.isArray(video.tag) ? video.tag : [video.tag];
        for (const t of tags) xml += `${I3}<video:tag>${xmlEscape(t)}</video:tag>${NL}`;
      }
      if (video.category) xml += `${I3}<video:category>${xmlEscape(video.category)}</video:category>${NL}`;
      if (video.gallery_loc) xml += `${I3}<video:gallery_loc>${xmlEscape(video.gallery_loc)}</video:gallery_loc>${NL}`;
      xml += `${I2}</video:video>${NL}`;
    }
  }
  if (url.news) {
    xml += `${I2}<news:news>${NL}${I3}<news:publication>${NL}`;
    xml += `${I4}<news:name>${xmlEscape(url.news.publication.name)}</news:name>${NL}`;
    xml += `${I4}<news:language>${xmlEscape(url.news.publication.language)}</news:language>${NL}`;
    xml += `${I3}</news:publication>${NL}`;
    if (url.news.title) xml += `${I3}<news:title>${xmlEscape(url.news.title)}</news:title>${NL}`;
    if (url.news.publication_date) xml += `${I3}<news:publication_date>${url.news.publication_date}</news:publication_date>${NL}`;
    xml += `${I2}</news:news>${NL}`;
  }
  xml += `${I1}</url>`;
  return xml;
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }, errorInfo) {
  let xslHref = xsl ? resolvers.relativeBaseUrlResolver(xsl) : false;
  if (xslHref && errorInfo?.messages.length) {
    xslHref = withQuery(xslHref, {
      errors: "true",
      error_messages: errorInfo.messages,
      error_urls: errorInfo.urls
    });
  }
  const NL = minify ? "" : "\n";
  const I1 = minify ? "" : "    ";
  const I2 = minify ? "" : "        ";
  const I3 = minify ? "" : "            ";
  const I4 = minify ? "" : "                ";
  let xml = xslHref ? `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${escapeValueForXml(xslHref)}"?>${NL}` : `<?xml version="1.0" encoding="UTF-8"?>${NL}`;
  xml += URLSET_OPENING_TAG + NL;
  for (const url of urls) {
    xml += buildUrlXml(url, NL, I1, I2, I3, I4) + NL;
  }
  xml += "</urlset>";
  if (credits) {
    xml += `${NL}<!-- XML Sitemap generated by @nuxtjs/sitemap v${version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`;
  }
  return xml;
}

function getPageKey(pathWithoutPrefix) {
  const stripped = pathWithoutPrefix[0] === "/" ? pathWithoutPrefix.slice(1) : pathWithoutPrefix;
  return stripped.endsWith("/index") ? stripped.slice(0, -6) || "index" : stripped || "index";
}
function resolveSitemapEntries(sitemap, urls, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = urls.map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    const localeByCode = new Map(autoI18n.locales.map((l) => [l.code, l]));
    const isPrefixStrategy = autoI18n.strategy === "prefix";
    const isPrefixExceptOrAndDefault = autoI18n.strategy === "prefix_and_default" || autoI18n.strategy === "prefix_except_default";
    const xDefaultAndLocales = [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales];
    const defaultLocale = autoI18n.defaultLocale;
    const hasPages = !!autoI18n.pages;
    const hasDifferentDomains = !!autoI18n.differentDomains;
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = localeByCode.get(localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path?.search || ""}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = (withoutPrefixPaths[e._pathWithoutPrefix] || []).map((u) => {
          const entries = [];
          if (u._locale.code === defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (hasDifferentDomains) {
          const defLocale = localeByCode.get(defaultLocale);
          e.alternatives = [
            {
              ...defLocale,
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          const pageKey = hasPages ? getPageKey(e._pathWithoutPrefix) : "";
          const pageMappings = hasPages ? autoI18n.pages[pageKey] : void 0;
          const pathSearch = e._path?.search || "";
          const pathWithoutPrefix = e._pathWithoutPrefix;
          for (const l of autoI18n.locales) {
            let loc = pathWithoutPrefix;
            if (hasPages && pageMappings && pageMappings[l.code] !== void 0) {
              const customPath = pageMappings[l.code];
              if (customPath === false)
                continue;
              if (typeof customPath === "string")
                loc = customPath[0] === "/" ? customPath : `/${customPath}`;
            } else if (!hasDifferentDomains && !(isPrefixExceptOrAndDefault && l.code === defaultLocale)) {
              loc = joinURL(`/${l.code}`, pathWithoutPrefix);
            }
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const alternatives = [];
            for (const locale of xDefaultAndLocales) {
              const code = locale.code === "x-default" ? defaultLocale : locale.code;
              const isDefault = locale.code === "x-default" || locale.code === defaultLocale;
              let href = pathWithoutPrefix;
              if (hasPages && pageMappings && pageMappings[code] !== void 0) {
                const customPath = pageMappings[code];
                if (customPath === false)
                  continue;
                if (typeof customPath === "string")
                  href = customPath[0] === "/" ? customPath : `/${customPath}`;
              } else if (isPrefixStrategy) {
                href = joinURL("/", code, pathWithoutPrefix);
              } else if (isPrefixExceptOrAndDefault && !isDefault) {
                href = joinURL("/", code, pathWithoutPrefix);
              }
              if (!filterPath(href))
                continue;
              alternatives.push({
                hreflang: locale._hreflang,
                href
              });
            }
            const { _index: _, ...rest } = e;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...rest,
              _key: `${_sitemap || ""}${loc || "/"}${pathSearch}`,
              _locale: l,
              loc,
              alternatives
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path?.search || ""}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const chunkSize = defaultSitemapsChunkSize || void 0;
  const chunkInfo = parseChunkInfo(sitemap.sitemapName, sitemaps, chunkSize);
  function maybeSort(urls2) {
    return sortEntries ? sortInPlace(urls2) : urls2;
  }
  function maybeSlice(urls2) {
    return sliceUrlsForChunk(urls2, sitemap.sitemapName, sitemaps, chunkSize);
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => e.language === sitemap.sitemapName || e.code === sitemap.sitemapName)?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  let effectiveSitemap = sitemap;
  const baseSitemapName = chunkInfo.baseSitemapName;
  if (chunkInfo.isChunked && baseSitemapName !== sitemap.sitemapName && sitemaps[baseSitemapName]) {
    effectiveSitemap = sitemaps[baseSitemapName];
  }
  let sourcesInput = effectiveSitemap.includeAppSources ? [...await globalSitemapSources(), ...await childSitemapSources(effectiveSitemap)] : await childSitemapSources(effectiveSitemap);
  if (nitro && resolvers.event) {
    const ctx = {
      event: resolvers.event,
      sitemapName: baseSitemapName,
      sources: sourcesInput
    };
    await nitro.hooks.callHook("sitemap:sources", ctx);
    sourcesInput = ctx.sources;
  }
  const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
  const failedSources = sources.filter((source) => source.error && source._isFailure).map((source) => ({
    url: typeof source.fetch === "string" ? source.fetch : source.fetch?.[0] || "unknown",
    error: source.error || "Unknown error"
  }));
  const resolvedCtx = {
    urls: sources.flatMap((s) => s.urls),
    sitemapName: sitemap.sitemapName,
    event: resolvers.event
  };
  await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
  const filteredUrls = enhancedUrls.filter((e) => {
    if (e._sitemap === false)
      return false;
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName) {
      if (sitemap._isChunking)
        return sitemap.sitemapName.startsWith(e._sitemap + "-");
      return e._sitemap === sitemap.sitemapName;
    }
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  const urls = maybeSlice(sortedUrls);
  return { urls, failedSources };
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || true,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function buildSitemapXml(event, definition, resolvers, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  const { urls: sitemapUrls, failedSources } = await buildSitemapUrls(definition, resolvers, runtimeConfig, nitro);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  let validCount = 0;
  for (let i = 0; i < sitemapUrls.length; i++) {
    const u = sitemapUrls[i];
    const path = u._path?.pathname || u.loc;
    if (!getPathRobotConfig(event, { path, skipSiteIndexable: true }).indexable)
      continue;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      continue;
    if (typeof routeRules.robots !== "undefined" && !routeRules.robots)
      continue;
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      continue;
    sitemapUrls[validCount++] = routeRules.sitemap ? defu(u, routeRules.sitemap) : u;
  }
  sitemapUrls.length = validCount;
  const locSize = sitemapUrls.length;
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName,
    event
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  if (resolvedCtx.urls.length !== locSize) {
    resolvedCtx.urls = resolvedCtx.urls.map((e) => preNormalizeEntry(e, resolvers));
  }
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortInPlace(urls2) : urls2;
  const defaults = definition.defaults || {};
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, defaults, resolvers));
  const urls = maybeSort(mergeOnKey(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, defaults, resolvers)));
  if (definition._isChunking && definition.sitemapName.includes("-")) {
    const parts = definition.sitemapName.split("-");
    const lastPart = parts.pop();
    if (!Number.isNaN(Number(lastPart))) {
      const chunkIndex = Number(lastPart);
      const baseSitemapName = parts.join("-");
      if (urls.length === 0 && chunkIndex > 0) {
        throw createError$1({
          statusCode: 404,
          message: `Sitemap chunk ${chunkIndex} for "${baseSitemapName}" does not exist.`
        });
      }
    }
  }
  const errorInfo = failedSources.length > 0 ? {
    messages: failedSources.map((f) => f.error),
    urls: failedSources.map((f) => f.url)
  } : void 0;
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig, errorInfo);
  const ctx = { sitemap, sitemapName, event };
  await nitro.hooks.callHook("sitemap:output", ctx);
  return ctx.sitemap;
}
const buildSitemapXmlCached = defineCachedFunction(
  buildSitemapXml,
  {
    name: "sitemap:xml",
    group: "sitemap",
    maxAge: 60 * 10,
    // Default 10 minutes
    base: "sitemap",
    // Use the sitemap storage
    getKey: (event, definition) => {
      const host = getHeader(event, "host") || getHeader(event, "x-forwarded-host") || "";
      const proto = getHeader(event, "x-forwarded-proto") || "https";
      const sitemapName = definition.sitemapName || "default";
      return `${sitemapName}-${proto}-${host}`;
    },
    swr: true
    // Enable stale-while-revalidate
  }
);
async function createSitemap(event, definition, runtimeConfig) {
  const resolvers = useNitroUrlResolvers(event);
  const shouldCache = typeof runtimeConfig.cacheMaxAgeSeconds === "number" && runtimeConfig.cacheMaxAgeSeconds > 0;
  const xml = shouldCache ? await buildSitemapXmlCached(event, definition, resolvers, runtimeConfig) : await buildSitemapXml(event, definition, resolvers, runtimeConfig);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds) {
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, s-maxage=${runtimeConfig.cacheMaxAgeSeconds}, stale-while-revalidate=3600`);
    const now = /* @__PURE__ */ new Date();
    setHeader(event, "X-Sitemap-Generated", now.toISOString());
    setHeader(event, "X-Sitemap-Cache-Duration", `${runtimeConfig.cacheMaxAgeSeconds}s`);
    const expiryTime = new Date(now.getTime() + runtimeConfig.cacheMaxAgeSeconds * 1e3);
    setHeader(event, "X-Sitemap-Cache-Expires", expiryTime.toISOString());
    const remainingSeconds = Math.floor((expiryTime.getTime() - now.getTime()) / 1e3);
    setHeader(event, "X-Sitemap-Cache-Remaining", `${remainingSeconds}s`);
  } else {
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  }
  event.context._isSitemap = true;
  return xml;
}

const buildSitemapIndexCached = defineCachedFunction(
  async (event, resolvers, runtimeConfig, nitro) => {
    return buildSitemapIndexInternal(resolvers, runtimeConfig, nitro);
  },
  {
    name: "sitemap:index",
    group: "sitemap",
    maxAge: 60 * 10,
    // 10 minutes default
    base: "sitemap",
    // Use the sitemap storage
    getKey: (event) => {
      const host = getHeader(event, "host") || getHeader(event, "x-forwarded-host") || "";
      const proto = getHeader(event, "x-forwarded-proto") || "https";
      return `sitemap-index-${proto}-${host}`;
    },
    swr: true
    // Enable stale-while-revalidate
  }
);
async function buildSitemapIndexInternal(resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoLastmod,
    // chunking
    defaultSitemapsChunkSize,
    autoI18n,
    isI18nMapped,
    sortEntries,
    sitemapsPathPrefix
  } = runtimeConfig;
  if (!sitemaps)
    throw new Error("Attempting to build a sitemap index without required `sitemaps` configuration.");
  function maybeSort(urls) {
    return sortEntries ? sortInPlace(urls) : urls;
  }
  const chunks = {};
  const allFailedSources = [];
  for (const sitemapName in sitemaps) {
    if (sitemapName === "index" || sitemapName === "chunks") continue;
    const sitemapConfig = sitemaps[sitemapName];
    if (sitemapConfig.chunks || sitemapConfig._isChunking) {
      sitemapConfig._isChunking = true;
      sitemapConfig._chunkSize = typeof sitemapConfig.chunks === "number" ? sitemapConfig.chunks : sitemapConfig.chunkSize || defaultSitemapsChunkSize || 1e3;
    } else {
      chunks[sitemapName] = chunks[sitemapName] || { urls: [] };
    }
  }
  if (typeof sitemaps.chunks !== "undefined") {
    const sitemap = sitemaps.chunks;
    let sourcesInput = await globalSitemapSources();
    if (nitro && resolvers.event) {
      const ctx = {
        event: resolvers.event,
        sitemapName: sitemap.sitemapName,
        sources: sourcesInput
      };
      await nitro.hooks.callHook("sitemap:sources", ctx);
      sourcesInput = ctx.sources;
    }
    const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
    const failedSources = sources.filter((source) => source.error && source._isFailure).map((source) => ({
      url: typeof source.fetch === "string" ? source.fetch : source.fetch?.[0] || "unknown",
      error: source.error || "Unknown error"
    }));
    allFailedSources.push(...failedSources);
    const resolvedCtx = {
      urls: sources.flatMap((s) => s.urls),
      sitemapName: sitemap.sitemapName,
      event: resolvers.event
    };
    await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
    const normalisedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
    const enhancedUrls = normalisedUrls.map((e) => defu(e, sitemap.defaults));
    const sortedUrls = maybeSort(enhancedUrls);
    sortedUrls.forEach((url, i) => {
      const chunkIndex = Math.floor(i / defaultSitemapsChunkSize);
      chunks[chunkIndex] = chunks[chunkIndex] || { urls: [] };
      chunks[chunkIndex].urls.push(url);
    });
  }
  const entries = [];
  for (const name in chunks) {
    const sitemap = chunks[name];
    const entry = {
      _sitemapName: name,
      sitemap: resolvers.canonicalUrlResolver(joinURL(sitemapsPathPrefix || "", `/${name}.xml`))
    };
    let lastmod = sitemap.urls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
    if (!lastmod && autoLastmod)
      lastmod = /* @__PURE__ */ new Date();
    if (lastmod)
      entry.lastmod = normaliseDate(lastmod);
    entries.push(entry);
  }
  for (const sitemapName in sitemaps) {
    const sitemapConfig = sitemaps[sitemapName];
    if (sitemapName !== "index" && sitemapConfig._isChunking) {
      const chunkSize = sitemapConfig._chunkSize || defaultSitemapsChunkSize || 1e3;
      let sourcesInput = sitemapConfig.includeAppSources ? [...await globalSitemapSources(), ...await childSitemapSources(sitemapConfig)] : await childSitemapSources(sitemapConfig);
      if (nitro && resolvers.event) {
        const ctx = {
          event: resolvers.event,
          sitemapName: sitemapConfig.sitemapName,
          sources: sourcesInput
        };
        await nitro.hooks.callHook("sitemap:sources", ctx);
        sourcesInput = ctx.sources;
      }
      const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
      const failedSources = sources.filter((source) => source.error && source._isFailure).map((source) => ({
        url: typeof source.fetch === "string" ? source.fetch : source.fetch?.[0] || "unknown",
        error: source.error || "Unknown error"
      }));
      allFailedSources.push(...failedSources);
      const resolvedCtx = {
        urls: sources.flatMap((s) => s.urls),
        sitemapName: sitemapConfig.sitemapName,
        event: resolvers.event
      };
      await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
      const normalisedUrls = resolveSitemapEntries(sitemapConfig, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
      const totalUrls = normalisedUrls.length;
      const chunkCount = Math.ceil(totalUrls / chunkSize);
      sitemapConfig._chunkCount = chunkCount;
      for (let i = 0; i < chunkCount; i++) {
        const chunkName = `${sitemapName}-${i}`;
        const entry = {
          _sitemapName: chunkName,
          sitemap: resolvers.canonicalUrlResolver(joinURL(sitemapsPathPrefix || "", `/${chunkName}.xml`))
        };
        const chunkUrls = normalisedUrls.slice(i * chunkSize, (i + 1) * chunkSize);
        let lastmod = chunkUrls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
        if (!lastmod && autoLastmod)
          lastmod = /* @__PURE__ */ new Date();
        if (lastmod)
          entry.lastmod = normaliseDate(lastmod);
        entries.push(entry);
      }
    }
  }
  if (sitemaps.index) {
    entries.push(...sitemaps.index.sitemaps.map((entry) => {
      return typeof entry === "string" ? { sitemap: entry } : entry;
    }));
  }
  return { entries, failedSources: allFailedSources };
}
function urlsToIndexXml(sitemaps, resolvers, { version, xsl, credits, minify }, errorInfo) {
  const sitemapXml = sitemaps.map((e) => [
    "    <sitemap>",
    `        <loc>${escapeValueForXml(e.sitemap)}</loc>`,
    // lastmod is optional
    e.lastmod ? `        <lastmod>${escapeValueForXml(e.lastmod)}</lastmod>` : false,
    "    </sitemap>"
  ].filter(Boolean).join("\n")).join("\n");
  const xmlParts = [
    '<?xml version="1.0" encoding="UTF-8"?>'
  ];
  if (xsl) {
    let relativeBaseUrl = resolvers.relativeBaseUrlResolver?.(xsl) ?? xsl;
    if (errorInfo && errorInfo.messages.length > 0) {
      relativeBaseUrl = withQuery(relativeBaseUrl, {
        errors: "true",
        error_messages: errorInfo.messages,
        error_urls: errorInfo.urls
      });
    }
    xmlParts.push(`<?xml-stylesheet type="text/xsl" href="${escapeValueForXml(relativeBaseUrl)}"?>`);
  }
  xmlParts.push(
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapXml,
    "</sitemapindex>"
  );
  if (credits) {
    xmlParts.push(`<!-- XML Sitemap Index generated by @nuxtjs/sitemap v${version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  }
  return minify ? xmlParts.join("").replace(/(?<!<[^>]*)\s(?![^<]*>)/g, "") : xmlParts.join("\n");
}
async function buildSitemapIndex(resolvers, runtimeConfig, nitro) {
  if (typeof runtimeConfig.cacheMaxAgeSeconds === "number" && runtimeConfig.cacheMaxAgeSeconds > 0 && resolvers.event) {
    return buildSitemapIndexCached(resolvers.event, resolvers, runtimeConfig, nitro);
  }
  return buildSitemapIndexInternal(resolvers, runtimeConfig, nitro);
}

async function sitemapXmlEventHandler(e) {
  const runtimeConfig = useSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps)
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
}
async function sitemapIndexXmlEventHandler(e) {
  const runtimeConfig = useSitemapRuntimeConfig();
  const nitro = useNitroApp();
  const resolvers = useNitroUrlResolvers(e);
  const { entries: sitemaps, failedSources } = await buildSitemapIndex(resolvers, runtimeConfig, nitro);
  const indexResolvedCtx = { sitemaps, event: e };
  await nitro.hooks.callHook("sitemap:index-resolved", indexResolvedCtx);
  const errorInfo = failedSources.length > 0 ? { messages: failedSources.map((f) => f.error), urls: failedSources.map((f) => f.url) } : void 0;
  const output = urlsToIndexXml(indexResolvedCtx.sitemaps, resolvers, runtimeConfig, errorInfo);
  const ctx = { sitemap: output, sitemapName: "sitemap", event: e };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds) {
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, s-maxage=${runtimeConfig.cacheMaxAgeSeconds}, stale-while-revalidate=3600`);
    const now = /* @__PURE__ */ new Date();
    setHeader(e, "X-Sitemap-Generated", now.toISOString());
    setHeader(e, "X-Sitemap-Cache-Duration", `${runtimeConfig.cacheMaxAgeSeconds}s`);
    const expiryTime = new Date(now.getTime() + runtimeConfig.cacheMaxAgeSeconds * 1e3);
    setHeader(e, "X-Sitemap-Cache-Expires", expiryTime.toISOString());
    const remainingSeconds = Math.floor((expiryTime.getTime() - now.getTime()) / 1e3);
    setHeader(e, "X-Sitemap-Cache-Remaining", `${remainingSeconds}s`);
  } else {
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  }
  return ctx.sitemap;
}
async function sitemapChildXmlEventHandler(e) {
  if (!e.path.endsWith(".xml"))
    return;
  const runtimeConfig = useSitemapRuntimeConfig(e);
  const { sitemaps } = runtimeConfig;
  let sitemapName = getRouterParam(e, "sitemap");
  if (!sitemapName) {
    const path = e.path;
    const match = path.match(/(?:\/__sitemap__\/)?([^/]+)\.xml$/);
    if (match)
      sitemapName = match[1];
  }
  if (!sitemapName)
    throw createError$1({ statusCode: 400, message: "Invalid sitemap request" });
  sitemapName = withoutLeadingSlash(withoutTrailingSlash(sitemapName.replace(".xml", "").replace("__sitemap__/", "").replace(runtimeConfig.sitemapsPathPrefix || "", "")));
  const chunkInfo = parseChunkInfo(sitemapName, sitemaps, runtimeConfig.defaultSitemapsChunkSize);
  const isAutoChunked = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName));
  const sitemapExists = sitemapName in sitemaps || chunkInfo.baseSitemapName in sitemaps || isAutoChunked;
  if (!sitemapExists)
    throw createError$1({ statusCode: 404, message: `Sitemap "${sitemapName}" not found.` });
  if (chunkInfo.isChunked && chunkInfo.chunkIndex !== void 0) {
    const baseSitemap = sitemaps[chunkInfo.baseSitemapName];
    if (baseSitemap && !baseSitemap.chunks && !baseSitemap._isChunking)
      throw createError$1({ statusCode: 404, message: `Sitemap "${chunkInfo.baseSitemapName}" does not support chunking.` });
    if (baseSitemap?._chunkCount !== void 0 && chunkInfo.chunkIndex >= baseSitemap._chunkCount)
      throw createError$1({ statusCode: 404, message: `Chunk ${chunkInfo.chunkIndex} does not exist for sitemap "${chunkInfo.baseSitemapName}".` });
  }
  const sitemapConfig = getSitemapConfig(sitemapName, sitemaps, runtimeConfig.defaultSitemapsChunkSize || void 0);
  return createSitemap(e, sitemapConfig, runtimeConfig);
}

const _siIWM0 = defineEventHandler(sitemapXmlEventHandler);

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
const _getMessagesCached = cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessagesCached;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError$1({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError$1({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
const _messagesHandlerCached = defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _n8eiy7 = _messagesHandlerCached;

const _YsUuEi = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection");
  setHeader(event, "Content-Type", "text/plain");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('../build/database.compressed.mjs').then((m) => m[collection]);
});

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  let binaryData;
  if (typeof Buffer !== "undefined") {
    const buffer = Buffer.from(base64Str, "base64");
    binaryData = Uint8Array.from(buffer);
  } else if (typeof atob !== "undefined") {
    binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  } else {
    throw new TypeError("No base64 decoding method available");
  }
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const text = await new Response(decompressedStream).text();
  return JSON.parse(text);
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

class BoundableStatement {
	_statement;
	constructor(rawStmt) {
		this._statement = rawStmt;
	}
	bind(...params) {
		return new BoundStatement(this, params);
	}
}
class BoundStatement {
	#statement;
	#params;
	constructor(statement, params) {
		this.#statement = statement;
		this.#params = params;
	}
	bind(...params) {
		return new BoundStatement(this.#statement, params);
	}
	all() {
		return this.#statement.all(...this.#params);
	}
	run() {
		return this.#statement.run(...this.#params);
	}
	get() {
		return this.#statement.get(...this.#params);
	}
}

function sqliteConnector(opts) {
	let _db;
	const getDB = () => {
		if (_db) {
			return _db;
		}
		if (opts.name === ":memory:") {
			_db = new Database(":memory:");
			return _db;
		}
		const filePath = resolve$2(opts.cwd || ".", opts.path || `.data/${opts.name || "db"}.sqlite3`);
		mkdirSync(dirname$1(filePath), { recursive: true });
		_db = new Database(filePath);
		return _db;
	};
	return {
		name: "sqlite",
		dialect: "sqlite",
		getInstance: () => getDB(),
		exec: (sql) => getDB().exec(sql),
		prepare: (sql) => new StatementWrapper(() => getDB().prepare(sql)),
		dispose: () => {
			_db?.close?.();
			_db = undefined;
		}
	};
}
class StatementWrapper extends BoundableStatement {
	async all(...params) {
		return this._statement().all(...params);
	}
	async run(...params) {
		const res = this._statement().run(...params);
		return {
			success: res.changes > 0,
			...res
		};
	}
	async get(...params) {
		return this._statement().get(...params);
	}
}

let db;
function loadDatabaseAdapter(config) {
  const { database, localDatabase } = config;
  if (!db) {
    if (["nitro-prerender", "nitro-dev"].includes("node-server")) {
      db = sqliteConnector(refineDatabaseConfig(localDatabase));
    } else {
      db = sqliteConnector(refineDatabaseConfig(database));
    }
  }
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = /* @__PURE__ */ new Map();
const integrityCheckPromise = /* @__PURE__ */ new Map();
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity.get(collection) !== false) {
    checkDatabaseIntegrity.set(collection, false);
    if (!integrityCheckPromise.has(collection)) {
      const _integrityCheck = _checkAndImportDatabaseIntegrity(event, collection, checksums[collection], checksumsStructure[collection], config).then((isValid) => {
        checkDatabaseIntegrity.set(collection, !isValid);
      }).catch((error) => {
        console.error("Database integrity check failed", error);
        checkDatabaseIntegrity.set(collection, true);
        integrityCheckPromise.delete(collection);
      });
      integrityCheckPromise.set(collection, _integrityCheck);
    }
  }
  if (integrityCheckPromise.has(collection)) {
    await integrityCheckPromise.get(collection);
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, collection).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: "memory" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  if (config.type === "pglite") {
    return {
      dataDir: config.dataDir,
      // Pass through any other PGlite-specific options
      ...config
    };
  }
  return config;
}

const SQL_COMMANDS = /SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|\$/i;
const SQL_COUNT_REGEX = /COUNT\((DISTINCT )?([a-z_]\w+|\*)\)/i;
const SQL_SELECT_REGEX = /^SELECT (.*) FROM (\w+)( WHERE .*)? ORDER BY (["\w,\s]+) (ASC|DESC)( LIMIT \d+)?( OFFSET \d+)?$/;
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query: Query cannot be empty");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query: SQL comments are not allowed");
  }
  const match = sql.match(SQL_SELECT_REGEX);
  if (!match) {
    throw new Error("Invalid query: Query must be a valid SELECT statement with proper syntax");
  }
  const [_, select, from, where, orderBy, order, limit, offset] = match;
  const columns = select?.trim().split(", ") || [];
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0]?.match(SQL_COUNT_REGEX) && !columns[0]?.match(/^"[a-z_]\w+"$/i)) {
      throw new Error(`Invalid query: Column '${columns[0]}' has invalid format. Expected *, COUNT(), or a quoted column name`);
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query: Multiple columns must be properly quoted and alphanumeric");
  }
  if (from !== `_content_${collection}`) {
    const collection2 = String(from || "").replace(/^_content_/, "");
    throw new Error(`Invalid query: Collection '${collection2}' does not exist`);
  }
  if (where) {
    if (!where.startsWith(" WHERE (") || !where.endsWith(")")) {
      throw new Error("Invalid query: WHERE clause must be properly enclosed in parentheses");
    }
    const noString = cleanupQuery(where, { removeString: true });
    if (noString.match(SQL_COMMANDS)) {
      throw new Error("Invalid query: WHERE clause contains unsafe SQL commands");
    }
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query: ORDER BY clause must contain valid column names followed by ASC or DESC");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query: LIMIT clause must be a positive number");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query: OFFSET clause must be a positive number");
  }
  return true;
}
function cleanupQuery(query, options = { removeString: false }) {
  let inString = false;
  let stringFence = "";
  let result = "";
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const prevChar = query[i - 1];
    const nextChar = query[i + 1];
    if (char === "'" || char === '"') {
      if (!options?.removeString) {
        result += char;
        continue;
      }
      if (inString) {
        if (char !== stringFence || nextChar === stringFence || prevChar === stringFence) {
          continue;
        }
        inString = false;
        stringFence = "";
        continue;
      } else {
        inString = true;
        stringFence = char;
        continue;
      }
    }
    if (!inString) {
      if (char === "-" && nextChar === "-") {
        return result;
      }
      if (char === "/" && nextChar === "*") {
        i += 2;
        while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
          i += 1;
        }
        i += 2;
        continue;
      }
      result += char;
    }
  }
  return result;
}

const _hARSTP = eventHandler(async (event) => {
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection");
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return loadDatabaseAdapter(conf).all(sql);
});

const _Nv36oA = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_en9nuF = () => import('../routes/renderer.mjs');
const _lazy_IhpFf_ = () => import('../routes/__og-image__/font/font.mjs');
const _lazy_3UHQ3_ = () => import('../routes/__og-image__/image/image.mjs');
const _lazy_jSIalE = () => import('../routes/sitemap_index.xml.mjs');
const _lazy_WpWpQx = () => import('../routes/__sitemap__/_sitemap_.xml.mjs');

const handlers = [
  { route: '', handler: _79vV4O, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_en9nuF, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _xwPhkG, lazy: false, middleware: false, method: undefined },
  { route: '/__og-image__/font/**', handler: _lazy_IhpFf_, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _XzNTS3, lazy: false, middleware: true, method: undefined },
  { route: '/__og-image__/image/**', handler: _lazy_3UHQ3_, lazy: true, middleware: false, method: undefined },
  { route: '/__og-image__/static/**', handler: _lazy_3UHQ3_, lazy: true, middleware: false, method: undefined },
  { route: '/robots.txt', handler: _2HI1bj, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _wL89JZ, lazy: false, middleware: true, method: undefined },
  { route: '/__sitemap__/nuxt-content-urls.json', handler: _HCPQOs, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap_index.xml', handler: _lazy_jSIalE, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/**:sitemap', handler: _lazy_WpWpQx, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _VX1CS8, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _siIWM0, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _n8eiy7, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/:collection/sql_dump.txt', handler: _YsUuEi, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/:collection/query', handler: _hARSTP, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _Nv36oA, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_en9nuF, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b$1(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C$1(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { withQuery as $, createHeadCore as A, normaliseFontInput as B, theme as C, withTrailingSlash as D, handleCacheHeaders as E, setHeaders as F, setHeader as G, hash$1 as H, parseURL as I, setResponseHeader as J, proxyRequest as K, sendRedirect as L, resolveContext as M, H3Error as N, sitemapIndexXmlEventHandler as O, sitemapChildXmlEventHandler as P, serialize$1 as Q, defu as R, useSeoMeta as S, headSymbol as T, parseQuery as U, useHead as V, klona as W, defuFn as X, hasProtocol as Y, joinURL as Z, isEqual as _, getResponseStatus as a, withoutTrailingSlash as a0, isScriptProtocol as a1, getContext as a2, sanitizeStatusCode as a3, withLeadingSlash as a4, $fetch$1 as a5, baseURL as a6, createHooks as a7, executeAsync as a8, toRouteMatcher as a9, createRouter$1 as aa, getRequestURL as ab, getCookie as ac, withoutBase as ad, getRequestHeader as ae, createDefu as af, withBase as ag, parsePath as ah, setCookie as ai, deleteCookie as aj, resolveUnrefHeadInput as ak, encodeParam as al, encodePath as am, isEqual$1 as an, pascalCase as ao, decodeHtml as ap, logger$2 as aq, toBase64Image as ar, htmlDecodeQuotes as as, sendError as at, fontCache as au, nodeServer as av, appId as b, buildAssetsURL as c, defineRenderHandler as d, appTeleportTag as e, appTeleportAttrs as f, getResponseStatusText as g, getQuery as h, createError$1 as i, createSSRContext as j, appHead as k, destr as l, getRouteRules as m, getRenderer as n, replaceIslandTeleports as o, publicAssetsURL as p, defineEventHandler as q, renderInlineStyles as r, setSSRError as s, prefixStorage as t, useNitroApp as u, useStorage as v, useNitroOrigin as w, emojiCache as x, useOgImageRuntimeConfig as y, fetchIsland as z };
//# sourceMappingURL=nitro.mjs.map
