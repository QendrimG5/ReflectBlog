import * as React from "react";
import { useRef } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {

    const Username = useRef("");
    const Password = useRef("");
    const Email = useRef("");

    const GivenName = useRef("");
    const FamilyName = useRef("");
    const navigate = useNavigate();

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/log-in');
    };

    async function addUserHandler() {
        var data = {


            username: Username.current.value,
            salt: '',
            password: Password.current.value,
            email: Email.current.value,
            role: '',
            givenName: GivenName.current.value,
            familyName: FamilyName.current.value,


        }
        try {
            await axios.post("http://20.76.132.225/api/User/PostUser", data)
                .then((response) => {
                    navigateHome();

                })
        }
        catch (err) {
            window.alert("Email and Username Exist")
        }
    }

    return (
        <div className="bg-primary/70 backdrop-blur-md px-8 py-12 rounded-3xl w-[500px]">
            <h1 className="md:text-3xl text-2xl font-semibold text-gray-800 pb-2">Welcome!</h1>
            <p className="md:text-lg text-base text-gray-400 pb-8"> Fill the form to get registered.</p>
            <div className="">
                <div className="pb-4">
                    <label className="md:text-lg text-base text-gray-800" >Email:</label>
                    <input className="w-full border-2 rounded-xl p-4 mt-2 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 md:text-lg text-base" placeholder="Enter your email" ref={Email} />
                </div>
                <div className="pb-4">
                    <label className="md:text-lg text-base text-gray-800" >User Name:</label>
                    <input className="w-full border-2 rounded-xl p-4 mt-2 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 md:text-lg text-base" placeholder="Enter your username" ref={Username} />
                </div>
                <div className="pb-4">
                    <label className="md:text-lg text-base text-gray-800" >First Name:</label>
                    <input className="w-full border-2 rounded-xl p-4 mt-2 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 md:text-lg text-base" placeholder="Enter your first name" ref={GivenName} />
                </div>
                <div className="pb-4">
                    <label className="md:text-lg text-base text-gray-800" >Last Name:</label>
                    <input className="w-full border-2 rounded-xl p-4 mt-2 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400 md:text-lg text-base" placeholder="Enter your last name" ref={FamilyName} />
                </div>
                <div className="pb-8">
                    <label className="md:text-lg text-base text-gray-800">Password:</label>
                    <input type="password" className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Enter your password" ref={Password} />
                </div>


                <div className="flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white md:text-lg text-base font-bold" onClick={addUserHandler}><Link to='/sign-in'>Register</Link></button>
                </div>
            </div>
        </div>
    )
}