import React from "react";
import { StyleSheet, View, Text, Image, useColorScheme } from "react-native";
const WelcomeScreen = () => {
    const theme = useColorScheme();
    console.log("theme>>", theme);

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../img/littleLemonLogo.png")}
                accessible={true}
                accessibilityLabel="little lemon logo"
            />
            <Text
                style={[
                    styles.title,
                    theme === "light"
                        ? { color: "#333333" }
                        : { color: "#fff" },
                ]}
            >
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
    },
    image: {
        height: 250,
        width: 350,
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,

        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    logo: {
        height: 100,
        width: 300,
        resizeMode: "contain",
        alignSelf: "center",
    },
});

export default WelcomeScreen;
