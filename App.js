import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Title from './components/texts/Title';
import CustomText from './components/texts/CustomText';
import ChoiceButton from './components/buttons/ChoiceButton';
import CustomButton from './components/buttons/CustomButton';

export default function App() {
  return <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Title text={"STEN | SAX | PÅSE"} />

      <View style={styles.infoText}>
        <CustomText text={"Välj ditt drag!"} />
      </View>

      <View style={styles.choiceArea}>
        <ChoiceButton text={"Sten"} />
        <ChoiceButton text={"Sax"} />
        <ChoiceButton text={"Påse"} />
      </View>

      <View style={styles.outerRoundArea}>
        <View style={styles.innerRoundArea}>
          <CustomText text={"Spelare"} />
          <CustomText text={"Sten"} />
        </View>
        <View style={styles.innerRoundArea}>
          <CustomText text={"Datorn"} />
          <CustomText text={"Sax"} />
        </View>
      </View>

      <View style={styles.infoText}>
        <CustomText text={"Spelaren vann!"} />
      </View>

      <View style={styles.scoreArea}>
        <CustomText text={"Spelare: 1"} />
        <CustomText text={"|"} />
        <CustomText text={"Dator: 0"} />
      </View>

      <View style={styles.resetButton}>
        <CustomButton text={"Nollställ"} />
      </View>

    </View>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100
  },
  choiceArea: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  infoText: {
    alignItems: "center",
    marginVertical: 50
  },
  outerRoundArea: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  innerRoundArea: {
    alignItems: "center",
    gap: 4,
  },
  scoreArea: {
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  resetButton: {
    alignItems: "center"
  }
});
