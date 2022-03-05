import react, { useState } from 'react';
import ShowAllUser from '../page2/showuser';
import AddUser from '../page1/page1';
const axios=require("axios");
const Edit=(props)=>
{
    const [userDetails,setuserDetails]=useState([{}]);
    
    return(
        <div>
            <h1>Click This Button</h1>
            <button onClick={()=>
            {
                axios.get('http://localhost:7080/post/')
                .then(response=>
                    {
                        console.log("data: "+response.data);
                        setuserDetails(response.data);
                    })
            }}>get all users</button>
            {
                console.log(userDetails)}
            <div>
                {
                    userDetails.map((elem,index)=>
                     {
                        return<ShowAllUser key={index}
                        text={elem}
                        
                        />;
                    })
                }
            </div>
        </div>
    )
}
export default Edit;