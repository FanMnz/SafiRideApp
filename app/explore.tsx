import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import "~/locales/i18n";

export default function ExploreScreen() {
  const router = useRouter();
  const { t } = useTranslation(); // 📌 Hook pour la traduction

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚗 {t("explore")}</Text>
      <Text style={styles.subtitle}>{t("explore_description")}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()} // ✅ Retour à la page précédente
      >
        <Text style={styles.buttonText}>🔙 {t("back")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: "#FF6347", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

