import React, { useState } from "react";
import styled from "styled-components";
import Form from "../Components/LoginForm";
import Tile from "../Components/Tile";
import useAuth from "../services/firebase/useAuth";




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

  const [serverErrorMessage, setServerErrorMessage] = useState();
  const { signInEmailUser, signInFacebookUser, signInGoogleUser } = useAuth();

  const handleEmailSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInEmailUser(email, password);
    } catch (e) {
      setServerErrorMessage(e.message);
    }
  };

  const handleSocialSubmit = async (method) => {
    try {
      if (method === "facebook") {
        await signInFacebookUser();
      }
      if (method === "google") {
        await signInGoogleUser();
      }
    } catch (error) {
      console.log("error" + error);
    }
  };



  return (
    <StyledWrapper>
      <StyledTile>



        <Form
          buttonText="LOGIN"
          serverErrorMessage={serverErrorMessage}
          onEmailSubmit={handleEmailSubmit}
          onSocialSubmit={handleSocialSubmit}
        />

      </StyledTile>
    </StyledWrapper>
  );
}

export default Login;