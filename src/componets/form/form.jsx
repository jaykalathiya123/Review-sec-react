

import React from 'react';

function Form({ username, comment, review, handlePostData, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold mb-4'>Leave a Review</h1>
            <input 
                type="text" 
                name='username' 
                placeholder='Enter user name '  
                value={username} 
                onChange={handlePostData}
                className='border border-gray-300 w-full p-3 rounded-lg mb-4'
            />
            <textarea.Form 
                type="text" 
                name='comment' 
                placeholder='Enter comment'  
                value={comment} 
                onChange={handlePostData}
                className='border border-gray-300 w-full p-3 rounded-lg mb-4'
            />
            <select 
                name='review' 
                value={review} 
                onChange={handlePostData}
                className='border border-gray-300 w-full p-3 rounded-lg mb-4'
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit" className='bg-red-600 text-white p-3 rounded-lg w-full'>Submit</button>
        </form>
    );
}

export default Form;
