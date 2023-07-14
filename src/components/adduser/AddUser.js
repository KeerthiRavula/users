import React,{useState} from 'react'
import './AddUser.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function AddUser() {

  let navigate=useNavigate()

  let [error,setError]=useState("")

  let {register,handleSubmit,formState:{errors}}=useForm()
 
  let addNewUser=(userObj)=>{
    console.log(userObj)
    //save userObj in json-server
    //make http post request
    axios.post("http://localhost:4000/users",userObj)
    .then(response=>{
      //console.log(response) 
      //for not dusplaying error msg next time
      if(response.status===201)
      {
        setError("");
        //to navigate to users page
        navigate("/users")
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
     
  };
  return (
    <div>
     <p className='display-3 text-center'>
      Add new User
     </p>
      {error.length!==0  && <p className='display-3 fw-bold text-center text-danger'>{error}</p>}
     <div className='row'>
      <div className='col-11 col-sm-8 col-md-6 mx-auto'>
        <form onSubmit={handleSubmit(addNewUser)}>
          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='text'  id='name' className='form-control'
            {...register("name" , {required:true})}
            />
            {errors.name?.type==='required' && <p className='text-danger fw-bold fs-5'>* required</p>}
          </div>

          <div className='mb-3'>
            <label htmlFor='name'>Email</label>
            <input type='email'  id='email' className='form-control'
            {...register("email" , {required:true})}
            />
                        {errors.email?.type==='required' && <p className='text-danger fw-bold fs-5'>* required</p>}

          </div>

          <div className='mb-3'>
            <label htmlFor='name'>date of birth</label>
            <input type='date'  id='dob' className='form-control'
            {...register("dob" , {required:true})}
            />
            {errors.dob?.type==='required' && <p className='text-danger fw-bold fs-5'>* required</p>}

          </div>

          <div className='mb-3'>
            <label htmlFor='name'>Image</label>
            <input type='text'  id='image' className='form-control'
            {...register("image" , {required:true})}
            />
            {errors.image?.type==='required' && <p className='text-danger fw-bold fs-5'>* required</p>}

          </div>

          <button type='submit' className='btn btn-success add-button'>
            create new user
          </button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default AddUser