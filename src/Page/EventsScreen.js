import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Image } from 'react-native-svg';


export default function Events() {

    const [ event, setEvent ] = useState([])

    useEffect(() => {
        //http://localhost:3300/events
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
            <View style={styles.titre}>
              <Text style={styles.title}>Le meilleur du Festival 2022</Text></View>
              {
                event.map((ev) => (
                  <View style={styles.Event}>
                      <View>
                        <Text style={styles.name}>{ev.nameEvent}</Text>
                        <Text>{ev.localisation}</Text>
                        <Text>{ev.dateEvent}</Text>
                      </View>
                      <View>
                        <Button title='Prog'/>
                      </View>
                  </View>
                ))
              }
        </View>
    )
}

const styles = StyleSheet.create({
    containerEvent: {
      backgroundColor: '56D0CA',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      height: '100%'      
    },
    titre: {
      color: 'white',
      borderRadius: 15,
      padding: 10,
      marginBottom: 20,
    },
    title: {
      fontSize: 40,
      fontWeight: '900'
    },
    name: {
      fontSize: 20,
    },
    Event: {
      backgroundColor: 'white',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 20,
      width: '100%',
      margin: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.30,
      elevation: 13,
    }
  });