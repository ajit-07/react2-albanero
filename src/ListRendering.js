import React from "react";

function NameList() {
    const name = ['user1', 'user2', 'user3', 'user4']
    const nameList = name.map((nam,index) => {
        return <h2 key={index}>Key is ={index} for name ={nam}</h2>
    })

    return (
        <div>{nameList}</div>
    )
}
export default NameList;