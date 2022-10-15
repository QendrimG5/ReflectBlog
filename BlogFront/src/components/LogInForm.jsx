import * as React from "react";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReflectDarkBlueWhite } from "../assets";

export default function LogInForm() {

    const navigate = useNavigate();
    const Username = useRef("");
    const Password = useRef("");


    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };
    async function addUserHandler() {
        var data = {


            username: Username.current.value,
            password: Password.current.value,

        }

        await axios.post("https://localhost:7244/api/Login", data)
            .then((response) => {
                navigateHome();

                window.localStorage.setItem("token", response.data)

            })
    }
    return (



        <div className="bg-primary/70 backdrop-blur-md px-8 py-12 rounded-3xl w-[500px]">
            <h1 className="md:text-3xl text-2xl font-semibold text-gray-800 pb-2">Welcome!</h1>
            <p className="md:text-lg text-base text-gray-400 pb-8"> Please enter your details.</p>
            <div className="">
                <div className="pb-4">
                    <label className="md:text-lg text-base text-gray-800" >Username:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-2 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 md:text-lg text-base" placeholder="Enter your email" ref={Username} />
                </div>
                <div className="pb-4">
                    <label type="password" className="md:text-lg text-base text-gray-800" >Password:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-2 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 md:text-lg text-base" placeholder="Enter your password" ref={Password} />
                </div>
                <div className="pb-8 flex justify-between items-center">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            class="w-4 h-4"/>
                        <label className="ml-2 font-normal md:text-lg text-base text-gray-800" for="remember">Remember Me</label>
                    </div>
                    <div>
                        <button className="font-medium md:text-lg text-base text-secondary ">Forgot password</button>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 pb-8">
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white md:text-lg text-base font-bold" onClick={addUserHandler}>Log In</button>
                </div>
                <div className=" flex justify-center item-center">
                    <p className="font-normal md:text-lg text-base text-gray-800">Don't have an account?</p>
                    <Link to="/sign-up">
                        <button className="text-secondary md:text-lg text-base font-medium ml-2">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}