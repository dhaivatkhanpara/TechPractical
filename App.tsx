import {NavigationContainer} from '@react-navigation/native';
import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AuthProvider} from './src/context/AuthContext';
import {OrientationProvider} from './src/context/OrientationContext';
import AppStack from './src/screens/stack/AppStack';
import rootReducer from './src/slice';
import {Provider} from 'react-redux';

const store = configureStore({reducer: rootReducer});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <OrientationProvider>
          <AuthProvider>
            <NavigationContainer>
              <AppStack />
            </NavigationContainer>
          </AuthProvider>
        </OrientationProvider>
      </Provider>
    </SafeAreaView>
  );
};
export default App;
