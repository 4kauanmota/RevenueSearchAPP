import { StyleSheet, View, Text, Pressable } from "react-native";

function CategoryCard({ children, cardStyle, contentStyle, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.cardPressable,
          pressed ? { opacity: 0.7 } : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.card, cardStyle]}>
          <Text style={[styles.content, contentStyle]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },

  card: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: "#cccccc11",
    borderRadius: 8,
  },

  cardPressable: {
  },

  content: {

  },
});

export default CategoryCard;
