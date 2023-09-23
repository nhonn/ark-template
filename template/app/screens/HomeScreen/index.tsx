import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

import Layout from '../../layouts';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <Layout.Base>
      <Text>{t('homeScreen.welcome')}</Text>
    </Layout.Base>
  );
};
