import React from 'react';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';

export default function useOrientation() {
  const [isPortrait, setPortrait] = React.useState<boolean>(false);

  const getScreenInfo = () => {
    const dim = Dimensions.get('window');
    return dim;
  };

  const checkIsPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};
 

useEffect(()=>{
    setPortrait(checkIsPortrait());
    Dimensions.addEventListener('change', () => {
        setPortrait(checkIsPortrait());
    });
},[])

  return [isPortrait, checkIsPortrait];
}
