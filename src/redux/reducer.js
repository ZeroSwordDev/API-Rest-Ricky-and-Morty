import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER ,DELETE_FAVORITE_CARD } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
     case  DELETE_FAVORITE_CARD:
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((e) => e.id !== action.payload),
      };
    case FILTER:
      const filterCopy = [...state.allCharacters];
      const filtro =
        action.payload === "All"
          ? state.allCharacters
          : filterCopy.filter((item) => item.gender === action.payload);
      return {
        ...state,
        myFavorites: filtro,
      };
    case ORDER:
      const stateCopy = [...state.allCharacters];
      if (action.payload === "ascendente")
        stateCopy.sort((a, b) => a.id - b.id);
      if (action.payload === "descendente")
        stateCopy.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: stateCopy,
      };

    default:
      return state;
  }
};
