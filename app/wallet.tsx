import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import "~/locales/i18n";

export default function WalletScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💰 {t("wallet")}</Text>
      <Text style={styles.subtitle}>{t("wallet_description")}</Text>

      {/* 🔹 Bouton Mobile Money */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📲 {t("mobile_money")}</Text>
      </TouchableOpacity>

      {/* 🔹 Bouton Carte Bancaire */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>💳 {t("bank_card")}</Text>
      </TouchableOpacity>

      {/* 🔹 Bouton Virement Bancaire */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🔄 {t("bank_transfer")}</Text>
      </TouchableOpacity>

      {/* 🔹 Bouton Recharge Airtime */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📞 {t("airtime")}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ✅ Style
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: "#9ACD32", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, marginTop: 10 },
  buttonText: { color: "#000", fontSize: 16, fontWeight: "bold" },
});
