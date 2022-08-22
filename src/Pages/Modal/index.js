import Modal from "react-native-modal";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';

const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

 return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text>SET TANGGAL</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );



const K_Options = ["Makanan dan Minuman", "Transportasi", "PEndidikan", "Pakaian", "Kesehatan", "Kecantikan", "Pajak", "Rumah Tangga", "Peliharaan", "Sosial"]

<SelectDropdown>
	data={K_Options}
	onSelect=(selectedItem, index) => {
		console.log(selectedItem, index)
	}
	buttonTextAfterSelection=(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}
	rowTextForSelection=(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}
</SelectDropdown>