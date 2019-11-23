import React ,{Component} from 'react';

export default class oldFetchApi extends Component {
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
        <>
          {this.state.user.map((user,id)=>{
          return  user.id < 5 ? <p key={id}>{user.email}</p>:<p></p>
          })}
        </>
      )
    }
  }