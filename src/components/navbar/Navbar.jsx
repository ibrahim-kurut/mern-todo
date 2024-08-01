import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { user } = useSelector(state => state.auth)

    return (
        <div className="bg-gray-800 text-gray-300 ">
            <div className="container mx-auto h-[60px] flex items-center justify-between">
                <div className="logo"><Link to="/" className="capitalize">logo</Link></div>
                <nav>
                    <ul>
                        <Link to="/" className="mr-5">home</Link>
                        <Link to="/profile">profile</Link>
                    </ul>
                </nav>
                {
                    user ? <Link to="" className="capitalize mr-3">logout</Link>
                        :
                        <div className="">
                            <Link to="/login" className="capitalize mr-3">login</Link>
                            <Link to="/register" className="capitalize ">register</Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar