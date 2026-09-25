import { StyleSheet, Text } from "react-native";

export default function CustomText({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

