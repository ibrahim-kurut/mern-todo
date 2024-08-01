import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { toast } from "react-toastify"



const RegisterComp = () => {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // submit form handler
    const handleSubmit = (e) => {
        e.preventDefault()
        // validate form fields
        if (username.trim() === "" || username.length <= 2) {
            return toast.error("please enter user name valid ...")
        }
        if (email.trim() === "") {
            return toast.error("please enter valid email ...")
        }
        if (password.trim() === "" || password.length <= 8) {
            return toast.error("please enter password must be not less than 8 character")
        }
        const formData = {
            username,
            email,
            password
        }
        setTimeout(() => {
            toast.success("data sent successfully ...")
            setUserName("")
            setEmail("")
            setPassword("")
        }, 2000);

        console.log(formData);

        // call api here
    }



    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg bg-gray-800 rounded-2xl p-2">
                    <h1 className="text-center text-2xl font-bold text-green-600 sm:text-3xl">Register</h1>

                    <form
                        onSubmit={handleSubmit}
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">

                        <div className="relative">
                            <input
                                type="text"
                                autoComplete="username"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}


                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                autoComplete="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                autoComplete="current-password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>




                        <button
                            type="submit"
                            className="block w-full rounded-lg px-5 py-3 text-lg font-medium bg-gray-700 hover:bg-green-600 hover:text-gray-700 text-green-600"
                        >
                            Register
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            have account ?
                            <Link to="/login" href="#"> login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComp