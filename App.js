import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextComponent, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonHeader";
import MenuItem from "./components/MenuItems";
import FeedBackForm from "./components/TextInputComponent";
import Welcome from "./components/welcome";
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuScreen from "./screens/MenuScreen";
import { Ionicons } from "@expo//vector-icons";
import TabBarIcon from "@react-navigation/bottom-tabs/src/views/TabBarIcon";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function LogoTitle() {
    return (
        <Image
            source={require("./img/littleLemonSmall.png")}
            style={{
                heigh: 40,
                width: 300,
                resizeMode: "contain",
                alignSelf: "center",
            }}
        />
    );
}

export default function App() {
    return (
        // Stack Navigator
        // <NavigationContainer>
        //     <Stack.Navigator
        //         initialRouteName="Welcome"
        //         screenOptions={{
        //             headerStyle: {
        //                 backgroundColor: "#333333",
        //                 textAlign: "center",
        //             },
        //             headerTintColor: "#fff",
        //             headerTitleStyle: {
        //                 fontWeight: "bold",
        //             },
        //         }}
        //     >
        //         <Stack.Screen
        //             name="Welcome"
        //             component={WelcomeScreen}
        //             options={{
        //                 title: "Home",
        //                 // headerTitle: (props) => <LogoTitle {...props} />,
        //             }}
        //         />
        //         <Stack.Screen name="Menu" component={MenuScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>

        // Bottom Tab Navigator
        // <NavigationContainer>
        //     <BottomTab.Navigator
        //         screenOptions={(route) => {
        //             tabBarIcon: ({ focused, color, size }) => {
        //                 let iconName;
        //                 if (route.name === "Welcome") {
        //                     iconName = focused
        //                         ? "ios-information-circle"
        //                         : "ios-information-circle-outline";
        //                 } else if (route.name === "Menu") {
        //                     iconName = focused ? "ios-list-box" : "ios-list";
        //                 }
        //                 return (
        //                     <Ionicons
        //                         name={iconName}
        //                         size={size}
        //                         color={color}
        //                     />
        //                 );
        //             };
        //         }}
        //     >
        //         <BottomTab.Screen name="Welcome" component={WelcomeScreen} />
        //         <BottomTab.Screen name="Menu" component={MenuScreen} />
        //     </BottomTab.Navigator>
        // </NavigationContainer>

        // Drawer Navigator
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Welcome">
                <Drawer.Screen name="Welcome" component={WelcomeScreen} />
                <Drawer.Screen name="Menu" component={MenuScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});
