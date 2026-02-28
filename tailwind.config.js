/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
        serif: ["IBM Plex Serif", "ui-serif", "Georgia"],
      },
      colors: {
        ink: {
          900: "#235da9",
          800: "#235da9",
          700: "#235da9",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
        },
        forest: {
          50: "#f0f7f4",
          100: "#d9ede3",
          200: "#b3dbc7",
          400: "#5fb88f",
          600: "#2d8a5f",
        },
        accent: {
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      boxShadow: {
        soft: "0 20px 50px -30px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
