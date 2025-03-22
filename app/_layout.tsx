import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";

export default function Layout() {
  return (
    <PaperProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index" // Correspond à `app/index.tsx`
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore" // Correspond à `app/explore.tsx`
          options={{
            tabBarLabel: "Explorer",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="compass" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile" // Correspond à `app/profile.tsx`
          options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
