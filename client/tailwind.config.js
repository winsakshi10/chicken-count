/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
        display: ["Bubblegum Sans", "ui-sans-serif", "system-ui"],
      },
      focus: true,
    },
  },
  plugins: [],
};
