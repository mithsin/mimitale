import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';

import userReducer from 'States/userSlice';
import linkUserReducer from 'States/linkUserSlice';
import cognitoReducer from 'States/cognitoSlice';


// const rootPersistConfig = {
//     key: 'root',
//     storage,
// }

// const persistConfig = {
//     key: 'cognito',
//     storageSession,
//   }

// const rootReducer = combineReducers({
//     userState: userReducer,
//     linkCardState: linkUserReducer,
//     cognitoState: cognitoReducer,
// })

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer
// })

// export const persistor = persistStore(store)

// export default configureStore({
//     reducer: {
//         userState: userReducer,
//         linkCardState: linkUserReducer,
//         cognitoState: cognitoReducer,
//     },
// });

export const store = configureStore({
    reducer: {
        cognitoState: cognitoReducer,
        linkCardState: linkUserReducer,
        userState: userReducer,
    },
});
