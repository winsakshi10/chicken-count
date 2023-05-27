/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', 'ui-sans-serif', 'system-ui'],
        'display': ['Luckiest Guy', 'ui-sans-serif', 'system-ui'],
      },
      focus: true
    },
  },
  plugins: [],
}

