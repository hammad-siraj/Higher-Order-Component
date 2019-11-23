import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FetchApi from './hoc';



 function App(props) {
  
  return (
    <>
    {console.log("APP.JS",props)}

    {props.user.map((user,id)=>{
    return  <p>{`${user.id} ${user.name} ${user.email}`}</p>
    })}
    
    </>
  );
}
export default FetchApi()(App)