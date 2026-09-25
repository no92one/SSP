import { StyleSheet, Text } from "react-native";

export default function Title({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  }
});
