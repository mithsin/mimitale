import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'States/userSlice';
import linkUserReducer from 'States/linkUserSlice';
import cognitoReducer from 'States/cognitoSlice';

export default configureStore({
    reducer: {
        userState: userReducer,
        linkCardState: linkUserReducer,
        cognitoState: cognitoReducer,
    },
});

// cognitoState: cognitoReducer,