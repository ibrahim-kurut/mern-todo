import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = () => {

    const todos = [
        {
            id: 1,
            titel: "Item 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sunt."
        },
        {
            id: 2,
            titel: "Item 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sunt."
        },
        {
            id: 3,
            titel: "Item 3",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sunt."
        },

    ];

    const [completedItems, setCompletedItems] = useState({});

    const handleCheckboxChange = (id) => {
        setCompletedItems(prevState => {
            const changeState = { ...prevState };
            changeState[id] = !prevState[id];
            return changeState;
        });
    };



    return (
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-4 md:w-[50%] w-[90%] mx-auto mt-5">
            <ul className="mt-4 space-y-2 capitalize">

                {
                    todos?.map((todo) => {
                        return (
                            <li
                                key={todo.id}
                                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="size-5"
                                        checked={completedItems[todo.id] || false}
                                        onChange={() => handleCheckboxChange(todo.id)}
                                    />

                                    <span className={`${completedItems[todo.id] ? 'line-through text-red-500' : ''}`}>
                                        <strong className="font-medium text-white ">{todo.titel}</strong>
                                        <p className="mt-1 text-xs font-medium text-gray-300">
                                            {todo.desc}
                                        </p>
                                    </span>
                                </div>

                                <div className="flex justify-end gap-3 text-white mt-2">
                                    <p className="text-green-500 cursor-pointer"><FaRegEdit /></p>
                                    <p className="text-red-400 cursor-pointer"><RiDeleteBin6Line /></p>
                                </div>

                            </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default TodoItem