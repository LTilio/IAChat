/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "rgb(250, 222, 42)",
        // "custom-yellow-hover": "rgba(250, 222, 42, 0.8)",
        "custom-yellow-disabled": "rgba(250, 222, 42, 0.5)",
        "custom-black": "rgb(17, 18, 23)",
      },
    },
  },
  plugins: [],
};
