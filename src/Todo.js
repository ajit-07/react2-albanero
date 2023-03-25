import React, { useState } from "react";
import MemoComp from './memo'

function Todo() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(['Todo1', 'Todo2'])

    const inc = () => {
        setCount((c) => c + 1)
    }
    return (
        <>
            <MemoComp todos={todos} />
            <hr />
            <div>
                count:{count}
                <button onClick={inc}>Inc</button>
            </div>
        </>
    )

}
export default Todo