import { Pressable, StyleSheet, View, Image, Text } from "react-native";

import Title from "./Title";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

function MealsCard({id, imageUrl, title, duration, complexity, affordability, onPress}) {
  const navigation = useNavigation();

  function MealNavigationHandler() {
    navigation.navigate('Food', {
      foodId: id,
    });
  }

  return (
    <View style={styles.allContainer}>
      <Pressable style={styles.container} onPress={MealNavigationHandler}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageUrl,
            }} 
            style={[styles.image]}
          />
        </View>

        <View style={styles.titleContainer}> 
          <Title textStyle={{fontSize: 16}}>{title.toUpperCase()}</Title>
        </View>

        <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{duration}min</Text> 
            <Text style={styles.description}>{complexity.toUpperCase()}</Text> 
            <Text style={styles.description}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 10
  },

  container: {
    width: '80%',
    height: 250,
    backgroundColor: colors.black,
    borderRadius: 8,
    overflow: 'hidden'
  },

  imageContainer: {
    height: '63%',
    width: '100%',
  },

  image: {
    width: '100%',
    height: '100%'
  },

  titleContainer: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  descriptionContainer: {
    height: '13%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  description: {
    color: colors.secondary,
    fontWeight: 'bold',
  }
})

export default MealsCard;