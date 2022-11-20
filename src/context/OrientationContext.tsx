import React from 'react';
import useOrientationHook from '../hooks/useOrientationHook';

type Props = {
  children: React.ReactNode;
};

export type OrientationContextType = {
    isPortrait: boolean | (() => boolean);
};

export const OrientationContext = React.createContext<
  OrientationContextType | undefined
>(undefined);

export const useOrientation = () => React.useContext(OrientationContext);

export const OrientationProvider = ({children}: Props) => {

  const [isPortrait, checkIsPortrait] = useOrientationHook();


  return (
    <OrientationContext.Provider value={{isPortrait}}>
      {children}
    </OrientationContext.Provider>
  );
};
