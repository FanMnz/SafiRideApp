
module.exports = function(api) {
    api.cache(true);
    return {
      presets: ["babel-preset-expo"],
      plugins: [
        "expo-router/babel", // Ajoute le support pour Expo Router
        [
          "module-resolver",
          {
            alias: {
              "~": "./", // Permet d'utiliser `~/` pour référencer la racine du projet
            },
          },
        ],
      ],
    };
  };
  