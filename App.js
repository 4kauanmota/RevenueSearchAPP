import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./components/navigation/StackNavigation";
import FavoriteContextProvider from "./store/context/favoriteContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.container}>

        <FavoriteContextProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </FavoriteContextProvider>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
