import { NativeBaseProvider } from 'native-base';
import React, { Component } from 'react';
import Routes from './src/Routes/Routes.js'

//redux
import { Provider } from 'react-redux';
import  ReduxStore  from './src/redux/store'


class App extends Component {
   render() {
      return (
         <Provider store={ReduxStore}>
            <Routes/>
         </Provider>
            
      )
   }
}
export default App
