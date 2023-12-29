/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    darkMode: ['class', '[data-theme="dark"]'],
    safelist: ["dark"], 
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        }
      },
    },
    extend: {
      colors: {
        // Initial
        "surface": "rgb(var(--color-surface) / <alpha-value>)",
        "text": "rgb(var(--color-text) / <alpha-value>)",

        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
        "success": "rgb(var(--color-success) / <alpha-value>)",
        "warning": "rgb(var(--color-warning) / <alpha-value>)",
        "error": "rgb(var(--color-error) / <alpha-value>)",

        "overlay0": "rgb(var(--color-overlay0) / <alpha-value>)",
        "overlay1": "rgb(var(--color-overlay1) / <alpha-value>)",
        "overlay2": "rgb(var(--color-overlay2) / <alpha-value>)",

        "surface0": "rgb(var(--color-surface0) / <alpha-value>)",
        "surface1": "rgb(var(--color-surface1) / <alpha-value>)",
        "surface2": "rgb(var(--color-surface2) / <alpha-value>)",

        "base": "rgb(var(--color-base) / <alpha-value>)",
        "crust": "rgb(var(--color-crust) / <alpha-value>)",
        "mantle": "rgb(var(--color-mantle) / <alpha-value>)",

        // Shadcn-svelte
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        }        

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

