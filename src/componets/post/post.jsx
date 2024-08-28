

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
        <div>
            <h1 className='text-center'>Post</h1>
            <div className="text-black mb-4 w-full bg-orange-200 p-4">
                <h2>User name</h2>
                <p>2 hours ago</p>
            </div>
            <img src={
                IMG
            } alt="" srcset="" />
            

            <div>
                <Form 
                    username={postData.username} 
                    comment={postData.comment} 
                    review={postData.review} 
                    handlePostData={handlePostData} 
                    handleSubmit={handleSubmit} 
                />
            </div>
            <div>
                {reviews.map((review, index) => (
                    <div key={index} className="border p-2 mb-2">
                        <p><strong>{review.username}</strong></p>
                        <p>{review.comment}</p>
                        <p>Rating: {review.review}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Post;
