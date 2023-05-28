import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
const Welcome = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require("../img/littleLemonLogo.png")}
                    accessible={true}
                    accessibilityLabel="little lemon logo"
                />
                <Text style={styles.title}>
                    Little lemon, your local mediterranean Bistro
                </Text>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require("../img/Picture1.png")}
                    accessible={true}
                    accessibilityLabel="Food picture 1"
                />
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require("../img/Picture2.png")}
                    accessible={true}
                    accessibilityLabel="Food picture 2"
                />
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require("../img/Picture3.png")}
                    accessible={true}
                    accessibilityLabel="Food picture 3"
                />
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require("../img/Picture4.png")}
                    accessible={true}
                    accessibilityLabel="Food picture 4"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: "#fff",
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
