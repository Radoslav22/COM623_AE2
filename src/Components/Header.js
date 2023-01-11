import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SolentLogo from "../assets/Solentlogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faStopwatch, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { MenuSharp, Close } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import useAuth from "../services/firebase/useAuth";
import HeaderMenu from "./Menu";

/// The native icons from the MUI




/* function Menu(props) {
  const { onClick } = props;
  const location = useLocation();
  const StyledNav = styled.nav`
    ul {  
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  const StyledLi = styled.li`
    margin-bottom: 10%;
    cursor: pointer;
    width: 100%;
    text-align: center;
    
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `;

  const StyledClosedText = styled.p`
    text-align: right;
    padding-right: 3%;
    margin-bottom: 15%;
    font-size: 18px;
    cursor: pointer;
  `;


  return (
    <div>
      <StyledClosedText onClick={onClick} ><Close sx={{ color: grey[100] }} />  </StyledClosedText>

      <StyledNav>
        <ul>
          <StyledLi active={location.pathname === "/"}>  <Link style={{ textDecoration: "none", color: "white", fontSize: "24px" }} to="/"><FontAwesomeIcon icon={faHome} /> Home </Link> </StyledLi>
          <StyledLi active={location.pathname === "/timer"}>  <Link style={{ textDecoration: "none", color: "white", fontSize: "24px" }} to="/timer"><FontAwesomeIcon icon={faStopwatch} /> Timer </Link> </StyledLi>
          <StyledLi active={location.pathname === "/calendar"}>  <Link style={{ textDecoration: "none", color: "white", fontSize: "24px" }} to="/calendar"><FontAwesomeIcon icon={faCalendar} /> Calendar </Link> </StyledLi>
          <StyledLi active={location.pathname === "/todo"}>  <Link style={{ textDecoration: "none", color: "white", fontSize: "24px" }} to="/todo"><FontAwesomeIcon icon={faList} /> Check List </Link> </StyledLi>
        </ul>
      </StyledNav>
    </div >
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
}; */

function Header(props) {

  const { onClick, open } = props;

  const handleClick = e => {

    e.preventDefault();
    onClick(e);

  };


  const { user, signUserOut } = useAuth();
  if (!user.uid) { return "" }


  const StyledBurgerMenu = styled.div`
    
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 40px;
    height: 40px;
    left: 22px;
    top: 24px;
    hr {
      margin: 4px 0 0 4px;
      width: 60%;
      border: 1px solid ${({ theme }) => theme.colors.darkShade[100]};
    }
  `;

  const StyledUserLogo = styled.div`
    
    position: absolute;
    
    height: 60px;
    right: 22px;
    top: 31px;
    `;

  const StyledMenuWrapper = styled.div`
    transition: all 1s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 90vh;
    width: 263px;
    background: ${({ theme }) => theme.colors.darkgreen};
    position: absolute;
    padding-top: 1%;
    top: 12vh;
    left: 0;
    
  `;

  const StyledWrapper = styled.div`
    width: 100%;
    
    height: 50px;
    display: flex;
    justify-content: space-between;

    
  `;
  const SolentImage = styled.div`
    align-items: center;
    
    display: flex;
    
    justify-content: space-between;
    img{
      position: absolute;
      
      height: 36px;
      left: 145px;
      top: 26px;
    }`



  return (
    <div  >
      <hr style={{ color: "none" }} />
      <StyledMenuWrapper open={open}>
        <HeaderMenu onClick={handleClick} />
      </StyledMenuWrapper>

      <StyledWrapper>

        <StyledBurgerMenu onClick={handleClick}>
          <MenuSharp color="grey" />
        </StyledBurgerMenu>
        <SolentImage>
          <img src={SolentLogo} alt="Solent Logo"></img>
        </SolentImage>
        <StyledUserLogo>

          <FontAwesomeIcon style={{ width: "27px", height: "27px" }} icon={faUser} />

        </StyledUserLogo>
      </StyledWrapper>
      <hr />
    </div >
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default Header;








{/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar> */}