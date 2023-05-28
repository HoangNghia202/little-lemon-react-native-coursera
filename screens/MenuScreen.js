import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    SectionList,
    Pressable,
} from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
    {
        title: "Appetizers",
        data: [
            "Hummus",
            "Moutabal",
            "Falafel",
            "Marinated Olives",
            "Kofta",
            "Eggplant Salad",
        ],
    },
    {
        title: "Main Dishes",
        data: [
            "Lentil Burger",
            "Smoked Salmon",
            "Kofta Burger",
            "Turkish Kebab",
        ],
    },
    {
        title: "Sides",
        data: [
            "Fries",
            "Buttered Rice",
            "Bread Sticks",
            "Pita Pocket",
            "Lentil Soup",
            "Greek Salad",
            "Rice Pilaf",
        ],
    },
    {
        title: "Desserts",
        data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
    },
];

const header = () => <Text style={menuStyle.headerText}>View Menu</Text>;
const footer = () => (
    <Text style={menuStyle.footerText}>
        All right reserved by Little Lemon 2022
    </Text>
);
const separator = () => {
    return <View style={menuStyle.separator} />;
};

const Item = ({ name }) => {
    return (
        <View style={menuStyle.container}>
            <Text style={menuStyle.innerText}>{name}</Text>
        </View>
    );
};

export default function MenuItem() {
    const [openMenu, setOpenMenu] = useState(false);

    const renderItem = ({ item }) => {
        return <Item name={item}></Item>;
    };

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={menuStyle.headerText}>{title}</Text>
    );

    return (
        <View style={menuStyle.container}>
            <Text style={menuStyle.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. View our menu to explore our cuisine with daily
                specials!
            </Text>

            {/* <Pressable
                style={menuStyle.button}
                onPress={() => setOpenMenu(!openMenu)}
            >
                <Text style={menuStyle.buttonText}>
                    {!openMenu ? "View Menu" : "Home"}
                </Text>
            </Pressable> */}

            <SectionList
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={separator}
                ListFooterComponent={footer}
            />
        </View>
    );
}

const menuStyle = StyleSheet.create({
    container: {
        flex: 0.95,
        backgroundColor: "rgb(72, 93, 87)",
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: green,
    },
    headerText: {
        fontSize: 30,
        flexWrap: "wrap",
        color: "black",
        textAlign: "center",
        backgroundColor: "#F6D5B8",
    },
    innerText: {
        color: yellow,
        fontSize: 30,
        paddingBottom: 20,
        paddingLeft: 30,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: "#EDEFFE",
    },
    footerText: {
        color: "#000000",
        padding: 10,
        backgroundColor: yellow,
        textAlign: "center",
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: "#EDEFEE",
        borderColor: "#EDEFEE",
        borderWidth: 2,
        borderRadius: 12,
    },
    buttonText: {
        color: "#333333",
        textAlign: "center",
        fontSize: 32,
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
        backgroundColor: "#495E57",
    },
});
