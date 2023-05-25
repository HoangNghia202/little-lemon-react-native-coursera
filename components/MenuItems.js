import React from "react";
import { View, Text, ScrollView, StyleSheet, SectionList } from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            'Hummus',
            'Moutabal',
            'Falafel',
            'Marinated Olives',
            'Kofta',
            'Eggplant Salad',
        ],
    },
    {
        title: 'Main Dishes',
        data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
        title: 'Sides',
        data: [
            'Fries',
            'Buttered Rice',
            'Bread Sticks',
            'Pita Pocket',
            'Lentil Soup',
            'Greek Salad',
            'Rice Pilaf',
        ],
    },
    {
        title: 'Desserts',
        data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
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
        console.log('item>>', item);
        return <Item name={item}></Item>;
    };

    const renderSectionHeader = ({ section: { title } }) => <Text style={menuStyle.headerText}>{title}</Text>

    return (
        <View style={menuStyle.container}>
            <SectionList sections={menuItemsToDisplay} renderItem={renderItem}
                renderSectionHeader={renderSectionHeader} ItemSeparatorComponent={separator} ListFooterComponent={footer} />
        </View>
    );
};

export default MenuItem;
const menuStyle = StyleSheet.create({
    container: {
        flex: 0.95,
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
        backgroundColor: "#F6D5B8"
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
        color: '#000000',
        padding: 10,
        backgroundColor: yellow,
        textAlign: 'center'
    }
});
