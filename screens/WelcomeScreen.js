import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    useColorScheme,
    Pressable,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
    const theme = useColorScheme();
    console.log("theme>>", theme);
    console.log("hello");

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
            <Pressable onPress={() => navigation.navigate("Menu")}>
                <Text style={styles.buttonText}>View Menu</Text>
            </Pressable>
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
    buttonText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#33333",
        textAlign: "center",
        padding: 5,
        marginHorizontal: "20%",
        borderRadius: 10,
        backgroundColor: "#f4ce15",
    },
});

export default WelcomeScreen;
