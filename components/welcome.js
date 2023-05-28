import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const Welcome = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../img/littleLemonLogo.png")}
            />
            <Text style={styles.title}>
                Little lemon, your local mediterranean Bistro
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: "#fff",
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: "#333333",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    logo: {
        height: 100,
        width: 300,
        resizeMode: "contain",
    },
});

export default Welcome;
