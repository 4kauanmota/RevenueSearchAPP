import { Pressable, StyleSheet, View, Image, Text } from "react-native";

import colors from "../../constants/colors";

function MealsCard({imageUrl, title, duration, complexity, affordability, onPress}) {
  return (
    <View style={styles.allContainer}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageUrl,
            }} 
            style={[styles.image]}
          />
        </View>

        <View style={styles.titleContainer}> 
          <Text style={[styles.title]}>{title.toUpperCase()}</Text>
        </View>

        <View style={styles.descriptionContainer}>
            <Text>{duration}m</Text> 
            <Text>{complexity.toUpperCase()}</Text> 
            <Text>{affordability.toUpperCase()}</Text>
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
  },

  container: {
    width: '80%',
    height: 250,
    backgroundColor: colors.white,
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

  title: {
    fontWeight: 'bold',

  },

  descriptionContainer: {
    height: '13%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  }
})

export default MealsCard;