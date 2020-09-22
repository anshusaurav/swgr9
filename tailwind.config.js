module.exports = {
  theme: {
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
      '44': '44px'
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        rotate: {
          "100%": { transform: "rotate(360deg)" }
        },
        dash: {
          "0%": {
            strokeDasharray: "1, 200",
            strokeDashoffset: 0
          },
          "50%": {
            strokeDasharray: "89, 200",
            strokeDashoffset: 0
          },
          "100%": {
            strokeDasharray: "89, 200",
            strokeDashoffset: 124
          }
        },
        colorwhite: {
          "100%, 0%": {
            stroke: "#fff"
          },
          "40%": {
            stroke: "#fff"
          },
          "66%": {
            stroke: "#fff"
          },
          "80%, 90%": {
            stroke: "#fff"
          },
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        rotate: "rotate 2s linear infinite",
        dash: "dash 1.5s ease-in-out infinite, colorwhite 6s ease-in-out infinite"
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html"
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    }
  }
};
