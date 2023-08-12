import { View, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function ListItem({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: colors.secondary,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4
  },

  text: {
    
  }
})

export default ListItem;