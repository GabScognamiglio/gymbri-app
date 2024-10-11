/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
      extend: {},
  },
  plugins: [
      require('daisyui'),
  ],
  daisyui: {
    themes: [
      
      {
        light: {
          "secondary": "#34D399", // Verde
          "primary": "#4000d4", // Viola
          "accent": "#F97316", // Arancione
          "neutral": "#F3F4F6", // Grigio chiaro
          "base-100": "#F3F4F6", // Sfondo bianco
          "info": "#60A5FA", // Blu per le info
          "success": "#22C55E", // Verde per il successo
          "warning": "#FBBF24", // Giallo per gli avvisi
          "error": "#F87171", // Rosso per gli errori
        },
      },
      {
        dark: {
          "secondary": "#22C55E", // Verde
          "primary": "#F97316", // Arancione
          "accent": "#8B5CF6", // Viola
          "neutral": "#1F2937", // Grigio scuro
          "base-100": "#111827", // Sfondo scuro
          "info": "#3B82F6", // Blu per le info
          "success": "#10B981", // Verde per il successo
          "warning": "#F59E0B", // Giallo per gli avvisi
          "error": "#EF4444", // Rosso per gli errori
        },
      },
    ],
  },
};
