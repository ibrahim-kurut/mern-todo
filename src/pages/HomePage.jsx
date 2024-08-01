import React from 'react'

const HomePage = () => {
    return (
        <>

            <div className="container mx-auto md:w-[50%] w-[90%]">
                <div className="flex items-center justify-center h-96">
                    <p className="bg-gray-800 rounded-2xl p-20 text-gray-300">
                        If you want to add a task,
                        <span className="text-red-300 px-1 animate-pulse">register first</span>
                        to keep your information confidential.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomePage