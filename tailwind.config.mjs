/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  //darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 3s linear infinite",
        shake: "shake 0.5s cubic-bezier(.36,.07,.19,.97)",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
