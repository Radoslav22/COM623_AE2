import React from "react";
import PropTypes from "prop-types";
import MuiButton from '@mui/material/Button';

function SubmitButton(props) {

  const { text } = props;

  return (
    <MuiButton style={{ background: "#BAD9A2", color: 'black' }}

      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }} > {text} </MuiButton >
  )
}

SubmitButton.propTypes = {

  text: PropTypes.string.isRequired
}

SubmitButton.defaultProps = {
  onClick: () => { }
}

export default SubmitButton;