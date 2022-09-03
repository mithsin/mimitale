import React, { useState, useRef } from 'react';
import { userLogout } from '../../States/cognitoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useOnClickOutside from '../../utils/useOnClickOutside';
// import NewCardForm from 'Components/ItemForm/NewCardForm';
import {
    isSignIn,
    userData
  } from 'States/userSlice';
import { 
    Avatar,
    AppBar,
    Button,
    Toolbar,
    MenuItem
 } from '@mui/material';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginRef = useRef(null);
  const userSignInState = useSelector(isSignIn);
  const userDataState = useSelector(userData);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openAddNewCard, setOpenAddNewCard] = useState(false);

  useOnClickOutside(loginRef, () => setOpenProfileMenu(false));

  const RenderMenu = (
    <ul className={"profileMenu"} ref={ loginRef } >
      <MenuItem>Profile</MenuItem>
      <MenuItem onClick={()=> setOpenAddNewCard(!openAddNewCard)}>Add new card</MenuItem>
      <MenuItem onClick={()=> setOpenProfileMenu(!openProfileMenu)}>
        <Button variant="contained" color="primary" onClick={()=> dispatch(userLogout({navigate}))}>Logout</Button>
      </MenuItem>
    </ul>
  );
  return (
    userSignInState === false ? '' :
    <div className="headerBlock">
      <AppBar position="static" style={{backgroundColor: "#ffffff00", boxShadow: "0 0 0 0", padding: "0px"}}>
        <Toolbar style={{display: "flex", justifyContent: "space-between", padding: "8px"}}>
          <Link to="/">
              <img 
                  style={{width: '100%'}}
                  className="logoClass"
                  src="https://res.cloudinary.com/paf1david/image/upload/v1599395992/pafpay/oljxozj8fby4beaefipe.png" 
                  alt="mimitale"/>
          </Link>
          <Avatar style={{backgroundColor: "#6bbbfd"}} onClick={()=>setOpenProfileMenu(!openProfileMenu)}>{userDataState?.userName.substring(0,1).toUpperCase()}</Avatar>
        </Toolbar>
      </AppBar>
      {/* { openAddNewCard && <NewCardForm setOpenNewCardForm={setOpenAddNewCard}/> } */}
      { openProfileMenu && (!openAddNewCard) && RenderMenu }
    </div>
  );
}