import React, {Component} from 'react';
import {TextInput, View, Text, TextInputProps, StyleSheet} from 'react-native';
import {RFPercentage} from '../utils/AppDimension';
import Config from '../utils/Config';
type InputProps = {
  error?: string;
  icon?: React.ReactNode;
};
const Input = ({placeholder, error, icon, ...rest}: TextInputProps & InputProps) => {
  return (
    <View>
      <View style={styles.containerStyle}>
        {icon}
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          style={styles.inputStyle}
          {...rest}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: Config.Colors.black,
    fontSize: 16,
    lineHeight: 23,
    marginHorizontal: 10,
  },
  containerStyle: {
    backgroundColor: Config.Colors.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 20,
    paddingStart: 20
  },
  error: {
    fontSize: Config.FontsSize.xsm,
    marginTop: RFPercentage(1),
    marginStart: RFPercentage(3),
    color: Config.Colors.red,
  },
});
export default Input;
