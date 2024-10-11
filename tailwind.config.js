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
        // dark: {
        //   "primary": "#4ade80", // Verde luminoso
        //   "secondary": "#22d3ee", // Ciano vivace
        //   "accent": "#7c3aed", // Viola intenso
        //   "neutral": "#2d3748", // Grigio scuro profondo
        //   "base-100": "#1a202c", // Sfondo scuro (grigio antracite)
        //   "info": "#38bdf8", // Azzurro freddo
        //   "success": "#10b981", // Verde positivo
        //   "warning": "#facc15", // Giallo acceso
        //   "error": "#f87171", // Rosso acceso
        // },

        // light: {
        //   "primary": "#3e16b5", // Lilla tenue
        //   "secondary": "#f472b6", // Rosa delicato
        //   "accent": "#38bdf8", // Azzurro dolce
        //   "neutral": "#e5e7eb", // Grigio pallido
        //   "base-100": "#f9fafb", // Sfondo chiaro (quasi bianco)
        //   "info": "#93c5fd", // Blu chiaro
        //   "success": "#34d399", // Verde fresco
        //   "warning": "#fbbf24", // Giallo tenue
        //   "error": "#f87171", // Rosso corallo
        // },


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
