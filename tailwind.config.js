/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "3rem",
        },
      },
      colors: {
        background: "#111",
        primaryBg: "var(--primary-bg)",
        secondaryBg: "var(--secondary-bg)",
        tertiaryBg: "var(--tertiary-bg)",
        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",
        gradientLeft: "var(--gradient-left)",
        gradientRight: "var(--gradient-right)",
        secondaryButton: "var(--secondary-button-bg)",
      },
      fontSize: {
        small: "16px",
        paragraph: "20px",
        h1: "70px",
        h2: "35px",
        h3: "25px",
        h4: "20px",
        h5: "16px",
        h6: "14px",
      },
    },
  },
  plugins: [],
};
