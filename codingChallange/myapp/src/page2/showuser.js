import React from 'react';
import AllTasks from './page2';
import Edit from '../page3/page3';
const ShowAllUser=(props)=>{
    return(
        <div>
       <table>
       <tr>
       <td>{props.text.id}</td>
       <td>{props.text.firstname}</td>
       <td>{props.text.lastname}</td>
       <td>{props.text.age}</td>
       <td>{props.text.email}</td>
      
       </tr>
       </table>
        </div>
    )
}
export default ShowAllUser;