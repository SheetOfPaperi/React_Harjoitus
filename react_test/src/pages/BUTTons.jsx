import React from "react";
import { useState } from "react";

export const Button = () =>{
    const[count,setCount] = useState(0);
    const[count2,setCount2] = useState(0);
    const[countR, setCountR] = useState(0);
    const[countR_, setCountR_] = useState(0);

    function countClicks(){
        setCount(count + 1);
    }
    function count2Clicks(){
        setCount2(count2 + 1);
    }
    function resetClicks(){
        setCountR_(countR_ + count + count2)
        setCount(0);
        setCount2(0);
        setCountR(countR + 1);
    }
    return(
        <div>
            <button onClick={countClicks}>ADD</button>
            <h4>{count}</h4>

            <button onClick={count2Clicks}>ADD</button>
            <h4>{count2}</h4>

            <button onClick={resetClicks}>RESET</button>
            <h4>Times reset:{countR}</h4>
            <h4>Amount reset:{countR_}</h4>
        </div>
    );
}