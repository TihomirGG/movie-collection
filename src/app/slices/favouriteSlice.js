import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    movies: [],
};

const favMovies = createSlice({
    name: 'favMovies',
    initialState: { ...INITIAL_STATE },
    reducers: {
        favMoviesSuccess(state, action) {
            state.movies = action.payload;
        },
    },
});

const { favMoviesSuccess } = favMovies.actions;

const getFavMovies = () => {
    return async dispatch => {
        try {
            const res = await fetch('http://localhost:8000/favourite', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const favouritesMovies = await res.json();

            dispatch(favMoviesSuccess(favouritesMovies));
        } catch (e) {
            console.log(e);
        }
    };
};
export { getFavMovies };

export default favMovies.reducer;
