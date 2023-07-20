/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Serif 4", "ui-sans-serif", "system-ui"],
        display: ["Fredoka", "ui-sans-serif", "system-ui"],
      },
      focus: true,
    },
  },
  plugins: [],
};
