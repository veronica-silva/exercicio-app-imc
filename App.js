import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const nomeDigitado = (valorNome) => {
    setNome(valorNome);
  };
  const pesoDigitado = (valorPeso) => {
    setPeso(valorPeso);
  };
  const alturaDigitada = (valorAltura) => {
    setAltura(valorAltura);
  };

  const alertaResultado = () => {
    let imc = (peso / (altura * altura)).toFixed(1);
    let result = "";
    console.log(imc);
    if (imc < 18.5) {
      result = "magreza";
    } else if (imc >= 18.5 && imc < 25) {
      result = "normalidade";
    } else if (imc >= 25 && imc < 30) {
      result = "sobrepeso";
    } else if (imc >= 30 && imc < 40) {
      result = "obesidade";
    } else {
      result = "obesidade grave";
    }
    return Alert.alert(
      `Olá ${nome}, `,
      `Seu imc é de ${imc}, por isso está em situação de ${result}.`
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>App IMC</Text>
        </View>
        <View style={styles.form}>
          <View>
            <TextInput
              placeholder="Informe seu nome"
              style={styles.campoLinha1}
              onChangeText={nomeDigitado}
              value={nome}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.linha2}>
            <TextInput
              placeholder="Peso (Ex: 80)"
              keyboardType="numeric-pad"
              style={styles.campoLinha2}
              onChangeText={pesoDigitado}
              value={peso}
            />
            <TextInput
              placeholder="Altura (Ex: 1.75)"
              style={styles.campoLinha2}
              keyboardType="decimal-pad"
              onChangeText={alturaDigitada}
              value={altura}
            />
          </View>

          <Button title="Calcular IMC" onPress={alertaResultado} />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginVertical: 8,
  },
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cabecalho: {
    backgroundColor: "black",
    marginVertical: 32,
  },
  titulo: {
    color: "white",
    textAlign: "center",
    fontSize: 48,
    padding: 8,
    fontWeight: "bold",
  },
  form: {
    padding: 24,
  },
  campoLinha1: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
  },
  linha2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  campoLinha2: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
  },
});
