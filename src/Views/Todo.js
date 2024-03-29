import React from "react";

import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { EventAvailable } from "@mui/icons-material";
import ProgressBar from "../Components/ProgressBar";
import useAuth from "../services/firebase/useAuth";
import Event from "../Components/Events";



const Todo = () => {
  const { user } = useAuth();
  if (!user.uid) { return "" }
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 2 }}>

      <Typography align="center" sx={{ marginRight: "15vh", mt: 2 }}><h4>Hello, {user.displayName || user.email}</h4>  </Typography>

      <StyledPaper sx={{ my: 6, mx: 'auto', p: 2, background: "#E2EB98" }}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item xs >
            <Typography sx={{ fontSize: "20px", color: "grey" }}>Today <br /><br /> 3/10 Tasks </Typography>
          </Grid>
          <Grid item>

            <EventAvailable sx={{ fontSize: "100px", color: "black" }} />
          </Grid>
        </Grid>
        <ProgressBar percentage={30} />
        <Grid sx={{ display: "flex" }}>
          <h6 >0%</h6><h6 style={{ marginLeft: "85%" }}>100%</h6>

        </Grid>

      </StyledPaper>

      <Typography sx={{ textAlign: "center", marginRight: "40vh" }}><h4>To do{Event.docs}</h4></Typography>

      <Event />
    </Box >
  );
};

export default Todo;
