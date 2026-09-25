/*
        STEN – SAX – PÅSE

        Välj ditt drag!

    [ STEN ] [ SAX ] [ PÅSE ]

Du valde: Sten
Datorn valde: Sax

          DU VANN!

Spelare: 1       Dator: 0

        [ Nollställ ]
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Title from './components/texts/Title';
import CustomText from './components/texts/CustomText';

export default function App() {
  return <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Title text={"STEN | SAX | PÅSE"} />

      <View style={styles.infoText}>
        <CustomText text={"Välj ditt drag!"} />
      </View>

      <View style={styles.infoText}>
        <CustomText text={"Du van!"} />
      </View>

      <View style={styles.scoreArea}>
        <CustomText text={"Spelare: 1"} />
        <CustomText text={"|"} />
        <CustomText text={"Dator: 0"} />
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
  infoText: {
    alignItems: "center",
    marginVertical: 50
  },
  scoreArea: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
