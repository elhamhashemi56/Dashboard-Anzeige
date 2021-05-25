import React, { useState } from "react";
import './Home.css'
import axios from "axios";

function Home() {

  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
  });

//******************************************* */
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        successMessage: null,
      });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      }; 
      
      
    const handleSubmitClick = () => {
        if (state.name.length && state.email.length && state.password.length) {
          const payload = {
            name: state.name,
            email: state.email,
            password: state.password,
          };
          console.log(payload);

          axios
            .post(`http://localhost:5000/user`, payload)
            .then((response) => {
              console.log(response);
              localStorage.setItem("user_name", response.data.name);
    
              if (response.status === 201) {
                setState((prevState) => ({
                  ...prevState,
                  SuccessMessage:
                    "Registration successful. Redirecting to home page..",
                }));
    
              } else {
                alert("Some error occurred");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          alert("Please enter valid name and password");
        }
      };
    
    return (
    <div className='home'>
        <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input
                 type="text"
                 placeholder="Name"
                 id="name"
                 value={state.name}
                 onChange={handleChange} 
                 />

                <input
                 type="email"
                 placeholder="Email"
                 id="email"
                 value={state.email}
                 onChange={handleChange} />

                <input
                 type="password"
                 placeholder="Password"
                 id="password"
                 value={state.password}
                 onChange={handleChange}
                 />

                <button onClick={handleSubmitClick}>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
           
        </div>
    </div>
    </div>
     
    );
  }
  
  export default Home;
  