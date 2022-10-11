import * as React from "react";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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



        <div className="bg-primary px-10 py-20 rounded-3xl w-[500px]">
            <h1 className="text-4xl font-semibold text-gray-800">Welecome!</h1>
            <p className="text-lg text-gray-400 mt-2"> Please enter your details.</p>
            <div className="mt-8 ">
                <div className="pb-4">
                    <label className="tex-lg text-gray-800" >Username:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Enter your email" ref={Username} />
                </div>
                <div className="pb-8">
                    <label type="password" className="tex-lg text-gray-800" >Password:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Enter your password" ref={Password} />
                </div>
                <div className="pb-12 flex justify-between items-center">
                    <div className="flex">
                        <input
                            type="checkbox"
                            id="remember"
                        />
                        <label className="ml-2 font-normal text-base text-gray-800" for="remember"> Remember Me</label>
                    </div>
                    <div>
                        <button className="font-medium text-base text-secondary "> Forgot password</button>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white text-lg font-bold" onClick={addUserHandler}>Log In</button>
                </div>
                <div className="mt-8 flex justify-center item-center">
                    <p className="font-normal text-base text-gray-800">Don't have an account?</p>
                    <Link to="/sign-up">
                        <button className="text-secondary text-base font-medium ml-2">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}