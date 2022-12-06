import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

function Dash(props) {



  const HeadingStyled = styled.div`
    text-align: center;
    font-size:24px 
  `
  ///${({ theme }) => theme.typography.h2};
  return (
    <div>
      <HeadingStyled>
        <p>Welcome to</p>
        <p>Student time management</p>
        <p>helper</p>
      </HeadingStyled>
    </div >
  );
}

Dash.propTypes = {
  checkins: PropTypes.array.isRequired
};

export default Dash;


