import { FlatList } from "react-native";

import MealsCard from "../ui/MealsCard";

function MealList({ data }) {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MealsCard
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

export default MealList;
