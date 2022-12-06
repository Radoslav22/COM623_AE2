import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Button(props) {

  const { onClick, text } = props;

  const StyledButton = styled.button`
    height: 44.63px;
    background:#BAD9A2 ;
    border-radius: 22px;
    color: black;
    
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    margin-top: 6%;


    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
    text-transform: uppercase;
    color: #000000;
    width: 320px;
    height: 34px;
    left: 37px;
    top: 477px;

    background: #BAD9A2;
    border-radius: 50px;
  `;

  return (
    <StyledButton onClick={onClick}> {text} </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  onClick: () => { }
}

export default Button;