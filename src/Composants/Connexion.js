import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from 'native-base'


import { useNavigation } from '@react-navigation/native';
import { logger } from "react-native-logs";


export default function Connexion() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ user, setUser ] = useState([])

    const navigation = useNavigation()
    var ecrit = logger.createLogger()

    useEffect(() => {
        fetch(`http://10.0.2.2:3300/users`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data)
            console.log("Success ", data);
          })
          .catch((error) => {
            console.log("Error", error);
          });
      }, [])

    const verifProfil = () => {
        ecrit.info(email, password)
        navigation.navigate('Events')
    }

    return (
        <View>
            <Text>Connexion</Text>
    
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(emal) => setEmail(emal)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(pwd) => setPassword(pwd)}
                />
            </View>
            <Button onPress={ verifProfil }>Connexion</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divTitre: {
      borderRadius: '10px',
      backgroundColor: 'blue',
      padding: 10,
      marginBottom: 20
    },
    titre: {
      fontSize: 60,
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        width: "100%",
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      }
  });
