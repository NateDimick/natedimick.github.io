import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        core_theme: {
          "primary": "#4d7c0f",
          "secondary": "#166534",
          "accent": "#a8a29e",
          "neutral": "#f3f4f6",
          "base-100": "#f3f4f6",
          "info": "#a8a29e",
          "success": "#0ea5e9",
          "warning": "#fde047",
          "error": "#ec4899",
        },
      },
    ],
  },

  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ]
} satisfies Config;
