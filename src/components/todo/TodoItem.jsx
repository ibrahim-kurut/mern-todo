import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

import { deleteTodoHandle } from '../../redux/apiCalls/todoApiCall';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import UpdateTodoModel from './UpdateTodoModel';


const TodoItem = ({ profile }) => {

    const [completedItems, setCompletedItems] = useState({});
    const [openUpdateModel, setOpenUpdateModel] = useState(false);

    const handleCheckboxChange = (id) => {
        setCompletedItems(prevState => {
            const changeState = { ...prevState };
            changeState[id] = !prevState[id];

            // Save the new state to Local Storage
            localStorage.setItem('completedItems', JSON.stringify(changeState));

            return changeState;
        });
    };

    useEffect(() => {
        // return state from Localstorage when the application is loaded
        const savedCompletedItems = JSON.parse(localStorage.getItem('completedItems')) || {};
        setCompletedItems(savedCompletedItems);
    }, []);

    const dispatch = useDispatch()

    // delete handel
    const handleDelete = (id) => {


        swal({
            title: "Are you sure?",
            text: "to delete this post ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((isOk) => {
                if (isOk) {
                    setTimeout(() => {
                        dispatch(deleteTodoHandle(id))
                        window.location.reload()
                    }, 1500);
                }
            });





    }






    return (
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-4 md:w-[50%] w-[90%] mx-auto mt-5">
            <ul className="mt-4 space-y-2 capitalize">

                {
                    profile?.todos?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((todo) => {
                        return (
                            <li
                                key={todo._id}
                                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="size-5"
                                        checked={completedItems[todo._id] || false}
                                        onChange={() => handleCheckboxChange(todo._id)}
                                    />

                                    <span className={`${completedItems[todo._id] ? 'line-through text-red-500' : ''}`}>
                                        <strong className="font-medium text-white ">{todo.title}</strong>
                                        <p className="mt-1 text-xs font-medium text-gray-300">
                                            {todo.description}
                                        </p>
                                    </span>
                                </div>

                                <div className="flex justify-end gap-3 text-white mt-2">
                                    <p
                                        onClick={() => setOpenUpdateModel(true)}
                                        className="text-green-500 cursor-pointer"><FaRegEdit /></p>
                                    <p
                                        onClick={() => handleDelete(todo?._id)}
                                        className="text-red-400 cursor-pointer"><RiDeleteBin6Line /></p>
                                </div>

                            </li>
                        )
                    })
                }


            </ul>
            {
                openUpdateModel && <UpdateTodoModel setOpenUpdateModel={setOpenUpdateModel} />
            }

        </div>
    )
}

export default TodoItem