import React from "react";
import {memo} from 'react'
//when the parent component todo is getting re rendered the child id also getting re-rendered
//to avoid this and make sure that this comp gets rendered only when todos prop changes we use memo.

function MemoComp({todos}){
    console.log('child rendered')
    return(
        <>
        <h2>Memo Comp</h2>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
        </>
    )
}
export default memo(MemoComp)
//Now this component is going to re-render only when the props passed to it changes that todos.