import React, { useState } from 'react'

function Registration() {
    const[myname,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[data,setObjecct]=useState();
    function getData(){
       
        e.preventDefault();

        const dataObject={
            myname,email,password
        }
        setObjecct(dataObject);
    }
  return (

    <div> 
        <div>
            {
                JSON.stringify(getData)
            }
        </div>
         <form>
       
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Email</label>
      <input  onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputPassword1" placeholder="Email"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input  onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Registration