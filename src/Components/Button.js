import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MuiButton from '@mui/material/Button';

function Button(props) {

  const { onClick, text } = props;

  return (
    <MuiButton style={{ background: "#BAD9A2", color: 'black' }}
      onClick={onClick}
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }} > {text} </MuiButton >
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