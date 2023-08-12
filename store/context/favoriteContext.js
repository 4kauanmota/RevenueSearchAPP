import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({children}) {
  const [favoriteMealsId, setFavoriteMealsId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsId((current) => [id, ...current])
  }

  function removeFavorite(id) {
    setFavoriteMealsId((current) => current.filter((currentId) => currentId !== id))
  }

  const value = {
    ids: favoriteMealsId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContextProvider;