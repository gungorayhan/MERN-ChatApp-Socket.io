
import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    const [inputs,setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })

    const {loading,signup} = useSignup()

    const handleCheckboxChange =(gender)=>{
        setInputs({...inputs,gender:gender})
    }
    const handleInput=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        // console.log(inputs)
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();
        await signup(inputs);
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 max-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">ChatApp</span>
                </h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Ayhan Gungor' name="fullName" onChange={(e)=>handleInput(e)} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='ayhangungor' name="username" onChange={(e)=>handleInput(e)} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' name="password" onChange={(e)=>handleInput(e)} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Enter Confirm Password' name="confirmPassword" onChange={(e)=>handleInput(e)} className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have a account?
                    </Link>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700"
                    disabled={loading}
                    >{loading ? <span className='loading loading-spiner'></span>:"Sing Up" }</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp