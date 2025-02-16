import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Message de bienvenue */}
        <Text style={styles.title}>Bienvenue sur 🚖 SafiRide</Text>
        <Text style={styles.subtitle}>
          Trouvez des trajets partagés facilement et voyagez en toute sérénité.
        </Text>

        {/* Bouton d'action */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explorer les trajets</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond assombri pour bien voir le texte
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
    //backgroundColor: "#28a745", // Vert
    //backgroundColor: "#FFD700", bleu
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

