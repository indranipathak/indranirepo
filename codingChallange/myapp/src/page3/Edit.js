import React, { useState } from 'react';
import ShowAllUserToDelete from './showusers';
const axios = require("axios");
const Edit=()=>{
    const [currentId,setcurrentID]=useState("");
    const [newFirstName,setUserFirstName]=useState("");
    // const [newLastName,setUserLastName]=useState("");
    // const [newAge,setAge]=useState("");
    return(
        <div>
        <input type="text" placeholder=" Enter ID" required onChange={(event)=>{
            setcurrentID(event.target.value);
           }}/>
        <input type="text" placeholder=" Enter new first name" onChange={(event)=>{
            setUserFirstName(event.target.value);
           }}/>
           <button  onClick={() => {
                      let object={
                      firstName:newFirstName
                  }
                  axios.patch('http://localhost:7080/post/user/update/'+currentId,object)
                  .then(()=>{
                      console.log("name updated");
                  })  
                    
              }
            }> Submit </button>
        </div>

    )
}
export default Edit;