import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BgChanger() {

    const [bgColor, bgClrChanger] = useState('#FFFFFF')

    const createColor = () => {
        let colorCode = '0123456789ABCDEF'
        let color = "#"

        for (let i = 0; i < 6; i++) {
            let newColor = colorCode[Math.floor(Math.random() * 16)]
            color += newColor
        }
        bgClrChanger(color)
    }
    return (
        <>
            <StatusBar backgroundColor={bgColor} />
            <View style={[styles.container, { backgroundColor: bgColor }]}>
                <TouchableOpacity onPress={createColor}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnTxt}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: "#6A1B4D",
        padding:10,
        width:150,
        marginLeft:'29%'
    },
    actionBtnTxt: {
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
    }
})