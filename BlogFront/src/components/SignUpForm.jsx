import * as React from "react";
import { useEffect, useRef } from "react";


export default function SignUpForm() {
    const useremail = useRef("");
    const userFirstName = useRef("");
    const userLastName = useRef("");
    const userPassword = useRef("");
    const userConfirmPassword = useRef("");
    const userBirthday = useRef("");

    function addUserHandler() {
        var data = {

            email: useremail.current.value,
            firstName: userFirstName.current.value,
            lastName: userLastName.current.value,
            password: userPassword.current.value,
            birthday: userBirthday.current.value
        }
        axios.post("https://localhost:7244/User", data)
            .then((response) => {
                console.log(response)
            })

    }
    return (
        <div className="bg-white px-10 py-20 rounded-3xl">
            <h1 className="text-5xl font-semibold">Welecome to Reflect</h1>
            <p className="text-lg text-gray-500 mt-4"> Fill Form To Get Registerd.</p>
            <div className="mt-8 ">
                <div className="pb-4">
                    <label className="tex-lg" >Email:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-primary  focus:border-secondary focus:ring-secondary focus:outline-none font-light text-gray-400" placeholder="Enter your email" ref={useremail} />
                </div>
                <div className="pb-4">
                    <label className="tex-lg" >First Name:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-primary  focus:border-secondary focus:ring-secondary focus:outline-none font-light text-gray-400" placeholder="First Name" ref={userFirstName}/>
                </div>
                <div className="pb-4">
                    <label className="tex-lg" >Last Name:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-primary  focus:border-secondary focus:ring-secondary focus:outline-none font-light text-gray-400" placeholder="Last Name" ref={userLastName} />
                </div>
                <div className="pb-4">
                    <label className="tex-lg" >Password:    </label>
                    <input type="password" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-primary  focus:border-secondary focus:ring-secondary focus:outline-none font-light text-gray-400" placeholder="Enter your password" ref={userPassword}/>
                </div>
                <div className="pb-4">
                    <label className="tex-lg" >Confirm Password:    </label>
                    <input type="password" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-primary  focus:border-secondary focus:ring-secondary focus:outline-none font-light text-gray-400" placeholder="Confirm Password" ref={userConfirmPassword} />
                </div>
                <div className="pb-4">
                    <label className="tex-lg" >Your Birthday:    </label>
                    <input  type="date" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-primary  focus:border-secondary focus:ring-secondary focus:outline-none font-light text-gray-400" placeholder="Your birthday"  ref={userBirthday}/>
                </div>
               
                <div className="mt-8 flex flex-col gap-y-4">
                    <button  className="active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white text-lg font-bold" onClick={addUserHandler} >Register</button>
                </div>
                
            </div>
        </div>
    )
}