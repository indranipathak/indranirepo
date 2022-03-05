import React from 'react';
import UserEdit from './page3';
import {Link, Route} from 'react-router-dom';
import Edit from './Edit';
const ShowAllUserToDelete=(props)=>{
    return(
        <div>
       <table>
       <tr>
       <td>{props.text.id}</td>
       <td>{props.text.firstname}</td>
       <td>{props.text.lastname}</td>
       <td>{props.text.age}</td>
       <td>{props.text.email}</td>
       <td>
       <button className="fa-items" onClick={() => {
        props.onSelect(props.text.id);
    }}><i class="fa fa-trash-o de fa-lg float-right m-20" aria-hidden="true"></i></button>
       </td>
      <td>
          <span><Link to="/edit/tasks">Edit</Link></span>
   </td> 
   <Route path="/edit/tasks" component={Edit}></Route> 
       </tr>
       </table>
        </div>
    )
}
export default ShowAllUserToDelete;