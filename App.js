import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextComponent, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonHeader";
import MenuItem from "./components/MenuItems";
import FeedBackForm from "./components/TextInputComponent";
import Welcome from "./components/welcome";
import WelcomeScreen from "./screens/WelcomeScreen";
import MenuScreen from "./screens/MenuScreen";
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
            >
                <Stack.Screen
                    options={{ title: "Home" }}
                    name="Welcome"
                    component={WelcomeScreen}
                />
                <Stack.Screen name="Menu" component={MenuScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});
