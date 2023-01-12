import { useCallback, useState } from "react";
import { interval } from "./interval";

const use1Second = interval(1e3);

export const useTimer = ({
    seconds: initialSeconds = 6720,
    running: initiallyRunning = false
} = {}) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [running, setRunning] = useState(initiallyRunning);
    const tick = useCallback(
        () => (running ? setSeconds(seconds => seconds - 1) : undefined),
        [running]
    );
    const start = () => setRunning(true);
    const pause = () => setRunning(false);
    const reset = () => setSeconds(6720);
    const stop = () => {
        pause();
        reset();
    };

    use1Second(tick);

    return { pause, reset, running, seconds, start, stop };
};