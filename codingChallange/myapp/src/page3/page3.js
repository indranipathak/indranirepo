import react, { useState } from 'react';
import ShowAllUserToDelete from './showusers';
const axios=require("axios");

const UserEdit=(props)=>
{
   
        const [userDetails,setuserDetails]=useState([{}]);
        const deleteItems=(id)=>
        {
            
                    axios.delete('http://localhost:7080/post/user/delete/'+id)
                    .then((data)=>
                    {
                        console.log(data);
                        console.log("deleted");
                        alert('deleted succesfully');
                    })
        }
        // const updateStatus=(id,newage)=>
        // {
        //     let updatedage={age:newage};
        //     axios.patch('http://localhost:7080/post/user/update/'+id,updatedage)
        //     .then(()=>
        //     {
        //         console.log("updated");
        //     })
            
        // }
        
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
                            return<ShowAllUserToDelete key={index}
                            text={elem}
                            onSelect={deleteItems}
                            // onClick={updateStatus}
                            />;
                        })
                    }
                </div>
            </div>
        )
    
}
export default UserEdit;