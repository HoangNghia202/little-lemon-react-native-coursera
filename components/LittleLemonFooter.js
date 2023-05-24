import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 1, backgroundColor: "#F4CE14" }}>
            <Text style={{ padding: 30, fontSize: 30, color: "black" }}> Little Lemon</Text>
        </View>
    )
}