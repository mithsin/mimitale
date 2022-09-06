import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateCardData } from 'States/linkUserSlice';

export const userSlice = createSlice({
    name: 'userState',
    initialState: {
        UserId: '',
        userName: '',
        eMail: '',
        date: '',
        givingList: [],
        receivingList: [],
        receivingPendingList: [],
        shopStoreList: [],
        shoppingList: [],
        isSignIn: false
    },
    reducers: {
        setUserId: (state, action) => {
            state.UserId = action.payload;
        },
        setLoginInitialState: (state, action) => {
            return {...state, ...action.payload}
        },
        setIsSignInState: (state, action) => {
            state.isSignIn = action.payload;
        },
        setEnterCredentials: (state, action) => {
            state.noCredentials = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setReceivingList: (state, action) => {
            state.receivingList = state.receivingList.concat(action.payload);
        },
        setReceivingPendingList: (state, action) => {
            state.receivingPendingList = action.payload
        },
        setShopStoreList: (state, action) => {
            state.shopStoreList = action.payload
        },
        setShoppingList: (state, action) => {
            state.shoppingList = action.payload
        },
        setUpdateCard: (state, action) => {
            const givingArr = state.givingList.map( item => {
               return ( item.CardId !== action.payload.CardId) 
                ? item 
                : {...item, ...action.payload};
            })
            const receivingArr = state.receivingList.map( item => {
                return ( item.CardId !== action.payload.CardId)
                ? item
                : {...item, ...action.payload};
            })
            return {...state, givingList: givingArr, receivingList: receivingArr}
        },
        setUpdateNewCard: (state, action) => {
            return {
                ...state,
                givingList: [...state.givingList, action.payload]
            }
        },
        setDeleteCardUpdate: (state, action) => {
            state.givingList = action.payload
        }
    },
});
 
export const {
    setUserId,
    setEnterCredentials, 
    setIsSignInState,
    setLoginInitialState,
    setUserName,
    setReceivingList,
    setReceivingPendingList,
    setUpdateCard,
    setUpdateNewCard,
    setDeleteCardUpdate,
    setShopStoreList,
    setShoppingList,
} = userSlice.actions;

const UserAPI = process.env.REACT_APP_API_GATEWAY_URL;

export const updateUserInitState = ( UserId, idToken ) => dispatch => {
    // initial original data then call for update
    dispatch(setLoginInitialState(JSON.parse(localStorage.getItem("userInitialState"))));

    axios.get(`${UserAPI}/user?UserId=${UserId}`, {
        headers: { 'Authorization' : idToken }
    })
        .then(res => {
            if(res.data === null){
                dispatch(setUserId(UserId))
            } else {
                localStorage.setItem("userInitialState", JSON.stringify(res.data));
                dispatch(setLoginInitialState({...res.data}));
            }
        })
        .catch(err => console.log(err))
}

// update shopping-list
export const updateUserShoppingList = ( params ) => dispatch => {
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {},
    };
    // console.log('params==updateUserShoppingList==============>: ', params)
    axios.put(`${UserAPI}/user/shopping-list`, params, config)
        .then(res => {
            if(res.data.status === 200){
                params?.shopStoreList && dispatch(setShopStoreList(params.shopStoreList))
                params?.shoppingList && dispatch(setShoppingList(params.shoppingList))
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

// update card info aws /card
export const updateCardInfo = (params) => dispatch => {
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {},
    };
    // console.log('params==updateCardInfo==============>: ', params)
    axios.put(`${UserAPI}/card`, params, config)
        .then(res => {
            if(res.data.status === 200){
                dispatch(setUpdateCard({...params}));
                dispatch(updateCardData({...params}));
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

export const updateCardItemsList = (params) => dispatch => {
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {},
    };
    // console.log('params==updateCardInfo==============>: ', params)
    axios.put(`${UserAPI}/card/items-list`, params, config)
        .then(res => {
         
            if(res.data.status === 200){
                dispatch(setUpdateCard(params));
                dispatch(updateCardData(params));
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

// update card info aws /card
export const createNewCard = (params) => dispatch => {
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {},
    };
    axios.post(`${UserAPI}/card`, params, config)
        .then(res => {
            if(res.data.status === 200){
                dispatch(setUpdateNewCard(res.data.newCardData))
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

// delete a card by id
export const deleteCard = (params) => (dispatch, getState) => {
    const giverFilterFullList = getState().userState.givingList.filter((card)=> card.CardId !== params.CardId );
    const giverFilterIdList = giverFilterFullList.map(card => card.CardId);
    const newParams = {...params, givingList: giverFilterIdList};
    const config = {
        headers: {
            accept: 'application/json',
        },
        data: {...newParams},
    };
    
    axios.delete(`${UserAPI}/card`, config)
        .then(() => {
            dispatch(setDeleteCardUpdate(giverFilterFullList))
        })
        .catch(err => console.log('api-updatecard-err: ', err))
}

export const linkUpdateCardUser = (params) => dispatch => {
    axios.put(`${UserAPI}/card/usercardlink`, params)
        .then(res => {
            if(res.data.status === 200){
                dispatch(setUpdateCard(params));
                dispatch(updateCardData(params));
            }
        })
        .catch(err => console.log('api-updatecard-err: ', err))
    
}
export const cardAdaptAction = (params) => dispatch => {
    const pendingCard = params?.updateReceivingListAction;
    const newParams = {
        CardId: params.CardId,
        UserId: params.UserId,
        receivingList: params.receivingList,
        receivingPendingList: params.receivingPendingList,
        cardSetting: params.cardSetting
    }
    axios.put(`${UserAPI}/card-adapt`, newParams)
        .then(res => {
            if(res.data.status === 200){
                if(pendingCard){
                    dispatch(setReceivingList(pendingCard))
                }
                dispatch(setReceivingPendingList(newParams.receivingPendingList));
            }
        })
        .catch(err => console.log('api-receivingPendingList-err: ', err))
}


export const userData = state => state.userState;
export const userName = state => state.userState.userName;
export const UserId = state => state.userState.UserId;
export const eMail = state => state.userState.eMail;
export const date = state => state.userState.date;
export const noCredentials = state => state.userState.noCredentials;
export const givingList = state => state.userState.givingList;
export const receivingList = state => state.userState.receivingList;
export const isSignIn = state => state.userState.isSignIn;
export const userShopStoreList = state => state.userState.shopStoreList;
export const userShoppingList = state => state.userState.shoppingList;

export default userSlice.reducer;