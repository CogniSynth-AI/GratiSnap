import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { signup } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);

  async function handleSignUp () {
    setLoading(true);
    try{
        await signup(email, password);
    } catch {
        alert("Error");
    }
    setLoading(false);
  }
    
  async function handleLogin () {
    setLoading(true);
    try{
        await login(email, password);
    }catch{
        alert("Error");
    }
    setLoading(false);
  }

  return (
    <KeyboardAvoidingView
        style = {styles.container}
        behaviour = "padding"
    >
        <View style = {styles.inputContainer}>
            <TextInput
                placeholder = "Email"
                value = {email}
                onChangeText = {text => setEmail(text)}
                style = {styles.input}
            />
            <TextInput
                placeholder = "Password"
                value = {password}
                onChangeText = {text => setPassword(text)}
                style = {styles.input}
                secureTextEntry
            />
        </View>

        <View style = {styles.buttonContainer}>
            <TouchableOpacity
                onPress = {handleLogin}
                style = {styles.button}
            >
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled = {loading}
                onPress = {handleSignUp}
                style = {[styles.button, styles.buttonOutline]}
            >
                <Text style = {styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#66FF99',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#66FF99',
        borderWidth: 2,
    },
    buttonText:{
        color: 'white',
        fontWeight: 700,
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#66FF99',
        fontWeight: 700,
        fontSize: 16,
    },
})