import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Events() {

    const [ event, setEvent ] = useState([])

    useEffect(() => {
        fetch(`https://api-festival.vercel.app/events`)
          .then((res) => res.json())
          .then((data) => {
            setEvent(data)
            console.log("Success ", data);
          })
          .catch((error) => {
            console.log("Error", error);
          });
      }, [])


    return (
        <View style={styles.containerEvent}>
            <View style={styles.titre}><Text>Evenements</Text></View>
            {
                event.map((ev) => (
                    <Text>{ev.nameEvent}</Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerEvent: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titre: {
      fontFamily: "Comic Sans MS, cursive, sans-serif",
      fontSize: 39,
      borderRadius: 15,
      backgroundColor: 'blue',
      padding: 10,
      marginBottom: 200
    },
  });