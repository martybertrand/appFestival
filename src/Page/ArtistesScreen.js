import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Artistes extends React.Component {
  render() {
    return (
      <View>
        <Text>Listes des Artistes</Text>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

export default Artistes;