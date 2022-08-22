import React, { useState, useEffect } from 'react';

import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TouchableWithoutFeedback
} from 'react-native';

import ReactNativeSvg from './Pages/ReactNativeSVG';

const App = () => {
  return (
    <View style={{backgroundColor: '#F9F9F9'}}>
      <View style={{flex: 1}}>
        <ReactNativeSvg/>
          <View >
            <Text style={{color:'#FFFFFF', fontSize: 16, fontWeight: 'bold'}}>RIWAYAT TRANSAKSI KESELURUHAN</Text>
          </View>

      </View>
    </View>
  );
};

export default App;
