import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";

export default function Responsive() {
    return (
        <View style={styles.box}>
            <View style={[{backgroundColor: 'red' },styles.box]} />
            <View style={[{backgroundColor: 'blue' },styles.box]}> 
                <Text style={[styles.text,{color:'white'}]}>
                    This is Text
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
    width: responsiveWidth(80), // 80% of screen width
    height: responsiveHeight(20),
  },
  text: {
    fontSize: responsiveFontSize(3), // 3% of screen height
  },
})