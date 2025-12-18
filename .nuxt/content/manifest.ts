export const checksums = {
  "index": "v3.5.0--GKtIuruOc5v6odM9Aoucv7yoFc9K0V5pQTEaRD2R3is",
  "docs": "v3.5.0--quFkNIUZZFAwcn0ok74-KsIERem9u0p5DW-cqEgxrPA",
  "pricing": "v3.5.0--wnIt1a1XoCZg6ky0KqFYWZKtcfAx5Hi2rT-cJUdyfBQ",
  "blog": "v3.5.0--Y1etdP_gPJyLnAPA-R6OXTtYJcGa1HXFvcJtTz6twZI",
  "posts": "v3.5.0--T1f9Z6lBxtlaYr0h3zyERNYd5Hd-UBL_sslgdeO0wVU",
  "changelog": "v3.5.0--Mh2KMIQmN9c-GcsurZte8r6y9ct4ABLLMLnLT_vCW64",
  "versions": "v3.5.0--8U1kRoF-UyCLgtEY4L5Cie4qKP-qTKRdzzKbPn83hms"
}
export const checksumsStructure = {
  "index": "GKtIuruOc5v6odM9Aoucv7yoFc9K0V5pQTEaRD2R3is",
  "docs": "quFkNIUZZFAwcn0ok74-KsIERem9u0p5DW-cqEgxrPA",
  "pricing": "wnIt1a1XoCZg6ky0KqFYWZKtcfAx5Hi2rT-cJUdyfBQ",
  "blog": "Y1etdP_gPJyLnAPA-R6OXTtYJcGa1HXFvcJtTz6twZI",
  "posts": "T1f9Z6lBxtlaYr0h3zyERNYd5Hd-UBL_sslgdeO0wVU",
  "changelog": "Mh2KMIQmN9c-GcsurZte8r6y9ct4ABLLMLnLT_vCW64",
  "versions": "8U1kRoF-UyCLgtEY4L5Cie4qKP-qTKRdzzKbPn83hms"
}

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