import { Pressable, StyleSheet, Text } from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";

export default function ChoiceButton({ text, handlePress }) {

  function getIcon() {
    if (text == "Sten") {
      return "hand-rock-o";
    } else if (text == "Sax") {
      return "hand-scissors-o";
    } else {
      return "hand-paper-o";
    }
  }

  return <Pressable style={styles.container}
    onPress={() => handlePress(text)}
  >
    <FontAwesome
      name={getIcon()}
      size={50}
      color="white"
    />
  </Pressable>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  }
});
