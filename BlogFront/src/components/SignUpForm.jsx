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
        navigate('/');
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

        await axios.post("https://localhost:7244/api/User/PostUser", data)
            .then((response) => {
                navigateHome();

            })
    }

    return (
        <div className="bg-primary px-10 py-20 rounded-3xl w-[500px]">
            <h1 className="text-4xl font-semibold text-gray-800">Welcome!</h1>
            <p className="text-lg text-gray-400 mt-2"> Fill the form to get registered.</p>
            <div className="mt-8 ">
                <div className="pb-4">
                    <label className="tex-lg text-gray-800" >Email:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Enter your email" ref={Email} />
                </div>
                <div className="pb-4">
                    <label className="tex-lg text-gray-800" > UserName:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="UserName" ref={Username} />
                </div>
                <div className="pb-4">
                    <label className="tex-lg text-gray-800" >First Name:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Last Name" ref={GivenName} />
                </div>
                <div className="pb-4">
                    <label className="tex-lg text-gray-800" >LastName:    </label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Enter your password" ref={FamilyName} />
                </div>
                <div className="pb-4">
                    <label className="tex-lg text-gray-800" > Password:    </label>
                    <input type="password" className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Confirm Password" ref={Password} />
                </div>
                {/* <div className="pb-12">
                    <label className="tex-lg text-gray-800" >Your Birthday:    </label>
                    <input type="date" className="w-full border-2 rounded-xl p-4 mt-1 bg-white border-transparent  focus:border-secondary focus:ring-secondary transition ease-in-out focus:outline-none font-light text-gray-400" placeholder="Your Birthday" ref={userBirthday} />
                </div> */}

                <div className="flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.05] ease-in-out transition-all py-3 rounded-xl bg-secondary text-white text-lg font-bold" onClick={addUserHandler}><Link to='/sign-in'>Register</Link></button>
                </div>
            </div>
        </div>
    )
}