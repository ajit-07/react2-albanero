import React from "react";
import PersLs from "./pers";

function PersonList(){
    const persons=[
        {
            id:1,
            name:'User 1',
            age:23,
            skill:'TS'
        },
        {
            id:2,
            name:'User 2',
            age:21,
            skill:'JS'
        },
        {
            id:3,
            name:'User 3',
            age:32,
            skill:'VS'
        }
    ]
    const pList=persons.map((person,index)=><PersLs key={index} person={person} ind={index}></PersLs>) //Passing props to the pers list component
    return(
     <div>{pList}</div>
    )
}

export default PersonList;