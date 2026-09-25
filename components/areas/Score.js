import { StyleSheet, View } from "react-native";

import CustomText from "../texts/CustomText";

export default function Score({ player, computer }) {
  return <View style={styles.container}>
    <CustomText text={"Spelare: " + player} />
    <CustomText text={"|"} />
    <CustomText text={"Dator: " + computer} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 75,
    flexDirection: "row",
    justifyContent: "space-around"
  },
});
