import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Title from './components/texts/Title';
import CustomText from './components/texts/CustomText';
import ChoiceButton from './components/buttons/ChoiceButton';
import CustomButton from './components/buttons/CustomButton';
import { useState } from 'react';

/* 
  spelar val
  dator val
  resultat = Spelaren vann! | Oavgjort | Datorn vann!
  spelar poäng
  dator poäng

  - Spelar knappanra ska välja olika värden per knapp
  - Slumpa fram ett val för datorn
  - köra en runda - kolla vad resultatet ska vara
  - resata val, resultat och poäng
*/

export default function App() {
  const [playerPick, setPlayerPick] = useState("Sten");
  const [computerPick, setComputerPick] = useState("Sax");
  const [result, setResult] = useState("Spelaren vann!");
  const [score, setScore] = useState({ player: 0, computer: 0 });

  function getComputerChoice() {
    const choices = ["Sten", "Sax", "Påse"];

    return choices[Math.floor(Math.random() * choices.length)];
  }

  function battle(playerChoice) {
    const computerChoice = getComputerChoice();

    setPlayerPick(playerChoice);
    setComputerPick(computerChoice);

    if (playerChoice === computerChoice) return setResult("Oavgjort!");

    if (
      (playerChoice === "Sten" && computerChoice === "Sax") ||
      (playerChoice === "Sax" && computerChoice === "Påse") ||
      (playerChoice === "Påse" && computerChoice === "Sten")
    ) {
      setScore(currentData => ({ ...currentData, "player": score.player + 1 }));
      return setResult("Spelaren vann!");
    }

    setScore(currentData => ({ ...currentData, "computer": score.computer + 1 }));
    return setResult("Datorn vann!");

  }

  return <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Title text={"STEN | SAX | PÅSE"} />

      <View style={styles.infoText}>
        <CustomText text={"Välj ditt drag!"} />
      </View>

      <View style={styles.choiceArea}>
        <ChoiceButton text={"Sten"} handlePress={battle} />
        <ChoiceButton text={"Sax"} handlePress={battle} />
        <ChoiceButton text={"Påse"} handlePress={battle} />
      </View>

      <View style={styles.outerRoundArea}>
        <View style={styles.innerRoundArea}>
          <CustomText text={"Spelare"} />
          <CustomText text={playerPick} />
        </View>
        <View style={styles.innerRoundArea}>
          <CustomText text={"Datorn"} />
          <CustomText text={computerPick} />
        </View>
      </View>

      <View style={styles.infoText}>
        <CustomText text={result} />
      </View>

      <View style={styles.scoreArea}>
        <CustomText text={"Spelare: " + score.player} />
        <CustomText text={"|"} />
        <CustomText text={"Dator: " + + score.computer} />
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
