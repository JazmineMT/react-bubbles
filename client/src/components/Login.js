import React , {useState} from "react";
import axios from 'axios'
const initialState = {
  username: "", 
  pasword: ""
}

const Login = (props) => {
  const [credentials , setCredentials] = useState(initialState)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value})
  }

  console.log(credentials.username)
  const login = e => {
    e.preventDefault()
    axios
    .post( 'http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push("/colors")
  })
  .catch( err => console.log(err))
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
                <input
                type= 'text'
                name='username'
                placeholder='username'
                value={credentials.username}
                onChange={handleChange}
                />
                <input
                 type= 'text'
                 name='password'
                 placeholder='password'
                 value={credentials.password}
                 onChange={handleChange}/>
                <button>Login</button>
            </form>
    </>
  );
};

export default Login;
