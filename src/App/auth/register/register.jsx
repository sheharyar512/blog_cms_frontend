import React from 'react'
import "./register.scss";

const Register = () => {
  return (
	<>
      <div className="logo-box">
    <h2>Create your Account</h2>
    <button>
      <img src="./google.png" alt="apple" />
      Register with Google
    </button>
    <hr></hr>
    <span>Or</span>
    <form>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="password" />
      <input type="text" placeholder="Role" />
      <button>Next</button>
    </form>
    <button>Forget Password</button>
    <p>
      Already Have an account<a>Login</a>
    </p>
  </div>
  </>
  )
}

export default Register