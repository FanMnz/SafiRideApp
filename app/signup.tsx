import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import "~/locales/i18n";

export default function SignupScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("signup")}</Text>

      <TextInput
        style={styles.input}
        placeholder={t("email")}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder={t("password")}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button mode="contained" onPress={() => console.log("User registered")}>
        {t("register")}
      </Button>

      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Text style={styles.link}>{t("already_have_account")}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ✅ Style
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  input: { width: "100%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 15 },
  link: { color: "#007BFF", marginTop: 10 },
});
