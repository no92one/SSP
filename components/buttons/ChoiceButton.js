import { Pressable, StyleSheet, Text } from "react-native";

export default function ChoiceButton({ text, handlePress }) {
  return <Pressable style={styles.container}
    onPress={() => handlePress(text)}
  >
    <Text style={styles.text}>{text}</Text>
  </Pressable>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 10,
  },
  text: {
    color: "white"
  }
});
