import React from 'react'
import { useEffect,useState } from 'react'
import './Users.css'
import axios from 'axios'

function Users() {
  //for users data from db.json file use useState
 /*  let [users,setUsers]=useState([])

  let [error,setError]=useState("")
 
 
  //for displaying users (side effect) upon component loading ,useEffect
  useEffect(()=>{
  //fetch users
  axios.get("http://localhost:4000/users")
  .then(resp=>{
    if(resp.status===200)
    {
      setUsers(resp.data)
    }
    })
    .catch(err=>{
      //console.log("err is ",err)


      if(err.response){
        setError(err.message)
      }


      else if(err.request){
        setError(err.message)
      }


      else{
        setError(err.message)
      }
     }) 

  },[])
 */

  return (
    <div>
      {/*user details*/}
        {/* <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
         {
          users.map((userObj)=>
          {
           <div className='col 'key={userObj.id}'>
              <div className='card'>
                <img src={userObj.image} className='mx-auto p-3 profile-image' alt="" />

              </div>
           </div>

          }

          )
         }
        </div>  */}
        <h1>Users </h1>
    </div>
  )
}

export default Users