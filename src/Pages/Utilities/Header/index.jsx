import React, { useState, useRef } from 'react';
import { userLogout } from 'States/cognitoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useOnClickOutside from 'utils/useOnClickOutside';
import NewCardForm from 'Components/Forms/NewCardForm';
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
 import {
  ProfileMenuClass,
  HeaderFormWrap
 } from './styled';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginRef = useRef(null);
  const userSignInState = useSelector(isSignIn);
  const userDataState = useSelector(userData);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openAddNewCard, setOpenAddNewCard] = useState(false);

  let isCard = useLocation().pathname.includes('card/card-');
  
  useOnClickOutside(loginRef, () => setOpenProfileMenu(false));

  const RenderMenu = (
    <ProfileMenuClass ref={ loginRef } >
      <MenuItem>Profile</MenuItem>
      <MenuItem onClick={()=> setOpenAddNewCard(!openAddNewCard)}>Add new card</MenuItem>
      <MenuItem onClick={()=> setOpenProfileMenu(!openProfileMenu)}>
        <Button variant="contained" color="primary" onClick={()=> dispatch(userLogout({navigate}))}>Logout</Button>
      </MenuItem>
    </ProfileMenuClass>
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
          {!isCard &&
            <Avatar style={{backgroundColor: "#6bbbfd"}} onClick={()=>setOpenProfileMenu(!openProfileMenu)}>{userDataState?.userName.substring(0,1).toUpperCase()}</Avatar>
          }
        </Toolbar>
      </AppBar>
      { openAddNewCard && <HeaderFormWrap><NewCardForm setOpenNewCardForm={setOpenAddNewCard}/></HeaderFormWrap> }
      { openProfileMenu && (!openAddNewCard) && RenderMenu }
    </div>
  );
}

export default Header;