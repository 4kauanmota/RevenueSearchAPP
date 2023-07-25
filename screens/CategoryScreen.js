import { FlatList, ScrollView, StyleSheet, Text } from "react-native";

import { CATEGORIES } from "../data/dummy-data"

function CategoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <FlatList 
      data={CATEGORIES}
      renderItem={(data) => <Text> {data.item.title} </Text>}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
})

export default CategoryScreen;