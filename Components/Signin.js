import React, { useContext, useState } from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {SignIn} from './FirebaseMethod';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
function Signin(props) {
  const { navigation } = props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }

    SignIn(email, password);
    setEmail('');
    setPassword('');
  };
  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1 }}>
        <View style={styles.bg}>
          <ImageBackground
            style={styles.img}
            source={require("../assets/Photos/background.jpg")}
          >
            <Image
              style={styles.logo}
              source={require("../assets/Photos/logo.png")}
            />
            <Text style={styles.headline}>React Native App</Text>
          </ImageBackground>
        </View>
        <View style={styles.bg1}>
          <View>
            <Text style={styles.login}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/cute-clipart/2x/email.png",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#666"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={require("../assets/unlock.png")}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#666"
              onChangeText={(password) => setPassword(password)}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity onPress={handlePress} onPress={()=>navigation.navigate('Home')}
            style={[styles.buttonContainer, styles.submitButton]}
          >
            <Text style={styles.submit}>Login</Text>
          </TouchableOpacity>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              top: 10,
            }}
          >
            <Text style={{ marginRight: 20 }}>Don't have any Account</Text>

            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
              <Text
                style={{ color: "#54C571", fontWeight: "bold", marginLeft: 20 }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
export default Signin;
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  bg: {
    flex: 3,
  },
  bg1: {
    backgroundColor: "#f1f1f1",
    flex: 6,
    top: -40,
    borderTopLeftRadius: 50,
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
    bottom: 20,
  },
  headline: {
    color: "#54C571",
    top: -35,
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
