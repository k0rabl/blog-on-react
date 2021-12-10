module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
            debug: false,
          },
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      plugins: [
        "@babel/plugin-syntax-jsx"
      ],
    },
    production: {
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      plugins: [
        "@babel/plugin-syntax-jsx"
      ],
    },
    development: {
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      plugins: [
        "@babel/plugin-syntax-jsx"
      ],
    },
  },
};