import * as React from 'react';
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


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({

    add: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}

    >
      <List>

        <ListItem disablePadding>
          <ListItem>

            <TextField
              margin="normal"
              required
              fullWidth
              id="event"
              label="Name Event"
              name="event"
              autoComplete="event"
              type='text'
              autoFocus

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="notes"
              label="Notes for the event"
              type="text"
              id="notes"
              autoComplete="notes-event"

            />


            <ListItemText />
          </ListItem>
        </ListItem>

      </List>
      <Divider />
      <List>
        <ListItemIcon>
          <CustomButton text='Create Event' type='submit'></CustomButton>
        </ListItemIcon>
      </List>
    </Box>
  );

  return (
    <div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker />
      </LocalizationProvider>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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




