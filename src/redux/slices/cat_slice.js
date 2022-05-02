import { createSlice } from '@reduxjs/toolkit';

const initState = { cats: [], catForUpdate: null };

const catSlice = createSlice({
    name: 'catShit',
    initialState: initState,
    reducers: {
        addCat: (state, action) => {
            const { name } = action.payload;
            const newCat = { name, id: new Date().getTime() };
            state.cats.push(newCat);
        },

        deleteCat: (state, action) => {
            const { id } = action.payload;
            const index = state.cats.findIndex((cat) => cat.id === id);
            state.cats.splice(index, 1);
        },

        setCatForUpdate: (state, action) => {
            state.catForUpdate = action.payload.cat;
        },

        updateCat: (state, action) => {
            const { id, name } = action.payload;
            const index = state.cats.findIndex((cat) => cat.id === id);
            state.cats[index].name = name;
            state.catForUpdate = false;
        }
    }
});

const { reducer, actions: { addCat, deleteCat, setCatForUpdate, updateCat } } = catSlice;

export default reducer; // Export as default
// Export as default can be only one object, also as default import can be only one.
// No matter what name use in that import, default imported object will be renamed.
// export default anyExportName;
// import setImportName from './folder/file';

export const actionsCat = {
    addCat, deleteCat, setCatForUpdate, updateCat
}