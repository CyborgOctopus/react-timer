import {React, useState, useEffect} from 'react';

export const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setTime(prevTime => prevTime + 1), 1000);
        return () => clearTimeout(timer);
    }, [time]);

    return <div>{time}</div>;
};
