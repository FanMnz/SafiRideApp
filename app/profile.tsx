import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import "~/locales/i18n";

export default function ProfileScreen() {
  const { t } = useTranslation(); // 📌 Hook de traduction

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 {t("profile")}</Text>
      <Text style={styles.subtitle}>{t("profile_description")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 20 },
});

