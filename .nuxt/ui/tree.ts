const color = [
  "primary",
  "error",
  "warning",
  "success",
  "info",
  "neutral"
] as const

const size = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const

export default {
  "slots": {
    "root": "relative isolate",
    "item": "w-full",
    "listWithChildren": "border-s border-default",
    "itemWithChildren": "ps-1.5 -ms-px",
    "link": "relative group w-full flex items-center text-sm select-none before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 relative",
    "linkLabel": "truncate",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingIcon": "shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180"
  },
  "variants": {
    "virtualize": {
      "true": {
        "root": "overflow-y-auto"
      }
    },
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-primary"
      },
      "error": {
        "link": "focus-visible:before:ring-error"
      },
      "warning": {
        "link": "focus-visible:before:ring-warning"
      },
      "success": {
        "link": "focus-visible:before:ring-success"
      },
      "info": {
        "link": "focus-visible:before:ring-info"
      },
      "neutral": {
        "link": "focus-visible:before:ring-inverted"
      }
    },
    "size": {
      "xs": {
        "listWithChildren": "ms-4",
        "link": "px-2 py-1 text-xs gap-1",
        "linkLeadingIcon": "size-4",
        "linkTrailingIcon": "size-4"
      },
      "sm": {
        "listWithChildren": "ms-4.5",
        "link": "px-2.5 py-1.5 text-xs gap-1.5",
        "linkLeadingIcon": "size-4",
        "linkTrailingIcon": "size-4"
      },
      "md": {
        "listWithChildren": "ms-5",
        "link": "px-2.5 py-1.5 text-sm gap-1.5",
        "linkLeadingIcon": "size-5",
        "linkTrailingIcon": "size-5"
      },
      "lg": {
        "listWithChildren": "ms-5.5",
        "link": "px-3 py-2 text-sm gap-2",
        "linkLeadingIcon": "size-5",
        "linkTrailingIcon": "size-5"
      },
      "xl": {
        "listWithChildren": "ms-6",
        "link": "px-3 py-2 text-base gap-2",
        "linkLeadingIcon": "size-6",
        "linkTrailingIcon": "size-6"
      }
    },
    "selected": {
      "true": {
        "link": "before:bg-elevated"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-primary"
      }
    },
    {
      "color": "error" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-error"
      }
    },
    {
      "color": "warning" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-warning"
      }
    },
    {
      "color": "success" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-success"
      }
    },
    {
      "color": "info" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-info"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "selected": true,
      "class": {
        "link": "text-highlighted"
      }
    },
    {
      "selected": false,
      "disabled": false,
      "class": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ]
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral" as typeof color[number],
    "size": "sm" as typeof size[number]
  }
}