/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      overflow: ["hover", "focus"],
      colors: {
        secondary: {
          50: "#e9edf2",
          100: "#cbd5df",
          200: "#aabac9",
          300: "#899fb3",
          400: "#708ca2",
          500: "#64748b",
          600: "#505d70",
          700: "#3d4756",
          800: "#2a313b",
          900: "#171a21",
          950: "#0d0f13",
        },
        primary: {
          50: "#e0f6ff",
          100: "#b3e5ff",
          200: "#80d4ff",
          300: "#4dc2ff",
          400: "#26b5ff",
          500: "#01a0f6",
          600: "#018dd9",
          700: "#0175b3",
          800: "#015c8c",
          900: "#01466b",
          950: "#002b40",
        },
        accent: {
          50: "#e0eaf1",
          100: "#b3c9dd",
          200: "#80a5c7",
          300: "#4d81b1",
          400: "#26659f",
          500: "#003264",
          600: "#002c59",
          700: "#00244a",
          800: "#001c3b",
          900: "#00142c",
          950: "#000a17",
        },
        accent: {
          50: "#e0eaf1",
          100: "#b3c9dd",
          200: "#80a5c7",
          300: "#4d81b1",
          400: "#26659f",
          500: "#003264",
          600: "#002c59",
          700: "#00244a",
          800: "#001c3b",
          900: "#00142c",
          950: "#000a17",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Lexend", "system-ui", "sans-serif"],
      },
      animation: {
        "blur-slide-up": "blur-slide-up 1.2s ease-out forwards",
        "fade-slide-up": "fade-slide-up 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "slide-down": "slideDown 0.5s ease-in-out",
        float: "float-custom 3.5s ease-in-out infinite alternate both",
      },
      keyframes: {
        "blur-slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-custom": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-15px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
