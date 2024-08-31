import React from 'react'
function Login() {

  return (
    <div className='border-x-slate-700 h-[640px] w-[500px] mt-48 ml-[500px] m-40 p-8 border-4 bg-slate-100 justify-center text-center box-'>
      <form >
      <i className="fa-solid fa-hotdog" style={{ color:'darkorange', fontSize:'40px' }}></i>
              <h1 className='text-gray-800 text-6xl mt-5 mb-6 text-center font-bold font-serif'>WELCOME</h1>
              <p className='text-xl text-slate-600 '>Log into your account to manage orders, <br />update subscriptions</p>

              <div >
    <label className="label">Email*</label>
    <input  name='email' required type="text" className='inputl' placeholder='Enter email id'/>
  </div>

    <div>
    <label className="label">Password*</label>
    <input  name='password' required type="password" className='inputl' placeholder='Enter Password'/>
  </div>

  <button className="shopl">Log in</button>
  <div className='flex text-xl font-semibold justify-between mt-5'>
    <p>New here?</p>
    <p className='text-orange-800'>Create Account</p>
  </div>
  <div className='flex text-xl font-semibold justify-between mt-2'>
    <p>Trouble Logging in?</p>
    <p className='text-orange-800' >Forget Password</p>
  </div>
      </form>

    </div>
  )
}

export default Login
