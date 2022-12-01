import React from 'react';
import {Node} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HomeScreen/>
    </SafeAreaView>
  );
};



export default App;
