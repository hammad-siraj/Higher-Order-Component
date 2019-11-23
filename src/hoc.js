import React, { Component } from 'react'



const FetchApi = (props)=>(WrappedComponent)=>{

    
     class FetchApi extends Component {
      
        constructor(){
            super();
           this.state={
             user:[]
           }
        
          }
          
          componentDidMount(){
            
            const hitApiCall = async()=>{
             
              const response=await fetch(`https://jsonplaceholder.typicode.com/users`)  
              const jsonRes = await response.json();
            this.setState({
              user:jsonRes
            })
               
            }
        
            hitApiCall();
        
          }
      
        render() {
        return (
          <WrappedComponent user={this.state.user}/>
        )
      }
    }

    return FetchApi;
    }

    export default FetchApi;