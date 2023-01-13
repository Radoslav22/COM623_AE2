import React, { useState } from "react";
import styled from "styled-components";
import Tile from "../Components/Tile";
import Form from "../Components/LoginForm";
import useAuth from "../services/firebase/useAuth";



function Join(props) {
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

  const { createEmailUser, signInGoogleUser } = useAuth();
  const [severErrorMessage, setServerErrorMessage] = useState();

  const handleEmailSubmit = async (data) => {
    try {
      const { email, password } = data;
      await createEmailUser(email, password);
    } catch (e) {
      setServerErrorMessage(e.message);
    }
  };
  const handleSocialSubmit = async (method) => {
    try {

      if (method === "google") {
        await signInGoogleUser();
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <StyledWrapper>
      <StyledTile>
        <Form
          buttonText="REGISTER"
          onSocialSubmit={handleSocialSubmit}
          onEmailSubmit={handleEmailSubmit}
          serverErrorMessage={severErrorMessage}
        />
      </StyledTile>
    </StyledWrapper>
  );
}

Join.propTypes = {};

export default Join;
