import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import PerguntaTematica from "../screens/PerguntaTematica";
import About from "../screens/About";
import ConfigScreen from "../screens/ConfigScreen";
import QuestList from "../screens/QuestList";
import QuestListRandom from "../screens/QuestListRandom";
import QuestScreen from "../screens/QuestList/QuestScreen";



const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PerguntaTematica" component={PerguntaTematica} />
        <Stack.Screen name="Sobre" component={About} />
        <Stack.Screen name="Configurações" component={ConfigScreen} />
        <Stack.Screen name="QuestList" component={QuestList} />
        <Stack.Screen name="QuestListRandom" component={QuestListRandom} />
        <Stack.Screen name="QuestScreen" component={QuestScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
