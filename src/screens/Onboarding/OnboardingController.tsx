import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import onboardingImage1 from '../../assets/image1.png';
import onboardingImage2 from '../../assets/image2.png';
import onboardingImage3 from '../../assets/image3.png';

const OnboardingController = () => {
  const navigation: any = useNavigation();

  const [OnboardingList, setOnboardingList] = useState([
    { id: 1, image: onboardingImage1, title: 'Best Digital Solution' },
    { id: 2, image: onboardingImage2, title: 'Achieve Your Goal' },
    { id: 3, image: onboardingImage3, title: 'Increase Your Value' },
  ]);

  const onboardingRef: any = useRef(null);
  const scrollX: any = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < OnboardingList?.length - 1) {
      onboardingRef.current.scrollToIndex({ index: currentPage + 1 })
    };
  };

  const skipOnboarding = () => {
    if (currentPage < OnboardingList.length - 1) {
      onboardingRef.current.scrollToIndex({ index: 2 })
    };
  };

  const ViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentPage(viewableItems[0].index)
  }).current;

  const [biometryType, setBiometryType] = useState('');
  const isSensorAvailable = () => {
    FingerprintScanner.isSensorAvailable().then((biometryType) => {
      setBiometryType(biometryType);
    }).catch((error: any) => {
      console.warn('Its no possible identify FaceID/TouchID', error);
    });
  };

  const getMessage = () => {
    if (biometryType == 'Face ID') {
      return 'Scan Your Face on the Device to Continue';
    } else {
      return 'Scan Your Fingerprint on the Device Scanner to Continue';
    };
  };

  const authenticationAccount = () => {
    if (biometryType !== null && biometryType !== undefined) {
      FingerprintScanner.authenticate({
        description: getMessage()
      }).then(() => {
        navigation.navigate('Home');
      }).catch(() => {
        console.warn('Login has failed');
      });
    };
  };

  return { OnboardingList, scrollX, handleScroll, onboardingRef, currentPage, nextPage, skipOnboarding, ViewableItemsChanged, isSensorAvailable, authenticationAccount }
};

export default OnboardingController;