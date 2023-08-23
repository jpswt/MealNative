import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
	const [meadIds, setMealIds] = useState([]);

	const addFavorite = (id) => {
		setMealIds((prevState) => [...prevState, id]);
	};

	const removeFavorite = (id) => {
		setMealIds((prevState) => prevState.filter((mealId) => mealId !== id));
	};

	const value = {
		ids: meadIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContextProvider;
