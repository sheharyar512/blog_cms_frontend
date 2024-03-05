import React from 'react'
import "./login.scss";

const Login = () => {
  return (
    <>
    <div className="logo-box">
    <h2>Sign In to Your Blog</h2>
    <button>
      <img src="./google.png" alt="apple" />
      login with Google
    </button>
    <hr></hr>
    <span>Or</span>
    <form>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="password" />
      <button>Next</button>
    </form>
    <button>Forget Password</button>
    <p>
      Don't Have an account<a>Register</a>
    </p>
  </div>
  </>
  )
}

export default Login;