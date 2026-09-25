import { Pressable, StyleSheet, Text } from "react-native";

export default function CustomButton({ text, pressHandler }) {
  return <Pressable style={styles.container}
    onPress={pressHandler}
    android_ripple={{ color: "white" }}
  >
    <Text style={styles.text}>{text}</Text>
  </Pressable>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
  },
  text: {
    color: "white",
    fontSize: 20
  }
});
