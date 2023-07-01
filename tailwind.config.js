/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    themes: ["cupcake", "dark", "cmyk"],
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

