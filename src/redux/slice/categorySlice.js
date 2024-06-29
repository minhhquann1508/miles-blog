import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: null
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateCategories: (state, action) => {
            state.categories = action.payload.categories;
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateCategories } = categorySlice.actions

export default categorySlice.reducer