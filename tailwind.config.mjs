const { parkwindPlugin } = require("@park-ui/tailwind-plugin");
/** @type {import('tailwindcss').Config} */
export default {
  plugins: [parkwindPlugin],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: ["class"],
};
