module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color-body-light": "#F6F8FF",
        "color-body-dark": "#141D2F",
        "color-primary-light": "#0079FF",
        "color-primary-dark": "#0079FF",
        "color-text-primary-light": "#4B6A9B",
        "color-text-second-light": "#697C9A",
        "color-text-third-light": "#222731",
        "color-text-third-dark": "#90A4D4",
        "color-text-default-light": "#2B3442",
      },
      fontFamily: {
        space: ["Space Mono", "monospace"],
      },
      boxShadow: {
        "input-search": "0 16px 30px -25px rgba(70, 96, 187, 20)",
      },
    },
  },
  plugins: [],
};