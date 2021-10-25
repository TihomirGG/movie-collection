import { createSlice } from '@reduxjs/toolkit';
import { queryGenerator } from './movieSlice';

const INITIAL_STATE = {
    searched: [],
};

const searchSlice = createSlice({
    name: 'searched',
    initialState: { ...INITIAL_STATE },
    reducers: {
        getSearchedSuccess: (state, action) => {
            state.searched = action.payload;
        },
        updateMovieSuccess: (state, action) => {
            const index = state.searched.findIndex(x => x._id === action.payload._id);
            state.searched[index] = action.payload;
        },
    },
});

export const { getSearchedSuccess, updateMovieSuccess } = searchSlice.actions;

const search = keyword => {
    if (!keyword) return;
    const obj = { keyword };
    const query = queryGenerator(obj);
    console.log(keyword);
    return async dispatch => {
        try {
            const res = await fetch(`http://localhost:8000/search?${query}`, { method: 'GET' });
            const movies = await res.json();
            dispatch(getSearchedSuccess(movies));
        } catch (e) {
            console.log(e);
        }
    };
};

export { search };
export default searchSlice.reducer;
