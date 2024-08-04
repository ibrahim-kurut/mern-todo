import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

const UpdateTodoModel = ({ setOpenUpdateModel }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")




    const updateTodoHandle = () => {
        alert("updateTodoHandle")
    }



    return (
        <div className="w-full h-full bg-gray-800 fixed inset-0 flex items-center justify-center">
            <div className="rounded-xl border border-gray-700 bg-gray-800 md:w-[50%] w-[90%] mx-auto mt-10">
                <div className="close text-red-500 flex justify-end p-5">
                    <IoCloseCircleOutline size={25}
                        onClick={() => setOpenUpdateModel(false)}
                        className="cursor-pointer"
                    />
                </div>
                <div className="mx-auto max-w-screen-xl  sm:px-6 lg:px-8">

                    <form
                        onSubmit={updateTodoHandle}
                        className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium text-white">update task</p>

                        <div>
                            <label htmlFor="title" className="sr-only">title</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="sr-only">description</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"

                        >
                            update
                        </button>


                    </form>
                </div>
            </div>
        </div>

    )
}

export default UpdateTodoModel