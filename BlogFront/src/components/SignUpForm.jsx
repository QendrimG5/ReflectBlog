import * as React from "react";


export default function SignUpForm() {
    return (
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
            <h1 className="text-5xl font-semibold">Welecome to Our Blog</h1>
            <p className="font-medium text-lg text-gray-500 mt-4"> Fill Form To Get Registerd.</p>
            <div className="mt-8 ">
                <div>
                    <label className="tex-lg font-medium" >Email:    </label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter your email" />
                </div>
                <div>
                    <label className="tex-lg font-medium" >First Name:    </label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="First Name" />
                </div>
                <div>
                    <label className="tex-lg font-medium" >Last Name:    </label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Last Name" />
                </div>
                <div>
                    <label className="tex-lg font-medium" >Password:    </label>
                    <input type="password" className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter your password" />
                </div>
                <div>
                    <label className="tex-lg font-medium" >Confirm Password:    </label>
                    <input type="password" className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Confirm Password" />
                </div>
                <div>
                    <label className="tex-lg font-medium" >Your Birthday:    </label>
                    <input  type="date" className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Confirm Password" />
                </div>
               
                <div className="mt-8 flex flex-col gap-y-4">
                    <button  className="active:scale-[.98] active:duration-75 hover:scale-[1.04] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold" >Register</button>
                </div>
                
            </div>
        </div>
    )
}