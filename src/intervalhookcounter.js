import React,{useEffect, useState} from "react";
//WE can also use multiple Useffects if we have different effects to be run.

function IntervalHookCounter(){
const[count,setCount]=useState(0)
const tick=()=>{
    setCount(prevCount=>prevCount+1)
}
useEffect(()=>{
    const interval=setInterval(tick,1000)
    return ()=>{
        clearInterval(interval)
    }
},[])
return (
    <div>
        {count}
    </div>
)
}
export default IntervalHookCounter;
