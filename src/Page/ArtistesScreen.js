import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Artistes() {

  const [ artiste, setArtiste ] = useState([])
  const [ modal, setModal ] = useState(false)
  const [ id, setId ] = useState(0)

  useEffect(() => {
    //http://localhost:3300/artistes
    fetch(`https://api-festival.vercel.app/artistes`)
      .then((res) => res.json())
      .then((data) => {
        setArtiste(data)
        console.log("Success ", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [])

  const GetModal = () => {
    return (
    artiste
      .filter( art => art.idArtiste === id )
      .map((art) => (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal(!modal);
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.PhotoModal} source={{uri:`${art.photo}`}}/>
            <Text style={styles.modalText}>{art.nameArtiste}</Text>

            <View>
              <Text>Styles : {art.style}</Text>
              <Text>Age : {art.age}ans</Text>
            </View>

            <View>
              <Text>{art.description}</Text>
            </View>

            <Button
              title='Retour'
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(!modal)}
            />

          </View>
        </View>

        </Modal>
      )))
  }

    return (
      <ScrollView>
          {
            artiste.map((art) => (
              <View key={art.idArtiste} style={styles.Artiste}>
                <GetModal/>
                <View>
                  <Text>{art.nameArtiste}</Text>
                  <Button
                    title='Description'
                    onPress={() => { setModal(true); setId(art.idArtiste) } }
                  />
                </View>

                <View>
                  <Image style={styles.Photo} source={{uri:`${art.photo}`}}/>
                </View>                
              </View>
            ))
          }
      </ScrollView>

    );
}

const styles = StyleSheet.create({
  Artiste: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
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
  },
  Photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  PhotoModal: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});