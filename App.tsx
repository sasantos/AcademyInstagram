import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";
import font from "./src/theme/fonts";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Universe!!</Text>
      <AntDesign name="home" size={50} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: font.size.xlg,
  },
});
