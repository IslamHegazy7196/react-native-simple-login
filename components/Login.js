import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import MyForm from "./myForm";

const Login = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../assets/lcologo.png")} />
        <Text style={styles.title}>simple login APP</Text>
      </View>
      <View style={styles.myform}>
        <MyForm />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#00acee",
    width: Dimensions.get("window").width,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  myform: {
    flex: 1,
  },
  title: {
    color: "#fff",
  },
});
