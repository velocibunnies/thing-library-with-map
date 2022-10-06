//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ServerRequests from '../src/types/ServerRequests';



function Signup({sendACreateUserRequest}){
    const navigate = useNavigate();

    let username = '';
    let password = '';
    let email = '';


    const requestCreateUser = () => {
        ServerRequests.CreateUser(username, password, email)
        .then(data => {
          if(data.status === 200){
            location.state.isLoggedIn = true;
            navigate('/home');
          }
        })
      }

    return (
    <div id='signUpBox' className='centerMe'>
        <h2>Create an account</h2>
    <form onSubmit={requestCreateUser}>
        <input type="text" id="firstName" name="firstName" placeholder="name" onChange={(e) => username = e.target.value}></input>
        <br></br>
        <input type="password" id="password" name="password" placeholder="password" onChange={(e) => password = e.target.value}></input>
        <br></br>
        <input type="text" id="email" name="email" placeholder="e-mail" onChange={(e) => email = e.target.value}></input>
        <br></br>
        <input className="btn" type="submit" value="Submit"></input>
    </form>
        </div>
    )
};
  
export default Signup;