import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Stack, Input, Icon, NativeBaseProvider, Button } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { logger } from "react-native-logs";
import Connexion from '../Composants/Connexion';

export default function Login() {

    const [ log, setLog ] = useState(0)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [show, setShow] = useState(false);
    const [ user, setUser ] = useState([])
    const navigation = useNavigation()
    var ecrit = logger.createLogger()

    /*useEffect(() => {
        fetch(`http://localhost:3300/users`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data)
            console.log("Success ", data);
          })
          .catch((error) => {
            console.log("Error", error);
          });
      }, []);*/

    const changeEmail = (emal) => {
        setEmail(emal)
    }
    const verifProfil = () => {
        ecrit.info(email, password)
        navigation.navigate('Events')
    }

    const Connexiion = () => {
        return (
            <View>
                <Text>Connexion</Text>
                
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={changeEmail}
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
                <Button onPress={() => setLog(1)}>S'inscrire ?</Button>
            </View>
        )
    }

    const Inscription = () => {
        return (
            <View>
                <Text>Inscription</Text>
                <Button onPress={() => setLog(0)}>Déjà inscrit, connectez-vous ?</Button>
            </View>
        )
    }

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.divTitre}>
                    <Text style={styles.titre}>Festiv-App</Text>
                </View>
                <Text>L'application qui vous fait déjà danser !</Text>
                {
                    log == 0
                    ? <Connexion/>
                    : <Inscription/>
                }
            </View>
        </NativeBaseProvider>
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
