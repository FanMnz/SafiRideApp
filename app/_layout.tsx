import { Tabs, useRouter, useSegments } from "expo-router"; //Import useRouter
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider, Menu, Button } from "react-native-paper";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import i18n from "~/locales/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";

export default function Layout() {  
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [forceRender, setForceRender] = useState(0);
  const router = useRouter(); // Initialize router
  const segments = useSegments();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem("user-token");
      const authStatus = !!token;
      setIsAuthenticated(authStatus);

       // Reconstruct the path from segments
       const currentPath = segments.join('/');

       if (!authStatus && currentPath !== 'login' && currentPath !== 'signup' && currentPath !== 'index') {
         router.replace('/login');
      }
    };

    checkAuthStatus();
  },  [segments]); // Add segments to the dependency array);

  const changeLanguage = useCallback(async (lang: string) => {
    await i18n.changeLanguage(lang);
    setForceRender((prev) => prev + 1);
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const getTabs = () => {
    const tabs = [];

    //Home or Explore Tab
    tabs.push(
      <Tabs.Screen
        key="index"
        name="index"
        options={{
          tabBarLabel: t(isAuthenticated ? "explore" : "home"),
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={isAuthenticated ? "compass-outline" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    );

    if (!isAuthenticated) {
      tabs.push(
        <Tabs.Screen
          key="login"
          name="login"
          options={{
            tabBarLabel: t("login"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        />
      );
      tabs.push(
        <Tabs.Screen
          key="signup"
          name="signup"
          options={{
            tabBarLabel: t("signup"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add-outline" size={size} color={color} />
            ),
          }}
        />
      );
    } else {
      tabs.push(
        <Tabs.Screen
          key="wallet"
          name="wallet"
          options={{
            tabBarLabel: t("wallet"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
          }}
        />
      );
      tabs.push(
        <Tabs.Screen
          key="profile"
          name="profile"
          options={{
            tabBarLabel: t("profile"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      );
    }
    return tabs;
  };
  return (
    <PaperProvider>
      <Tabs
        key={forceRender}
        screenOptions={{
          headerRight: () => (
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={
                <Button onPress={() => setVisible(true)}>{t("language")}</Button>
              }
            >
              <Menu.Item onPress={() => changeLanguage("en")} title="English" />
              <Menu.Item onPress={() => changeLanguage("fr")} title="Français" />
            </Menu>
          ),
        }}
      >
        {getTabs()}
      </Tabs>
    </PaperProvider>
  );
}