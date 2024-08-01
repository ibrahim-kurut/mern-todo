import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LogoutUser } from '../../redux/apiCalls/authApiCall'
import swal from 'sweetalert';

const Navbar = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // logout handler
    const logoutHandle = () => {





        swal({
            title: "Are you sure?",
            text: "to close the account ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((isOk) => {
                if (isOk) {
                    dispatch(LogoutUser())
                    navigate('/login')
                }
            });
    }

    return (
        <div className="bg-gray-800 text-gray-300 ">
            <div className="container mx-auto h-[60px] flex items-center justify-between">
                <div className="logo"><Link to="/" className="capitalize">logo</Link></div>
                <nav>
                    <ul>
                        <Link to="/" className="mr-5">home</Link>
                        {
                            user && <Link to={`/profile/${user?._id}`}>profile</Link>
                        }
                    </ul>
                </nav>
                {
                    user ? <Link to=""
                        onClick={logoutHandle}
                        className="capitalize mr-3">logout</Link>
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