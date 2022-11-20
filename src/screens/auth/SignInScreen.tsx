import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Keyboard,
} from 'react-native';
import {ButtonCircle, Input} from '../../components/index';
import {useOrientation} from '../../context/OrientationContext';
import {SignInScreenProps} from '../../types/navigation';
import {RFPercentage} from '../../utils/AppDimension';
import Config from '../../utils/Config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useState} from 'react';
import {isLoginError} from '../../utils/Validations';
import { PASSWORD, USERNAME } from '@env';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const {isPortrait} = useOrientation()!;
  const navigation = useNavigation<SignInScreenProps>();
  
  const {setLoggedIn} = useAuth()!;

  const [validationError, setValidationError] = useState<string>();
  const [email, setEmail] = useState<string>(USERNAME);
  const [password, setPassword] = useState<string>(PASSWORD);

  const onLoginPress = () => {
    Keyboard.dismiss();
    const hasError = isLoginError(email, password);
    if(hasError){
      setValidationError(hasError);
    }
    else {
      setLoggedIn(true)
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.keyboard}>
        <View style={styles.welcomeContainer}>
          <Text adjustsFontSizeToFit style={styles.welcomeText}>
            Welcome!
          </Text>
          <Text adjustsFontSizeToFit style={styles.toConinue}>
            Sign in to continue
          </Text>
          <Image
            style={styles.pizza}
            source={require('../../assets/images/pizza.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={text => {
              setEmail(text);
              console.log(text);
            }}
            icon={
              <MaterialCommunityIcons
                name="email"
                size={25}
                color={Config.Colors.black}
              />
            }
          />
          <Input
            placeholder="Password"
            value={password}
            error={validationError}
            onChangeText={text => setPassword(text)}
            icon={
              <MaterialCommunityIcons
                name="lock"
                size={25}
                color={Config.Colors.black}
              />
            }
          />
          <View style={styles.btn}>
            <ButtonCircle
              icon={
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={25}
                  color={Config.Colors.white}
                />
              }
              color={Config.Colors.black}
              onPress={onLoginPress}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.Colors.primary,
  },
  btn: {
    alignItems: 'center',
    marginTop: RFPercentage(3),
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboard: {
    minHeight: '100%',
    padding: RFPercentage(4),
  },
  welcomeText: {
    fontSize: Config.FontsSize.xxl,
    color: Config.Colors.white,
    marginBottom: RFPercentage(1),
    fontWeight: 'bold',
  },
  toConinue: {
    fontSize: Config.FontsSize.md,
    color: Config.Colors.white,
  },
  pizza: {
    height: RFPercentage(10),
    width: RFPercentage(10),
    marginTop: RFPercentage(4),
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
