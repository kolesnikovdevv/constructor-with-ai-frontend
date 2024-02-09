/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        tuatara: "#3C3C3C",
        cod_gray: "#0b0b0b",
        shark: "#1E1E1E",
        woodsmoke: "#151515",
        hover_color: "#242424",
        masala: "#424242",
        orange: "#FF7438",
      },
      fontFamily: {
        body: ["Work Sans"],
      },
    },
  },
  plugins: [],
}
