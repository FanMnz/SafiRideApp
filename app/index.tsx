import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router"; // 🔹 Expo Router et non React Navigation
import React from "react";

export default function Index() {
  const router = useRouter(); // ✅ Expo Router

  return (
    <ImageBackground
      source={require("../assets/images/background.png")} // 🔹 Assure-toi que l'image est bien placée
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Titre */}
        <Text style={styles.title}>Bienvenue sur 🚖 SafiRide</Text>
        <Text style={styles.subtitle}>
          Trouvez des trajets partagés facilement et voyagez en toute sérénité.
        </Text>

        {/* ✅ Bouton pour naviguer */}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/explore")}>
          <Text style={styles.buttonText}>Explorer les trajets</Text>
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
