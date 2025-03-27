import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider, Menu, Button } from "react-native-paper";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "~/locales/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Layout() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem("user-token");
      setIsAuthenticated(!!token);
    };
    checkAuthStatus();
  }, []);

  // 🔹 Affichage temporaire pendant la vérification
  if (isAuthenticated === null) {
    return <></>;
  }

  return (
    <PaperProvider>
      <Tabs
        screenOptions={{
          headerRight: () => (
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={<Button onPress={() => setVisible(true)}>{t("language")}</Button>}
            >
              <Menu.Item onPress={() => i18n.changeLanguage("en")} title="English" />
              <Menu.Item onPress={() => i18n.changeLanguage("fr")} title="Français" />
            </Menu>
          ),
          tabBarStyle: isAuthenticated ? {} : { display: "none" }, // 🔹 Masquer la barre de navigation avant connexion
        }}
      >
      
        {/* 🔹 Page d'accueil (Welcome ou Explore) */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: isAuthenticated ? t("explore") : t("home"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={isAuthenticated ? "compass" : "home"} size={size} color={color} />
            ),
          }}
        />

        {/* 🔹 Afficher Login/Signup SEULEMENT si non connecté */}
        {!isAuthenticated && (
          <>
            <Tabs.Screen
              name="login"
              options={{
                tabBarLabel: t("login"),
                tabBarIcon: ({ color, size }) => <Ionicons name="log-in-outline" size={size} color={color} />,
              }}
            />
            <Tabs.Screen
              name="signup"
              options={{
                tabBarLabel: t("signup"),
                tabBarIcon: ({ color, size }) => <Ionicons name="person-add-outline" size={size} color={color} />,
              }}
            />
          </>
        )}

        {/* 🔹 Afficher Wallet et Profil SEULEMENT si connecté */}
        {isAuthenticated && (
          <>
            <Tabs.Screen
              name="wallet"
              options={{
                tabBarLabel: t("wallet"),
                tabBarIcon: ({ color, size }) => <Ionicons name="wallet-outline" size={size} color={color} />,
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                tabBarLabel: t("profile"),
                tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
              }}
            />
          </>
        )}
      </Tabs>
    </PaperProvider>
  );
}
