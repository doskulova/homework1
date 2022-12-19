import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function CountPage() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const increment=()=>{
        dispatch({
            type:"INCREMENT"
        })
    }
    const decrement=()=>{
        dispatch({
            type:"DECREMENT"
        })
    }
    return (
        <div className="col">
            <div className="box">
                <button onClick={increment}>increment</button>
                <h1>{count}</h1>
                <button onClick={decrement}>decrement</button>
            </div>
        </div>
    );
}

export default CountPage;