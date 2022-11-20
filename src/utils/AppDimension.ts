import { Dimensions, PixelRatio } from 'react-native';
import { OrientationContextType } from '../context/OrientationContext';
export { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const {
    width,
    height,
} = Dimensions.get('window');

export function normalize(size: number, isPortrait: OrientationContextType['isPortrait'] = true, multiplier = 2) {

    let scale = (width / height) * multiplier;
    if(isPortrait === false) {
        scale = (height / width) * 10;
    }
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}