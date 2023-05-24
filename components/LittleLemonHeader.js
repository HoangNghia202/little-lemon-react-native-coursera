import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function LittleLemonFooter() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}> Little Lemon</Text>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: '#F4CE14'
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#000',
        textAlign: 'center'
    }
})