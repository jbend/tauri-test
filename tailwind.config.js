/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    darkMode: ['class', '[data-theme="dark"]'],
    extend: {
      colors: {
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

        "base": "rgb(var(--color-base) / <alpha-value>)",
        "crust": "rgb(var(--color-crust) / <alpha-value>)",
        "mantle": "rgb(var(--color-mantle) / <alpha-value>)",

      }
    },
  },
  plugins: [],
}

