/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C8A96B",
        "gold-light": "#dfc99a",
        "gold-glow": "rgba(200,169,107,0.25)",
        jungle: "#0B3D2E",
        "jungle-deep": "#072a1f",
        ivory: "#FAF7F2",
        "ivory-dark": "#F0EBE1",
        matte: "#0E0E0E",
        "matte-2": "#1A1A1A",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "counter-in": "counterIn 0.6s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGold: {
          "0%,100%": { boxShadow: "0 0 20px rgba(200,169,107,0.2)" },
          "50%": { boxShadow: "0 0 50px rgba(200,169,107,0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        counterIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}
