import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
const win = Dimensions.get("window");
const styles = StyleSheet.create({
 
  bg: {
    flex: 3,
  },
  bg1: {
    backgroundColor: "#f1f1f1",
    flex: 6,
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    width: win.width,
    resizeMode: "center",

    height: win.height / 3,
  },
  logo: {
    height: 180,
    width: 180,
  },
  headline: {
    color: "#54C571",
    top: -25,
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  login: {
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#000",
  },
  inputContainer: {
    borderColor: "#fff",
    backgroundColor: "#F5FCFF",
    borderRadius: 20,
    borderBottomWidth: 1,
    padding: 20,
    justifyContent: "center",
    width: "90%",
    height: 60,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    top: 0,
  },
  inputs: {
    height: 45,
    marginLeft: 16,

    borderBottomColor: "#f1f1f1",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    // marginLeft: 0,
    justifyContent: "center",
  },
  buttonContainer: {
    top: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 50,
    width: 250,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitButton: {
    backgroundColor: "#54C571",
  },
  submit: {
    color: "white",
    fontSize: 18,
  },
});