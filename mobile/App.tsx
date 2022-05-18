import 'react-native-gesture-handler'
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { theme } from "./src/theme";
import Widget from "./src/components/Widget/index";
import { useFonts, Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {hideAsync, preventAutoHideAsync} from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await preventAutoHideAsync();
      } catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
      onLayout={onLayoutRootView}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}
