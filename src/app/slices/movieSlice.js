import { createSlice } from '@reduxjs/toolkit';
import { updateMovieSuccess } from './searchSlice';

const INITIAL_STATE = {
    movie: {
        id: null,
        description: null,
        genres: [],
        length: null,
        imageUrl: null,
        isFavourite: null,
        note: null,
        rating: 0,
    },
};

const movieSlice = createSlice({
    name: 'movie',
    initialState: { ...INITIAL_STATE },
    reducers: {
        getMovieSuccess: (state, action) => {
            state.movie = action.payload;
        },
    },
});
const { getMovieSuccess } = movieSlice.actions;

const getMovie = id => {
    const obj = { id };
    const query = queryGenerator(obj);
    return async dispatch => {
        try {
            const res = await fetch(`http://localhost:8000/movie?${query}`, { method: 'GET' });
            const movie = await res.json();
            dispatch(getMovieSuccess(movie));
        } catch (e) {
            console.log(e);
        }
    };
};

const updateRating = (rating, id) => {
    return async dispatch => {
        try {
            const res = await fetch(`http://localhost:8000/ratings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ rating, id }),
            });
            const movie = await res.json();
            dispatch(getMovieSuccess(movie));
        } catch (e) {
            console.log(e);
        }
    };
};

const updateNote = (note, id) => {
    return async dispatch => {
        try {
            const res = await fetch(`http://localhost:8000/notes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ note, id }),
            });
            const movie = await res.json();
            dispatch(getMovieSuccess(movie));
        } catch (e) {
            console.log(e);
        }
    };
};

const favouriteChange = (value, id) => {
    console.log(value, 'favourite');
    return async dispatch => {
        try {
            const res = await fetch(`http://localhost:8000/favourite`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ id, isFavourite: value }),
            });
            const movie = await res.json();
            dispatch(updateMovieSuccess(movie));
            dispatch(getMovieSuccess(movie));
        } catch (e) {
            console.log(e);
        }
    };
};

const queryGenerator = obj => {
    return Object.keys(obj)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
        .join('&');
};

export { getMovie, updateRating, updateNote, favouriteChange, queryGenerator };

export default movieSlice.reducer;
