import React from "react";
import PropTypes from "prop-types";
import theme from "../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faList, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";



function Home(props) {


  const HomeWrapper = styled.div`
    display:contents;
    text-align: center;
    justify-content: center;
  `
  const HeadingStyled = styled.div`
    text-align: center;
  `

  const HomeList = styled.ul`
  
  padding: 0;
 
  display: inherit;
   
  

  justify-content: center; 
  `
  const HomeItems = styled.li`
    
    border-radius: 5%;
    text-align: left;
    color: white;

    width: 303px;
    height: 107px;
    
    margin: 5% 0 0 10% ;
    
    border-radius: 10px;
    cursor: pointer;
  `
  const IconDiv = styled.div`
    display:flex;
    justify-content: center;
    margin-top:-2%;
    
    
  `


  return (
    <div>
      <HomeWrapper>

        <h3>Welcome to</h3>
        <h3>Student time management</h3>
        <h3>helper</h3>


        <HomeList>

          <HomeItems style={{ background: theme.colors.navygreen }}>
            <h5>Check List</h5>
            <IconDiv>
              <FontAwesomeIcon style={{ width: "86px", height: "86px" }} icon={faList} />
            </IconDiv>
          </HomeItems>

          <HomeItems style={{ background: theme.colors.green }}>
            <h5>Timer</h5>
            <IconDiv>
              <FontAwesomeIcon style={{ width: "86px", height: "86px" }} icon={faStopwatch} />
            </IconDiv>
          </HomeItems>

          <HomeItems style={{ background: theme.colors.greenblue }}>
            <h5>Calendar</h5>
            <IconDiv>
              <FontAwesomeIcon style={{ width: "86px", height: "86px" }} icon={faCalendar} />
            </IconDiv>
          </HomeItems>

        </HomeList>

      </HomeWrapper>
    </div >
  );
}

Home.propTypes = {
  checkins: PropTypes.array.isRequired
};

export default Home;


