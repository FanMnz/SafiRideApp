import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 📌 Import des fichiers de langue
import en from "./en.json";
import fr from "./fr.json";

// Détecter la langue de l'utilisateur ou charger celle stockée
const getStoredLanguage = async () => {
  const savedLanguage = await AsyncStorage.getItem("user-language");
  return savedLanguage || Localization.locale.split("-")[0]; // Ex: "fr-FR" → "fr"
};

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, fr: { translation: fr } },
    lng: "en", // Valeur par défaut
    fallbackLng: "en", // Langue de secours
    interpolation: { escapeValue: false }, // Pas besoin d'échapper HTML dans React Native
  });

// 📌 Met à jour la langue sauvegardée
getStoredLanguage().then((lng) => i18n.changeLanguage(lng));

export default i18n;
