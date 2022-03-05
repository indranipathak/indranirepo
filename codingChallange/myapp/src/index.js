import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddUser from './page1/page1';
import AllUsers from './page2/page2';
import UserEdit from './page3/page3';
//import Edit from './page3/Edit';
import {BrowserRouter} from 'react-router-dom';
import {Link, Route} from 'react-router-dom';
import './style.scss';
function Home()
{
  return (
    <div className="App">
    <header>
    <h1>Welcome to UserApp</h1></header>
    <nav  className="nav">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/adduser">Add User</Link></span>
      <span><Link to="/alluser">ALL Users</Link></span>
      <span><Link to="/edit">Edit or Delete</Link></span>
     
    </nav>
    <Route path="/adduser" component={AddUser}></Route>
    <Route path="/alluser" component={AllUsers}></Route>
    <Route path="/edit" component={UserEdit}></Route>
   
    

    </div>
  )
  }

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
