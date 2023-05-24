import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
    { name: "Hummus", id: "1A" },
    { name: "Moutabal", id: "2B" },
    { name: "Falafel", id: "3C" },
    { name: "Marinated Olives", id: "4D" },
    { name: "Kofta", id: "5E" },
    { name: "Eggplant Salad", id: "6F" },
    { name: "Lentil Burger", id: "7G" },
    { name: "Smoked Salmon", id: "8H" },
    { name: "Kofta Burger", id: "9I" },
    { name: "Turkish Kebab", id: "10J" },
    { name: "Fries", id: "11K" },
    { name: "Buttered Rice", id: "12L" },
    { name: "Bread Sticks", id: "13M" },
    { name: "Pita Pocket", id: "14N" },
    { name: "Lentil Soup", id: "15O" },
    { name: "Greek Salad", id: "16Q" },
    { name: "Rice Pilaf", id: "17R" },
    { name: "Baklava", id: "18S" },
    { name: "Tartufo", id: "19T" },
    { name: "Tartufo", id: "20U" },
    { name: "Tiramisu", id: "21V" },
    { name: "Panna Cotta", id: "22W" },
];
const header = () => <Text style={menuStyle.headerText}>View Menu</Text>
const footer = () => <Text style={menuStyle.footerText}>All right reserved by Little Lemon 2022</Text>
const separator = () => <View style={menuStyle.separator}> </View>;
const Item = ({ name }) => {
    return (
        <View style={menuStyle.container}>
            <Text style={menuStyle.innerText}>{name}</Text>
        </View>
    );
};

const MenuItem = () => {
    const renderItem = ({ item }) => {
        return <Item name={item.name}></Item>;
    };

    return (
        <View style={menuStyle.container}>
            <FlatList
                data={menuItemsToDisplay}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={separator}
                ListHeaderComponent={header}
                ListFooterComponent={footer}
            />
        </View>
    );
};

export default MenuItem;
const menuStyle = StyleSheet.create({
    container: {
        flex: 0.75,
    },
    innerContainer: {
        padding: 40,
        backgroundColor: green,
    },
    headerText: {
        fontSize: 40,
        flexWrap: "wrap",
        color: "white",
        textAlign: "center",
    },
    innerText: {
        color: yellow,
        fontSize: 30,
        paddingBottom: 20,
        paddingLeft: 30
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: "#EDEFFE",
    },
    footerText: {
        color: 'black',
        padding: 10,
        backgroundColor: yellow,
        textAlign: 'center'
    }
});
