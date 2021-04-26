import React, { useState } from 'react';
import {
  Text,
  ImageBackground,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
function Signup(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert('First name is required');
    } else if (!email) {
      Alert.alert('Email field is required.');
    } else if (!password) {
      Alert.alert('Password field is required.');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
    } else {
      registration(
        email,
        password,
        lastName,
        firstName,
      );
      navigation.navigate('Loading');
      emptyState();
    }
  };
  const { navigation } = props
  return (
    <KeyboardAwareScrollView style={{flex:1}}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={require("../assets/Photos/background.jpg")}
          >
            
          </Image>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
               <Image
              style={styles.inputIcon1}
              source={{
                uri:
                  "https://img.icons8.com/flat-round/2x/circled-left-2.png",
              }}
            />
            </TouchableOpacity>
            <Text style={{color:'#54C571',fontSize:30,textAlign:'center',marginTop:20,padding:10}}>Register</Text>
        </View>
        <View style={{flex:5}}>
        <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri:
                  "https://cdn.iconscout.com/icon/free/png-64/user-1648810-1401302.png",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="First name"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#666"
              underlineColorAndroid="transparent"
              value={firstName}
              onChangeText={(name) => setFirstName(name)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri:
                  "https://cdn.iconscout.com/icon/free/png-64/user-1648810-1401302.png",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Last name"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#666"
              underlineColorAndroid="transparent"
              value={lastName}
          onChangeText={(name) => setLastName(name)}
            />
          </View>
        <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri:
                  "https://img.icons8.com/cute-clipart/2x/email.png",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={email}
              onChangeText={(email) => setEmail(email)}
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
              value={password}
              onChangeText={(password) => setPassword(password)}
              placeholderTextColor="#666"
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
              placeholder="Confirm Password"
              value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
              placeholderTextColor="#666"
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}
            style={[styles.buttonContainer, styles.submitButton]}
          >
            <Text style={styles.submit}>Register</Text>
          </TouchableOpacity>
         
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
          <Text>Already have any account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{color:'#54C571',fontWeight:'bold'}}> Signin</Text></TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
export default Signup;
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position:'relative',
    width: win.width,
    height: win.height / 5,
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
    top: 10,
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
  inputIcon1: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop:-90,
    padding:10,
    justifyContent: "flex-start",

  },
  buttonContainer: {
    top: 50,

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
