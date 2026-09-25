import { StyleSheet, View } from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";

import CustomText from "../texts/CustomText";

export default function Round({ playerPick, computerPick }) {

  function getIcon(pick) {
    if (pick == "Sten") {
      return "hand-rock-o";
    } else if (pick == "Sax") {
      return "hand-scissors-o";
    } else {
      return "hand-paper-o";
    }
  }

  return <View style={styles.outerRoundArea}>
    <View style={styles.innerRoundArea}>
      <CustomText text={"Spelare"} />
      {
        playerPick == "-" ?
          <CustomText text={playerPick} />
          :
          <FontAwesome
            name={getIcon(playerPick)}
            size={50}
            color="black"
          />
      }
    </View>
    <View style={styles.innerRoundArea}>
      <CustomText text={"Datorn"} />
      {
        computerPick == "-" ?
          <CustomText text={computerPick} />
          :
          <FontAwesome
            name={getIcon(computerPick)}
            size={50}
            color="black"
          />
      }
    </View>
  </View>;

}

const styles = StyleSheet.create({
  outerRoundArea: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  innerRoundArea: {
    alignItems: "center",
    gap: 4,
  },
});
