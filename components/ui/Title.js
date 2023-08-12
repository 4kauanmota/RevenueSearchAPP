import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function Title({children, style, textStyle}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  }
})

export default Title;