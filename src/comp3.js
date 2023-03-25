import React,{useContext} from "react";
import {userContext,learnContext} from './index'
/*function Component3(){
    return(
        <div>
           <userContext.Consumer>
               {u=>{
                   return(
                       <learnContext.Consumer>
                           {
                               learn=>{
                                   return <div>I am {learn} ,User context Vaue {u}</div>
                               }
                           }
                       </learnContext.Consumer>
                   ) 
               }}
           </userContext.Consumer>
        </div>
    )
}*/
function Component3(){
    const user=useContext(userContext)  //here useContext hook returns the value of the userContext provider.
    const learn=useContext(learnContext)
    return(
        <div>
            {user} - {learn}
        </div>
    )
}
export default Component3

//Now to reduce this complexity of the code we use usecontext hook.