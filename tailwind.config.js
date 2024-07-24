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
        tertiaryText: "var(--tertiary-text)",
        gradientLeft: "var(--gradient-left)",
        gradientRight: "var(--gradient-right)",
        secondaryButton: "var(--secondary-button-bg)",
      },
      fontSize: {
        small: "16px",
        paragraph: "12px",
        "paragraph-md": "14px",
        "paragraph-lg": "20px",

        h1: "25px",
        h2: "20px",
        h3: "18px",
        h4: "16px",
        h5: "14px",
        h6: "12px",

        // Small screens (sm)
        "h1-sm": "30px",
        "h2-sm": "24px",
        "h3-sm": "20px",
        "h4-sm": "18px",
        "h5-sm": "16px",
        "h6-sm": "14px",

        // Medium screens (md)
        "h1-md": "40px",
        "h2-md": "32px",
        "h3-md": "28px",
        "h4-md": "24px",
        "h5-md": "20px",
        "h6-md": "18px",

        // Large screens (lg)
        "h1-lg": "50px",
        "h2-lg": "40px",
        "h3-lg": "35px",
        "h4-lg": "30px",
        "h5-lg": "24px",
        "h6-lg": "20px",

        // Extra large screens (xl)
        "h1-xl": "70px",
        "h2-xl": "48px",
        "h3-xl": "40px",
        "h4-xl": "35px",
        "h5-xl": "25px",
        "h6-xl": "20px",
      },
    },
  },
  plugins: [],
};
