/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#155EEF",
        transparent: "transparent",
        current: "currentColor",
      },
      maxWidth: {
        "8xl": "1920px",
      },
      textColor: {
        base: "var(--text-base)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      lineHeight: {
        "extra-loose": "2.2",
      },
      scale: {
        120: "1.2",
      },
      screens: {
        // devias kit material breakpoints
        xs: "0px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
        // tailwind default breakpoints
        // xs: "0px",
        // sm: "320px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1440px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
