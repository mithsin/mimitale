import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'States/userSlice';
import linkUserReducer from 'States/linkUserSlice';
import cognitoReducer from 'States/cognitoSlice';
import cardReducer from 'States/cardSlice';

export const store = configureStore({
    reducer: {
        cognitoState: cognitoReducer,
        linkCardState: linkUserReducer,
        userState: userReducer,
        cardState: cardReducer,
    },
});
