export const checksums = {}
export const checksumsStructure = {}

export const tables = {
  "index": "_content_index",
  "docs": "_content_docs",
  "pricing": "_content_pricing",
  "blog": "_content_blog",
  "posts": "_content_posts",
  "changelog": "_content_changelog",
  "versions": "_content_versions",
  "info": "_content_info"
}

export default {
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
}