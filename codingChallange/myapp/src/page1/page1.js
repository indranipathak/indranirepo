import moment from "moment";
import react, { useState } from "react";
import AllTasks from "../page2/page2";
const axios=require('axios');

// import {Button} from "@material-ui/core";
// import Button from "@material-ui/core/Button";
//  import AddIcon from '@material-ui/icons/Add';
function AddUser()
{ 
    const [id,setId]=useState();
    const [email,setEmail]=useState("");
    const [age,setAge]=useState();
    const [firstname,setName]=useState("");
    const [lastname,setlastName]=useState("");
    const [listElements,setlistElements]=useState([]);
    const idEvent=(event)=>
    {
        setId(event.target.value);
    };
    const emailEvent=(event)=>{
        setEmail(event.target.value);
    }
    const ageEvent=(event)=>{
        setAge(event.target.value);
    }
    const nameEvent=(event)=>{
        setName(event.target.value);
    }
    const lastnameEvent=(event)=>{
        setlastName(event.target.value);
    }
    const listOfItems=(event)=>
    {
           setlistElements((preValue)=>
           {
               let userObject={
                   id:id,
                   email:email,
                   age:age,
                   firstname:firstname,
                  lastname:lastname
               }
             axios.post('http://localhost:7080/post/',userObject)
               .then((data)=>{
                   console.log(data);
                   
               })
               return[...preValue,userObject];
           }) ;
          
           setId();
            setEmail("");
           setAge();
           setName("");
           setlastName("");
            
        };
            

    return(
        
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>Products App</h1>
                <br/>
                <form>
                <input type='text' placeholder="Add an id" value={id} onChange={idEvent} required/>
                <input type='text' placeholder="Add email" value={email} onChange={emailEvent} required />
                <input type='text' placeholder="Add age" value={age} onChange={ageEvent} />
                <input type='text' placeholder="Add first name" value={firstname} onChange={nameEvent} required/>
                <input type='text' placeholder="Add last name" value={lastname} onChange={lastnameEvent}/>
                </form>
                <button className="newBtn" onClick={listOfItems}>
                <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
                </button>
                <ol className="list-container">             
                            {listElements.map((val,index)=>{                                      
                        return <AllTasks key={index} 
                        id={index}
                        text={val}
                         />;
                    })
                }
                </ol> 
                 <br/>
            </div>
        </div>
    )
};
//export {deleteItems as dlt};
export default AddUser;
