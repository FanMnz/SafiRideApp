import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "~/locales/i18n";

export default function LoginScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // 🔹 Simule une connexion réussie (en vrai, appeler une API)
    await AsyncStorage.setItem("user-token", "fake_token");
    router.replace("/explore"); // Redirige vers l'exploration après connexion
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("login")}</Text>

      <TextInput style={styles.input} placeholder={t("email")} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder={t("password")} secureTextEntry value={password} onChangeText={setPassword} />

      <Button mode="contained" onPress={handleLogin}>
        {t("login_button")}
      </Button>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.link}>{t("no_account")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  input: { width: "100%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 15 },
  link: { color: "#007BFF", marginTop: 10 },
});
