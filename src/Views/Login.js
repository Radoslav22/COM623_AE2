import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../Components/LoginForm2";
import Tile from "../Components/Tile";




function Login() {


  const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  `;

  const StyledTile = styled(Tile)`
    display: grid;
    
    justify-content: center;
    grid-row-gap: 20px;
    width: 100%;
    @media (min-width: 600px) {
      width: 30%;
    }
  `;




  return (
    <StyledWrapper>
      <StyledTile>


        <Form buttonText="LOGIN" />

      </StyledTile>
    </StyledWrapper>
  );
}

export default Login;