import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      'dark-gray': '#121212',
      'white': '#FFFFFF',
      'card-gray': '#1B1B1B',
      'btn-gray': '#242424',
      'square-gray': '#3F3F3F',
      'input-gray': '#252525',
      'input-text': '#878787',
      'square-green': '#00A811',
      'square-red': '#7E0000',
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config