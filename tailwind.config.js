/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      backgroundImage: {
        background:
          "radial-gradient(circle at top, rgba(31,55,86,1) 0%, rgba(20,21,57,1) 100%)",
        scissorsGradient:
          "linear-gradient(45deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        paperGradient:
          "linear-gradient(45deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        rockGradient:
          "linear-gradient(45deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        lizardGradient:
          "linear-gradient(45deg, hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        Cyan: "linear-gradient(45deg, hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
        winner: "radial-gradient(circle, rgba(62,95,138,1) 0%, rgba(20,21,57,0) 60%)"
      },
    },
  },
  plugins: [],
};
