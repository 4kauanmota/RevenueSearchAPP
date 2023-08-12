import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoryScreen from "../../screens/CategoryScreen";
import FavoriteScreen from "../../screens/FavoriteScreen";
import colors from "../../constants/colors";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: colors.black },
        sceneContainerStyle: { backgroundColor: colors.gray },
        drawerContentStyle: { backgroundColor: colors.black },
        drawerInactiveTintColor: colors.white + "66",
      }}
    >
      <Drawer.Screen
        name="DrawerCategories"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          title: 'Categories',
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;