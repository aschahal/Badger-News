import { NavigationContainer } from '@react-navigation/native';
import { useContext, useState } from 'react';

import BadgerTabs from './navigation/BadgerTabs';
import CS571 from '@cs571/mobile-client';
import { PreferencesProvider } from './PreferenceContext';

export default function BadgerNews(props) {
    return (
      <PreferencesProvider>
        <NavigationContainer>
          <BadgerTabs />
        </NavigationContainer>
      </PreferencesProvider>
    );
}