import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import "~/locales/i18n"; // Assure que la config i18n est chargée

export default function Index() {
  const router = useRouter();  //expo router
  const { t } = useTranslation(); // 📌 Hook de traduction

  return (
    <ImageBackground source={require("../assets/images/background.png")} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{t("welcome")}</Text>
        <Text style={styles.subtitle}>{t("description")}</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/explore")}>
          <Text style={styles.buttonText}>{t("explore")}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
// ✅ Ajout du style
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 🔹 Fond sombre pour mieux voir le texte
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#9ACD32",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
