import React,{useState} from 'react'

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      };
  return (
    <div>
    <form onSubmit={handleSubmit} action="">
    <label htmlFor="name">Full Name</label>
    <input value={name} type="text" name='name' id='name' placeholder='Full Name'/>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}

export default Register