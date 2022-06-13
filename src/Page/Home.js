import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.divTitre}>
          <Text style={styles.titre}>Festiv-App</Text>
        </View>
        <Text>L'application qui vous fait déjà danser !</Text>
        <Button
            title="Add some friends"
            onPress={() =>
              this.props.navigation.navigate('Friend')
            }
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Home

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
});