
import { createSlice } from '@reduxjs/toolkit';

const userInteractionSlice = createSlice({
    name: 'userInteractions',
    initialState: { formSubmissions: [] },
    reducers: {
        submitForm: (state, action) => {
            state.formSubmissions.push(action.payload);
        },
    },
});

export const { submitForm } = userInteractionSlice.actions;
export default userInteractionSlice.reducer;
