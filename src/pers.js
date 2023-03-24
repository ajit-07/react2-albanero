import React from "react";


function PersLs({person,ind}){ //receiving props form the personList component.
    return (
        <div>
            <h2>I am {person.name} and age is {person.age} and skill is {person.skill} and the key is= {ind}</h2>
        </div>
    )
}
export default PersLs;