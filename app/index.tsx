import { useNavigation } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const { openDrawer } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Open drawer" onPress={openDrawer} />
    </View>
  );
}
