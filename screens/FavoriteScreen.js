import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/functional/MealList";
import { FavoriteContext } from "../store/context/favoriteContext";
import colors from "../constants/colors";

function FavoriteScreen() {
  const foodIds = useContext(FavoriteContext).ids;

  const validMeals = MEALS.filter((meal) =>
    foodIds.includes(meal.id)
  );

  if(validMeals.length === 0){
    return (
      <View style={styles.noFavoriteContainer}>
        <Text style={styles.noFavoriteText}> You have no favorite meals yet. </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MealList data={validMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  noFavoriteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  noFavoriteText: {
    color: colors.white
  },

  container: {
    flex: 1,
    marginBottom: 20,
  },
});

export default FavoriteScreen;
