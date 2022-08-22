import { StyleSheet, Text, View, button } from 'react-native'
import React from 'react'

export default function pengeluaran() {
  return (
    <View>
        <TouchableOpacity 
        style={{
            backgroundColor: 'FF844B', 
            marginHorizontal: 208, 
            marginTop: 4, 
            justifyContent: 'center', 
            width: 136, 
            height: 40, 
            borderRadius: 12, 
            paddingHorizontal: 10
        }}>
        <Text style={{color:'#000000', fontSize: 14, fontWeight: 'bold'}}>Pengeluaran</Text>
    </View>
  )
}

const styles = StyleSheet.create({})