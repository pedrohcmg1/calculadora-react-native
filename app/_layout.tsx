import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [visor, setVisor] = useState("0");
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operador, setOperador] = useState(null);
  const [limparTela, setLimparTela] = useState(false);

  function addNumero(n) {
    if (limparTela) {
      setVisor(n);
      setLimparTela(false);
    } else {
      setVisor(visor === "0" ? n : visor + n);
    }
  }

  function limpaTudo() {
    setVisor("0");
    setValorAnterior(null);
    setOperador(null);
  }

  function escolheOperacao(op) {
    setOperador(op);
    setValorAnterior(visor);
    setLimparTela(true);
  }

  function calculaResultado() {
    let res = 0;
    let v1 = parseFloat(valorAnterior);
    let v2 = parseFloat(visor);

    if (operador === "+") {
      res = v1 + v2;
    } else if (operador === "-") {
      res = v1 - v2;
    } 

    setVisor(String(res));
    setLimparTela(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.display}>{visor}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={limpaTudo}>
          <Text style={styles.txt}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.txt}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => escolheOperacao("/")}>
          <Text style={styles.txt}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => escolheOperacao("*")}>
          <Text style={styles.txt}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("7")}><Text style={styles.txt}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("8")}><Text style={styles.txt}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("9")}><Text style={styles.txt}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => escolheOperacao("-")}><Text style={styles.txt}>-</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("4")}><Text style={styles.txt}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("5")}><Text style={styles.txt}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("6")}><Text style={styles.txt}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => escolheOperacao("+")}><Text style={styles.txt}>+</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("1")}><Text style={styles.txt}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("2")}><Text style={styles.txt}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("3")}><Text style={styles.txt}>3</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#c6d6c6' }]} onPress={calculaResultado}>
          <Text style={styles.txt}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => addNumero("0")}><Text style={styles.txt}>0</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#e5e5e5",
  },
  display: {
    fontSize: 40,
    textAlign: "right",
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  btn: {
    flex: 1,
    padding: 15,
    margin: 3,
    backgroundColor: "#d9d9d9",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    color: "#333",
  }
});