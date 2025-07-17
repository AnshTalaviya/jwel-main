import React from 'react'
// import { useNavigate } from 'react-router-dom'

const ViewAll = ({ onClick }) => {
  


    return (
        <div className='text-center'>
            <button onClick={onClick} className="bg-black  text-white px-6 py-2 mt-5 rounded-full shadow-md hover:shadow-lg transition duration-300">
                View all
            </button>
        </div>
    )
}

export default ViewAll
