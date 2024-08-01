import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // submit form handler
    const handleSubmit = (e) => {
        e.preventDefault()
        // validate form fields
        if (email.trim() === "") {
            return toast.error("please enter valid email ...")
        }
        if (password.trim() === "" || password.length <= 8) {
            return toast.error("please enter password must be not less than 8 character")
        }
        const formData = {
            email,
            password
        }
        setTimeout(() => {
            toast.success("data sent successfully ...")
            setEmail("")
            setPassword("")
        }, 2000);

        console.log(formData);

        // call api here
    }


    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg bg-gray-800 p-5 rounded-2xl">
                    <h1 className="text-center text-2xl font-bold text-green-600 sm:text-3xl">Get started today</h1>

                    <form
                        onSubmit={handleSubmit}
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <input
                            type="email"
                            autoComplete="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            autoComplete="current-password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />



                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-gray-700 hover:bg-green-600 hover:text-gray-700 text-green-600 px-5 py-3 text-lg font-medium "
                        >
                            login
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            No account ?
                            <Link to="/register" className="underline" href="#"> Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login