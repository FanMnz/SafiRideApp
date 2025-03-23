import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider, Menu, Button } from "react-native-paper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "~/locales/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Layout() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("user-language", lang);
    i18n.changeLanguage(lang);
    setVisible(false);
  };

  return (
    <PaperProvider>
      <Tabs screenOptions={{ headerRight: () => (
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={<Button onPress={() => setVisible(true)}>{t("language")}</Button>}
          >
            <Menu.Item onPress={() => changeLanguage("en")} title="English" />
            <Menu.Item onPress={() => changeLanguage("fr")} title="Français" />
          </Menu>
        ) 
      }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: t("welcome"),
            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarLabel: t("explore"),
            tabBarIcon: ({ color, size }) => <Ionicons name="compass" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="wallet"  // Ajout du Wallet
          options={{
            tabBarLabel: t("wallet"),
            tabBarIcon: ({ color, size }) => <Ionicons name="wallet" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: t("profile"),
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
