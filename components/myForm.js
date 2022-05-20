import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const myForm = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="username" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default myForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#206f98",
    paddingVertical: 15,
  },
  buttontext: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
