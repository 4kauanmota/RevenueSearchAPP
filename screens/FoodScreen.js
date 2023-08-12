import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import ListItem from "../components/ui/ListItem";
import Title from "../components/ui/Title";
import IconButton from "../components/functional/IconButton";
import colors from "../constants/colors";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favoriteContext";

function FoodScreen({ navigation, route }) {
  const favoriteContext = useContext(FavoriteContext);

  const foodId = route.params.foodId;
  const validFood = MEALS.filter((meal) => meal.id === foodId)[0];
  const isFavorite = favoriteContext.ids.includes(foodId);

  function isFavoriteHandler () {
    isFavorite ? favoriteContext.removeFavorite(foodId) : favoriteContext.addFavorite(foodId);
  }

  useLayoutEffect(() => {
    const meal = MEALS.find(({ id }) => id == foodId);

    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <IconButton icon={isFavorite ? 'star' : 'star-outline'} color="#ffffff" onPress={isFavoriteHandler} />;
      },
    });
  }, [navigation, isFavoriteHandler]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: validFood.imageUrl }} style={styles.image} />
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionArea}>
          <Text style={styles.description}>{validFood.duration}min</Text>
          <Text style={styles.description}>
            {validFood.complexity.toUpperCase()}
          </Text>
          <Text style={styles.description}>
            {validFood.affordability.toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.ingredientsContainer}>
        <Title style={styles.subTitle} textStyle={{ color: colors.secondary }}>
          Ingredients
        </Title>
        {validFood.ingredients.map((ingredient) => (
          <ListItem key={ingredient} item={ingredient} />
        ))}
      </View>

      <View style={styles.stepsContainer}>
        <Title style={styles.subTitle} textStyle={{ color: colors.secondary }}>
          Steps
        </Title>
        {validFood.steps.map((step) => (
          <ListItem key={step} item={step} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},

  imageContainer: {
    height: 200,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  descriptionContainer: {
    alignItems: "center",
    paddingTop: 16,
  },

  descriptionArea: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  description: {
    color: colors.white,
  },

  subTitle: {
    borderBottomWidth: 2,
    borderColor: colors.secondary,
    width: "70%",
  },

  ingredientsContainer: {
    paddingVertical: 8,
    alignItems: "center",
  },

  stepsContainer: {
    paddingVertical: 8,
    alignItems: "center",
  },
});

export default FoodScreen;
