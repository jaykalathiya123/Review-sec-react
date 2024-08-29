

import React, { useState } from 'react';
import Form from '../form/form';
import IMG from '../../assets/amazon.png'

function Post() {
    const [postData, setPostData] = useState({
        username: '',
        comment: '',
        review: 1,
    });

    const [reviews, setReviews] = useState([]);

    const handlePostData = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: name === 'review' ? Number(value) : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (postData.username && postData.comment) {
            setReviews([...reviews, postData]);

            setPostData({
                username: '',
                comment: '',
                review: 1,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className='text-3xl font-bold text-center mb-6'>Post Your Review</h1>
                {/* <div className="text-black mb-4 w-full bg-orange-100 p-4 rounded-lg shadow-md">
                    <h2 className='text-xl font-semibold'>User name</h2>
                    <p className='text-gray-600'>2 hours ago</p>
                </div> */}
                <img src={IMG} alt="Amazon" className="w-full h-auto rounded-lg mb-6 shadow-md" />

                <Form 
                    username={postData.username} 
                    comment={postData.comment} 
                    review={postData.review} 
                    handlePostData={handlePostData} 
                    handleSubmit={handleSubmit} 
                />

                <div className="mt-8">
                    <h2 className='text-2xl font-semibold mb-4'>Reviews:</h2>
                    {reviews.map((review, index) => (
                        <div key={index} className="border border-gray-300 p-4 mb-4 rounded-lg shadow-sm bg-white">
                            <p className="text-lg font-bold">{review.username}</p>
                            <p className="text-gray-700">{review.comment}</p>
                            <p className="text-yellow-500">Rating: {review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Post;
