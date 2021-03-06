import React, {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import './Register.css'
import axios from "axios";
import {toast} from "react-toastify";

function Register() {

    const containerRef = useRef();
    const containerSignup = useRef();
    const containerSignin = useRef();
    const history = useHistory()

    const handleSigninClick = () => {
        console.log("handleSigninClick")
        containerRef.current.classList.remove("right-panel-active");
        containerSignin.current.classList.add("form-show")
        containerSignup.current.classList.remove("form-show")

    }
    const handleSignupClick = () => {
        console.log("handleSignupClick")
        containerRef.current.classList.add("right-panel-active");
        containerSignin.current.classList.remove("form-show")
        containerSignup.current.classList.add("form-show")
    }


    //******************************************* */
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        successMessage: null,
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    // const handleChangeName = (e) => {
    //     const value = e.target.value;
    //     setState(prevState => ({
    //         ...prevState,
    //         name: value
    //     }))
    // }
    // const handleChangeEmail = (e) => {
    //     const {value} = e.target;
    //     setState(prevState => ({
    //         ...prevState,
    //         email: value
    //     }))

    // const handleChangePassword = (e) => {
    //     const {value} = e.target;
    //     setState(prevState => ({
    //         ...prevState,
    //         password: value
    //     }))

// Sign Up *************************************

    const handleSubmitClick_SignUp = (e) => {
        e.preventDefault();
        if (state.name.length && state.email.length && state.password.length) {
            const payload = {
                name: state.name,
                email: state.email,
                password: state.password,
            };
            console.log(payload);

            axios
                .post(`${process.env.REACT_APP_BACKENDURL}/user`, payload)
                .then((response) => {
                    console.log(response);
                    localStorage.setItem("user_name", response.data.name);
                    toast.success("register successfully")
                    handleSigninClick();
                })
                .catch(function (error) {
                    if (error.response.data)
                        toast.error(error.response.data)
                    else
                        toast.error(error.message);
                    console.log(error);
                });
        } else {
            alert("Please enter valid name and password");
        }
    };

// Sign In *********************************************

    const handleSubmitClick_SignIn = (e) => {
        e.preventDefault();
        if (state.email.length && state.password.length) {
            const payload = {
                password: state.password,
                email: state.email,
            };
            console.log('payload', payload);

            axios
                .post(`${process.env.REACT_APP_BACKENDURL}/user/login`, payload)
                .then((response) => {
                    console.log('response', response);
                    localStorage.setItem("user_token", response.data.token);
                    window.location.assign('/produkt')
                })
                .catch(function (error) {
                    if (error.response.data)
                        toast.error(error.response.data)
                    else
                        toast.error(error.message);
                    console.log(error);
                });
        } else {
            alert("Please enter valid name and password");
        }
    };
//**************************************** */
    return (
        <div className='home'>
            <div ref={containerRef} className="register__container" id="container">
                <div className="register__form-container sign-up-container" ref={containerSignup}>
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
                            onChange={handleChange}/>

                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={state.password}
                            onChange={handleChange}
                        />

                        <button onClick={handleSubmitClick_SignUp}>Sign Up</button>
                        <p className={"extra-p"}>already registerd ? <span onClick={handleSigninClick}>sign in now</span></p>
                    </form>
                </div>
                <div className="register__form-container sign-in-container form-show" ref={containerSignin}>
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input
                            type="email"
                            id='email'
                            placeholder="Email"
                            value={state.email}
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            id='password'
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange}
                        />
                        <a href="#">Forgot your password?</a>
                        <button onClick={handleSubmitClick_SignIn}>Sign In</button>
                        <p className={"extra-p"}>dont have a account ? <span onClick={handleSignupClick}>sign up now</span></p>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={handleSigninClick} className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={handleSignupClick} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Register;
