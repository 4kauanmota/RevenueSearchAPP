import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FavoriteButton({onPress, color, icon}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => {
      return pressed && styles.pressed
    }}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  }
})

export default FavoriteButton;
