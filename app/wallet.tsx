import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import "~/locales/i18n";

export default function WalletScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💰 {t("wallet")}</Text>
      <Text style={styles.subtitle}>{t("wallet_description")}</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Title>{t("mobile_money")}</Title>
          <Paragraph>{t("mobile_money_description")}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log("Ajout via Mobile Money")}>
            {t("add_funds")}
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>{t("bank_card")}</Title>
          <Paragraph>{t("bank_card_description")}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log("Ajout via Carte Bancaire")}>
            {t("add_funds")}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

// ✅ Style amélioré
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  card: { marginBottom: 15, backgroundColor: "#fff", padding: 10, borderRadius: 10 },
});

