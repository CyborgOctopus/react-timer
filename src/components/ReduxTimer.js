import { React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import timeSlice, { increment } from '../reducers/timeSlice';

export const ReduxTimer = () => {
    const dispatch = useDispatch();
    const time = useSelector(state => state.time.time);

    useEffect(() => {const timer = setTimeout(() => dispatch(increment()), 1000);
        return () => clearTimeout(timer);
    }, [time]);

    return <div>{time}</div>
};
