import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'

export default function FeedBackForm() {
    const [firstName, onchangeFirstName] = useState("")
    const [lastName, onchangeLastName] = useState("")
    const [message, onchangeMessage] = useState("")

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={styles.headingSection}>
                    How was you visit to little lemon?
                </Text>
                <Text style={styles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that servers simple food and
                    classic cocktails in a lively but casual environment. We would love to hear
                    your experience with us
                </Text>

                <TextInput style={styles.input} value={firstName} onChangeText={onchangeFirstName} placeholder='First name' />
                <TextInput style={styles.input} value={lastName} onChangeText={onchangeLastName} placeholder='Last name' />
                <TextInput style={styles.messageInput} value={message} onChangeText={onchangeMessage} placeholder='Message' />
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(63, 84, 79)',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14'
    },
    infoSection: {
        fontSize: 20,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    headingSection: {
        fontSize: 28,
        padding: 30,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#3f544f'
    }
})