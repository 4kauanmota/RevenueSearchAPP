import { FlatList, View, StyleSheet, Text } from "react-native";

import Card from "../components/ui/CategoryCard";
import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/ui/CategoryCard";

function navigationHandler(navigation, categoryId) {
  navigation.navigate("Meals", { categoryId: categoryId });
}

function CategoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryCard
            cardStyle={{ backgroundColor: item.color }}
            onPress={navigationHandler.bind(this, navigation, item.id)}
          >
            {item.title}
          </CategoryCard>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoryScreen;
