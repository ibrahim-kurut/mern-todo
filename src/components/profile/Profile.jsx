import React, { useState } from 'react'
import TodoItem from '../todo/TodoItem'
import AddTodo from '../todo/AddTodo'
import { FaCirclePlus } from "react-icons/fa6";

const Profile = () => {

    const [openAddForm, setOpenAddForm] = useState(false)



    return (
        <>
            <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 md:w-[50%] w-[90%] mx-auto mt-10">
                <div className="flex flex-col items-center gap-4">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                        className="size-16 rounded-full object-cover"
                    />

                    <div className="text-white text-center">
                        <h3 className="text-lg font-medium">Claire Mac</h3>
                        <p className="">email</p>
                    </div>
                </div>

            </article>
            {/* add todo form */}
            <div className="icon flex justify-center items-center md:w-[50%] w-[90%] rounded-lg p-2 mx-auto bg-gray-800 mt-5">
                <p className="text-lg text-green-600 animate-pulse">
                    click btn to add todo
                </p>
                <FaCirclePlus
                    onClick={() => setOpenAddForm(prev => !prev)}
                    className="cursor-pointer ml-5 text-green-600 hover:animate-spin" size={30} />

            </div>

            {
                openAddForm && <AddTodo setOpenAddForm={setOpenAddForm} />

            }

            {/* todo_item */}
            <TodoItem />
        </>
    )
}

export default Profile