import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import picTimer from "../assets/timer.png"
import { Container } from '@mui/system';
import { useTimer } from "../Components/CountTimer"
import MuiButton from '@mui/material/Button';
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Timer(props) {
    const { pause, running, seconds, start, stop } = useTimer();
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, textAlign: "center", marginLeft: "auto", marginRight: "auto" }} >

            <Typography><h1>Timer</h1></Typography>
            <h5>For more productivity</h5>
            <h5>use the timer 112 min</h5>
            <h5>work, 26 min relax</h5>
            <img src={picTimer} alt="Timer" style={{ justifyContent: "center", alignItems: "center", marginLeft: 'auto', marginRight: 'auto', height: '50vh' }}></img>
            <div style={{ position: 'absolute', color: 'black', top: "55%", left: '50%', transform: 'translateX(-50%)' }} ><h4 id="counter">{dayjs.unix(seconds + 1672531200).format('hh:mm:ss')}</h4></div>
            <Container>
                <MuiButton onClick={running ? pause : start} sx={{ background: "#BAD9A2", color: 'black', mt: 3 }} fullWidth >Start/Pause</MuiButton>
                <MuiButton onClick={stop} sx={{ background: "#BAD9A2", color: 'black', mt: 3 }} fullWidth>Stop</MuiButton>
            </Container>
        </Box >
    )
}


export default Timer;







