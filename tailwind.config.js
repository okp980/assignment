/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: "1440px",
    },

    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
      },
      colors: {
        agnolia: "var(--clr-agnolia)",
        labaster: "var(--clr-labaster)",
        white: "var(--clr-white)",
        ["marine-blue"]: "var(--clr-marine-blue)",
        ["purplish-blue"]: "var(--clr-purplish-blue)",
        ["pastel-blue"]: "var(--clr-pastel-blue)",
        ["light-blue"]: "var(--clr-light-blue)",
        ["strawberry-red"]: "var(--clr-strawberry-red)",
        ["cool-gray"]: "var(--clr-cool-gray)",
      },
      textColor: {
        body: "var(--clr-cool-gray)",
        heading: "var(--clr-marine-blue)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
