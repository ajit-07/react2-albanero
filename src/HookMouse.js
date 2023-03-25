import React, { useEffect, useState } from "react";
//call only in initial render and forget about it so for this we pass an empty array.//componentdidmount

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useeffect called')
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log('component unmount code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            HOOKS X-{x} Y-{y}
        </div>
    )
}
export default HookMouse