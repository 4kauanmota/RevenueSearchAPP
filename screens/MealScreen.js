import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/functional/MealList";

function MealScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const validMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() =>{
    const category = CATEGORIES.find(({id}) => id == categoryId)

    navigation.setOptions({
      title: category.title
    })
  }, [])

  return (
    <View style={styles.container}>
      <MealList data={validMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});

export default MealScreen;
