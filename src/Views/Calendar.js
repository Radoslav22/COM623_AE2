import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers';
import useEvent from '../services/useEvent';
import { useHistory } from 'react-router-dom';
import useAuth from "../services/firebase/useAuth";
import SubmitForm from '../Components/SubmitEventForm';
import Events from "../Components/Events";
import { useState, useEffect } from "react";
import MuiButton from '@mui/material/Button';



function Calendar() {
  const history = useHistory();
  const { user } = useAuth();
  const { getEvent } = useEvent();
  const [events] = useState([]);
  const [state, setState] = React.useState({

    add: false,

  });

  const { createEvent } = useEvent();

  const eventSubmit = async (event) => {
    const eventRecord = {

      ...{
        event: event.event,
        notes: event.notes,
        date: new Date(event.date),
        stime: new Date(event.date + " " + event.stime),
        etime: new Date(event.date + " " + event.etime),
        userId: user.uid
      },
    };
    try {
      await createEvent(eventRecord);
      history.push("/");
    } catch (e) {
      console.log(e);

    }
  }



  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250, textAlign: "center" }}
      role="presentation" >

      <SubmitForm onSubmit={eventSubmit} />

      <MuiButton onClick={toggleDrawer(anchor, false)} sx={{ background: "#BAD9A2", color: 'black', mt: 3, mb: 2 }} >Cancel</MuiButton>
    </Box>
  );

  return (
    <div style={{ textAlign: "center" }}>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker />
      </LocalizationProvider>


      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ background: "#BAD9A2", color: "black" }} onClick={toggleDrawer(anchor, true)}>Add Event</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}

          >

            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <Events />
    </div>
  );
}
export default Calendar;



