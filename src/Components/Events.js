import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAuth from "../services/firebase/useAuth";


import styled from "styled-components";

import Histogram from "./Histogram";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useEvent from "../services/useEvent";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
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
        }
    };

    useEffect(() => {
        getEventData();
    }, []);


    return (
        <Stack sx={{ width: '100%' }} spacing={2}>




            {events.map((c) => (
                <Alert severity="error" key={c.id}>{c.event}</Alert>
            ))}
        </Stack>
    );
}

Event.propTypes = {

};

export default Event;

