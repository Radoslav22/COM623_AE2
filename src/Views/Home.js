import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Typography from '@mui/material/Typography';
import { Timer, CalendarToday, PlaylistAddCheck } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));



export default function AutoGridNoWrap() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Link href="/todo" color="inherit" sx={{ textDecoration: "none" }}>
        <StyledPaper sx={{ my: 6, mx: 'auto', p: 2, background: "#ADBF97" }}>
          <Grid container wrap="nowrap" spacing={3}>
            <Grid item >
              <Typography sx={{ fontSize: "20px", color: "white" }}>Check list</Typography>
            </Grid>
            <Grid item xs >

              <PlaylistAddCheck sx={{ fontSize: "100px", color: "white" }} />
            </Grid>
          </Grid>
        </StyledPaper>
      </Link>

      <Link href="/timer" color="inherit" sx={{ textDecoration: "none" }}>
        <StyledPaper sx={{ my: 10, mx: 'auto', p: 2, background: "#BAD9A2" }}>
          <Grid container wrap="nowrap" spacing={6}>

            <Grid item>
              <Typography sx={{ fontSize: "20px", color: "white" }}>Timer</Typography>

            </Grid>
            <Grid item xs >
              <Timer sx={{ fontSize: "100px", color: "white" }} />
            </Grid>
          </Grid>
        </StyledPaper>
      </Link>

      <Link href="/Calendar" color="inherit" sx={{ textDecoration: "none" }}>
        <StyledPaper sx={{ my: 10, mx: 'auto', p: 2, background: "#9DC4B5" }}>
          <Grid container >
            <Grid >
              <Typography sx={{ fontSize: "20px", color: "white" }}>Calendar</Typography>

            </Grid>
            <Grid item xs>
              <CalendarToday sx={{ fontSize: "100px", color: "white", display: 'block', marginLeft: '18%', marginRight: 'auto' }} />
            </Grid>
          </Grid>
        </StyledPaper>
      </Link>
    </Box>
  );
}