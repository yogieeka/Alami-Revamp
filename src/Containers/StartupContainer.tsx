import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/Hooks';
import {Brand} from '@/Components';
import {setDefaultTheme} from '@/Store/Theme';
import {navigateAndSimpleReset} from '@/Navigators/utils';
import {Colors} from '@/Theme/Variables';

const StartupContainer = () => {
  const {Layout, Gutters, Fonts} = useTheme();

  const {t} = useTranslation();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({theme: 'default', darkMode: null});
    navigateAndSimpleReset('Main');
  };

  useEffect(() => {
    init();
  });

  return (
    <View style={[Layout.fill, Layout.colCenter, {backgroundColor: '#079DC7'}]}>
      <Brand />
      <ActivityIndicator
        color={Colors.white}
        size={'large'}
        style={[Gutters.largeVMargin]}
      />
      <Text style={[Fonts.textCenter, {color: Colors.white}]}>
        {t('welcome')}
      </Text>
    </View>
  );
};

export default StartupContainer;
