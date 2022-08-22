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

import Iconslide from './Pages/Rnsvg';



const App = () => {
  return (
    <View style={{backgroundColor: '#F9F9F9'}}>
      <View style={{flex: 1}}>
        <ReactNativeSvg/>
          <View >
            <Text style={{color:'#000000', fontSize: 16, fontWeight: 'bold'}}>Sisa Saldo </Text>
            <Text style={{color:'#000000', fontSize: 16, fontWeight: 'bold'}}>Rp.  </Text>
          </View>
          <View style={{paddingVertical: 28, paddingHorizontal: 16}}>
            <TouchableOpacity onPress={}
            style={{
              backgroundColor: '#F9F9F9', 
              marginHorizontal: 208, 
              marginTop: 4, 
              justifyContent: 'center', 
              width: 136, 
              height: 40, 
              borderRadius: 12, 
              paddingHorizontal: 10
            }}>
            <Text style={{color:'#000000', fontSize: 14, fontWeight: 'bold'}}>Tambah Riwayat +</Text>
            </TouchableOpacity>

          </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{paddingVertical: 164, paddingHorizontal: 32}}>
          <Text style={{ color:'#000000', fontSize: 16, fontWeight: 'bold'}}>RIWAYAT TRANSAKSI</Text>
        </View>
        <View style={{flex: 0.85, height: 2.5, backgroundColor: '#D9D9D9'}} />
      </View>

      <View >
        <TouchableOpacity style={{backgroundColor: '#FFB28E',width: 300,  height: 75, borderRadius: 15,justifyContent: 'center', marginVertical: 200, marginHorizontal: 55}}>
        <Text style={{ color: '#000000', fontSize: 16, marginHorizontal: 20}}> 
        Riwayat Keseluruhan <Iconslide/>
        </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default App;
