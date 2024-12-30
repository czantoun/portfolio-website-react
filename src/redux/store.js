
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import userInteractionReducer from './slices/userInteractionSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        userInteractions: userInteractionReducer,
    },
});

export default store;
