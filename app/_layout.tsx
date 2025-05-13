import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ drawerPosition: "right", headerShown: false }} />
    </GestureHandlerRootView>
  );
}
