import {normalize} from './AppDimension';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Colors = {
  primary: '#25dd93',
  secondary: '#fec700',
  black: '#000',
  white: '#fff',
  red: '#FF0000',
  screenBg: "#f4f6f9",
  rating: '#ffc700',
  markerOpacity: '#25dd936e'
};

const FontsSize = {
  xsm: RFValue(11),
  sm: RFValue(14),
  md: RFValue(18),
  lg: RFValue(23),
  xxl: RFValue(33),
};


export default {
    Colors,
    FontsSize
}