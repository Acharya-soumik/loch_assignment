/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: `translate3d(0, 0, 0)` },
          "100%": {
            transform: `translate3d(-1500px, 0 ,0)`,
          },
        },
      },
      backgroundImage: {
        shade: `linear-gradient(0deg, #FFFFFF, #FFFFFF),
        linear-gradient(180deg, rgba(255, 255, 255, 0.2) 27.5%, rgba(22, 93, 255, 0.162) 157.71%)`,
      },
    },
  },
  plugins: [],
};
