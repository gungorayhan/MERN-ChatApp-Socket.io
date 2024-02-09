
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 max-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Ayhan Gungor' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='ayhangungor' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckbox />
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have a account?
                    </a>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp