/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "main-color": "#f0831d", "text-color": "#8f93a5" },
    },
  },
  plugins: [],
};
