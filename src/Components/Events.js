import React, { useState, useEffect } from "react";
import useEvent from "../services/useEvent";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { Container } from "@mui/system";
import { Grid, ListItem } from "@mui/material";
import Box from '@mui/material/Box';
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Event(props) {
    const [events, setEvents] = useState([]);
    const { getEvent } = useEvent();



    const getEventData = async () => {
        const EventSnap = await getEvent();
        let events = [];
        if (EventSnap.size) {
            EventSnap.forEach((doc) => {
                events.push({ ...doc.data(), ...{ id: doc.id } });
            });
            setEvents(events.reverse());
            console.log(events);

        }
    };

    useEffect(() => {
        getEventData();
    }, []);


    return (
        <Box sx={{ overflow: 'hidden', px: 3 }}>




            {events.map((c) => (
                <Grid key={c.id} spacing={5} p={2}>
                    <ListItem sx={{ background: "#9DC4B5" }} >
                        <h5>{c.event} </h5><br />
                        <h6>Deadline {c.notes}</h6>
                        {/* <h5>{dayjs().to(c.time._seconds.toDate())}</h5> */}
                    </ListItem>
                </Grid>
            ))
            }
        </Box >
    );
}

Event.propTypes = {

};

export default Event;

