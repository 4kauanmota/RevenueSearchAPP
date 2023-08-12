import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigation from "./DrawerNavigation";
import MealScreen from "../../screens/MealScreen"
import FoodScreen from "../../screens/FoodScreen";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: "#000000" },
        contentStyle: { backgroundColor: "#1c1d1f" },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Meals" component={MealScreen} />
      <Stack.Screen name="Food" component={FoodScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;