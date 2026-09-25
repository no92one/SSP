import { Pressable, StyleSheet, Text } from "react-native";

export default function ChoiceButton({ text }) {
  return <Pressable style={styles.container}>
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
