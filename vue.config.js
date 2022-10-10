module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "Energy IQ Demo",
    },
  },
  pwa: {
    name: "Energy IQ Demo",
    themeColor: "#EC6A2C",
    msTileColor: "#EC6A2C",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#EC6A2C",
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
  devServer: {
    disableHostCheck: true,
  },
};
