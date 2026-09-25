import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Title from './components/texts/Title';
import CustomText from './components/texts/CustomText';
import ChoiceButton from './components/buttons/ChoiceButton';
import CustomButton from './components/buttons/CustomButton';
import { useState } from 'react';
import Round from './components/areas/Round';
import Score from './components/areas/Score';

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
  const [playerPick, setPlayerPick] = useState("-");
  const [computerPick, setComputerPick] = useState("-");
  const [result, setResult] = useState("");
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

  function reset() {
    setScore({ player: 0, computer: 0 });
    setPlayerPick("-");
    setComputerPick("-");
    setResult("");
  }

  return <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Title text={"STEN | SAX | PÅSE"} />

      <Round playerPick={playerPick} computerPick={computerPick} />

      <View style={styles.infoText}>
        <CustomText text={result} />
      </View>

      <Score player={score.player} computer={score.computer} />

      <View style={styles.infoText}>
        <CustomText text={"Välj ditt drag!"} />
      </View>

      <View style={styles.choiceArea}>
        <ChoiceButton text={"Sten"} handlePress={battle} />
        <ChoiceButton text={"Sax"} handlePress={battle} />
        <ChoiceButton text={"Påse"} handlePress={battle} />
      </View>

      <View style={styles.resetButton}>
        <CustomButton text={"Nollställ"} pressHandler={reset} />
      </View>

    </View>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eecd14',
    paddingTop: 100
  },
  choiceArea: {
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  infoText: {
    alignItems: "center",
    marginVertical: 30
  },
  resetButton: {
    alignItems: "center"
  }
});
