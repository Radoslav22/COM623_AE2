import * as React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import CustomButton from '../Components/Button';
import { useForm } from "react-hook-form";
import useEvent from '../services/useEvent';
import { useHistory } from 'react-router-dom';
import useAuth from "../services/firebase/useAuth";




export default function TemporaryDrawer(props) {
  const history = useHistory();
  const { user } = useAuth();
  const [state, setState] = React.useState({

    add: false,

  });
  const { onSubmit } = props;
  const { createEvent } = useEvent();


  const eventFormSchema = yup
    .object({
      event: yup.string().required("you must define event name"),
      notes: yup.string().required("you must tell more about your event"),
      date: yup.string().required("you must define date"),
      stime: yup.string().required("you must define start time"),
      etime: yup.string().required("you must define end time"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(eventFormSchema),
    defaultValues: { event: "", notes: "", date: "", stime: "", etime: "" },
  });

  const onFormSubmit = (data) => {

    onSubmit({ ...data });
  };
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
      console.log(e);
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation">
      <form onSubmit={handleSubmit(eventSubmit)}>
        <List>

          <ListItem disablePadding>
            <ListItem>

              <TextField
                margin="normal"
                required

                id="event"
                label="Name Event"
                name="event"
                autoComplete="event"
                type='text'
                autoFocus
                {...register("event")}
              />



              <ListItemText />
            </ListItem>
          </ListItem>

        </List>
        <Divider />
        <ListItem disablePadding>
          <ListItem>
            <TextField
              margin="normal"
              required

              name="notes"
              label="Notes for the event"
              type="text"
              id="notes"
              autoComplete="notes-event"
              {...register("notes")}
            />


            <ListItemText />
          </ListItem>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItem>
            <TextField
              margin="normal"
              required

              name="date"
              label="Date Event"
              type="date"
              id="date"
              autoComplete="date"
              {...register('date')}

            />


            <ListItemText />
          </ListItem>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItem>
            <TextField
              margin="normal"
              required

              name="stime"
              label="Start time"
              type="time"
              id="stime"
              autoComplete="stime"
              {...register("stime")}
            />
            <TextField
              margin="normal"
              required

              name="etime"
              label="etime"
              type="time"
              id="etime"
              autoComplete="etime"
              {...register("etime")}
            />


            <ListItemText />
          </ListItem>
        </ListItem>
        <Divider />
        <List>
          <ListItemIcon>
            <CustomButton text='Create Event' type='submit'></CustomButton>
            <button onClick={toggleDrawer(anchor, false)}> Cancel</button>
          </ListItemIcon>
        </List>
      </form>
    </Box>
  );

  return (
    <div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker />
      </LocalizationProvider>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Add</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}




