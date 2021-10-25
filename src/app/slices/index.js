import { combineReducers } from "redux";
import movieSlice from "./movieSlice";
import favouriteSlice from "./favouriteSlice";
import searchSlice from "./searchSlice";

const reducers = combineReducers({
    movie: movieSlice,
    favMovies : favouriteSlice,
    searched : searchSlice
})

export default reducers;