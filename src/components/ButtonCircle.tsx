import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RFPercentage} from '../utils/AppDimension';
import Config from '../utils/Config';

type ButtonProps = {
  onPress?: ()=> void;
  icon?: React.ReactNode;
  color?: string;
  size?: number;
};
const defaultSize = 7;
const ButtonCircle = ( props: ButtonProps) => {
  const {icon, onPress} = props;
  return (
    <TouchableOpacity style={styles(props).btnContainer} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = ({color, size}: ButtonProps) => StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: RFPercentage(size ?? defaultSize),
    width: RFPercentage(size ?? defaultSize),
    borderRadius: RFPercentage(10),
    backgroundColor: color
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
    fontSize: Config.FontsSize.sm,
    marginTop: RFPercentage(1),
    marginStart: RFPercentage(3),
    color: Config.Colors.red,
  },
});
export default ButtonCircle;
