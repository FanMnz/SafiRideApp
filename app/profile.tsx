import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Mon Profil</Text>
      <Text style={styles.subtitle}>Gérez votre compte et vos informations.</Text>
    </View>
  );
}

// ✅ Style pour la page Profil
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 20 },
});
