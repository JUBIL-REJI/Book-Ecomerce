import React, { useState } from "react";
import "./login.css";
import Navbar from "../navbar/Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Register from "./Register";
import LoginWithGoogle from "./LoginWithGoogle";

const LoginPage = () => {
  const [visible, setVisble] = useState(false);
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("successfully signuped");
    } catch {
      setError("error");
    }
  };
  const handleVisible = () => {
    setVisble((prev) => !prev);
  };

  return (
    <section>
      <Navbar />
      <section className="login-main">
        {visible ? (
          <div className="signin">
            <div className="content">
              <h2>Sign up</h2>

              <form className="form" onSubmit={handleSignUp}>
                <div className="inputBox">
                  <input
                    type="text"
                    required
                    value={Username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <i>Full Name</i>
                </div>

                <div className="inputBox">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i>email</i>
                </div>

                <div className="inputBox">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i>password</i>
                </div>

                <div className="links">
                  <p className="sigin-text" onClick={handleVisible}>
                    Signin
                  </p>
                </div>
               {
                error && error?<p>Something went wrong</p>:''
               }
                <div className="inputBox">
                  <input type="submit" value="sign up" />
                </div>
                <div className="googlesignin">
                  <p>-or-continue-with-</p>
                  <LoginWithGoogle/>
               </div>
              </form>
            </div>
          </div>
        ) : (
          <Register handleVisible={handleVisible} />
        )}
     
      </section>
     
    </section>
  );
};

export default LoginPage;
