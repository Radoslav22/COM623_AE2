import React, { useState, useEffect } from "react";
import useEvent from "../services/useEvent";
import Stack from '@mui/material/Stack';
import useAuth from "../services/firebase/useAuth";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#9DC4B5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: "100%"
}));

function Event(props) {
    const [events, setEvents] = useState([]);
    const { getEvent } = useEvent();
    const { user } = useAuth();


    const getEventData = async () => {
        const EventSnap = await getEvent();
        let events = [];
        if (EventSnap.size) {
            EventSnap.forEach((doc) => {
                events.push({ ...doc.data(), ...{ id: doc.id } });
            });
            setEvents(events.reverse());


        }
    };

    useEffect(() => {
        getEventData();
    }, []);


    return (
        <Box sx={{ overflow: 'hidden', px: 3 }}>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>



                {events.filter(c => c.userId === user.uid)
                    .map(c => (
                        <Item key={c.id}  >

                            <h6>{c.event} </h6>
                            <h6 style={{ textAlign: "center" }}>Deadline: {dayjs.unix(c.date.seconds).format("DD/MM/YYYY")} |
                                Start: {dayjs.unix(c.stime.seconds).format("hh:mm")} End: {dayjs.unix(c.etime.seconds).format("hh:mm")}
                            </h6>



                        </Item>
                    ))
                }
            </Stack>
        </Box >
    );
}

Event.propTypes = {

};

export default Event;

/*  <ListItem sx={{ widht: "20%", height: "30%", background: "#9DC4B5" }} >
                        
                         <h5></h5> 
                    </ListItem> */