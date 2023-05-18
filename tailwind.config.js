/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F555E5",
        blue: "#2F8FFF",
        lightpink: "#FFD2FA",
        lightblue: "#B0D4FF",
        orange: "#FC6257",
        lightgray: "#B5B5B5",
      },
    },
  },
  plugins: [],
};
