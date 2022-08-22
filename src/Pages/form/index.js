import React from 'react';
import { Text, TextInput, View } from 'react-native';

const form = () => {
  return (
    <View>
      <Text style={{color: '#9F9F9F', fontSize: 13}}>Kategori</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name me!"
      />
    </View>
  );
}

export default fomr;