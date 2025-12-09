import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Responsive() {
    return (
        <View style={{ flex: 1, padding: 8 }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
        </View>
    )
}

const styles = StyleSheet.create({})