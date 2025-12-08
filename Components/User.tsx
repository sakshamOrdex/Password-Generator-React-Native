import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  // Load saved data when app starts
  useEffect(() => {
    loadData();
  }, []);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      console.log('Data saved successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      if (value !== null) {
        setSavedName(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Enter Your Name</Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Save Name" onPress={saveData} />

      <Button title="Load Saved Name" onPress={loadData} />

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Saved Name: {savedName}
      </Text>
    </View>
  );
}
