const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env: any, argv: any) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.forEach((rule: any) => {
    if (rule.oneOf) {
      rule.oneOf.unshift({
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("@svgr/webpack"),
            options: {
              inlineStyles: {
                onlyMatchedOnce: false,
              },
              viewBox: false,
              removeUnknownsAndDefaults: false,
              convertColors: false,
            },
          },
        ],
      });
    }
  });

  return config;
};
