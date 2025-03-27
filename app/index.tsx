import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "~/locales/i18n";

export default function Index() {
  const router = useRouter();
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("user-token");
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  // 🔹 Affichage temporaire pendant la vérification (évite un affichage flash)
  if (isAuthenticated === null) {
    return <View style={styles.loading}><Text>Chargement...</Text></View>;
  }

  // 🔹 Si connecté, afficher "Explorer"
  if (isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🚗 {t("explore")}</Text>
        <Text style={styles.subtitle}>{t("explore_description")}</Text>
      </View>
    );
  }

  // 🔹 Sinon, afficher la page d'accueil (Welcome)
  return (
    <ImageBackground source={require("../assets/images/background.png")} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{t("welcome")}</Text>
        <Text style={styles.subtitle}>{t("description")}</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/signup")}>
          <Text style={styles.buttonText}>{t("lets_start")}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  background: { flex: 1, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" },
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 20, borderRadius: 10, alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#ddd", textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: "#9ACD32", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  buttonText: { color: "#000", fontSize: 16, fontWeight: "bold" },
});
