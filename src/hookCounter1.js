import React, { useState, useEffect } from "react";
//After every render of the componenet the use effect function runs.
//For conditionaly executing an effect we pass a second parameter that is array and only those props state value changes
//then use effect will be executed.

function HookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    useEffect(() => {
        console.log('Use effect called')
        document.title = `you clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        </div>
    )
}
export default HookCounter;