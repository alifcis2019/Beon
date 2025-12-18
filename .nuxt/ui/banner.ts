const color = [
  "primary",
  "error",
  "warning",
  "success",
  "info",
  "neutral"
] as const

export default {
  "slots": {
    "root": [
      "relative z-50 w-full",
      "transition-colors"
    ],
    "container": "flex items-center justify-between gap-3 h-12",
    "left": "hidden lg:flex-1 lg:flex lg:items-center",
    "center": "flex items-center gap-1.5 min-w-0",
    "right": "lg:flex-1 flex items-center justify-end",
    "icon": "size-5 shrink-0 text-inverted pointer-events-none",
    "title": "text-sm text-inverted font-medium truncate",
    "actions": "flex gap-1.5 shrink-0 isolate",
    "close": "text-inverted hover:bg-default/10 focus-visible:bg-default/10 -me-1.5 lg:me-0"
  },
  "variants": {
    "color": {
      "primary": {
        "root": "bg-primary"
      },
      "error": {
        "root": "bg-error"
      },
      "warning": {
        "root": "bg-warning"
      },
      "success": {
        "root": "bg-success"
      },
      "info": {
        "root": "bg-info"
      },
      "neutral": {
        "root": "bg-inverted"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-primary/90"
      }
    },
    {
      "color": "error" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-error/90"
      }
    },
    {
      "color": "warning" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-warning/90"
      }
    },
    {
      "color": "success" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-success/90"
      }
    },
    {
      "color": "info" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-info/90"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-inverted/90"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral" as typeof color[number]
  }
}