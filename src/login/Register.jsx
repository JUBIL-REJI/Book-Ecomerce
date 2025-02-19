import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";



const Register = ({ handleVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucsess, setSucsess] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("successfully signined");
    } catch {
      console.log("error");
      setError("error");
      setSucsess(true)
    }
    setEmail("");
    setPassword("");
    setSucsess(true);
  };

  console.log(sucsess)
  return (
    <div className="signin">
      <div className="content">
        <h2>Sign In</h2>

        <form className="form" onSubmit={handleSignIn}>
          <div className="inputBox">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i>Email</i>
          </div>

          <div className="inputBox">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i>Password</i>
          </div>

          <div className="links">
           <Link to={'/reset'}>Forgot Password</Link> 
            <p className="sigin-text" onClick={handleVisible}>
              Signup
            </p>
          </div>
          {
            error && error ? <p>something went wrong</p>:''
          }
          <p></p>
          <div className="inputBox">
            <input type="submit" value="sign in" />
          </div>
        </form>
        
       
      </div>  
    </div>
  );
};

export default Register;
