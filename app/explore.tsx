import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚗 Explorer les trajets</Text>
      <Text style={styles.subtitle}>Découvrez les trajets disponibles près de chez vous.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()} // ✅ Retour à la page précédente
      >
        <Text style={styles.buttonText}>🔙 Retour</Text>
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

