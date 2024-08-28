// import React from 'react'

// function Form({username , comment , review , handlePostData , handleSubmit}) {
//   return (
//     <>
//             <form onSubmit={handleSubmit}>
//                     <input type="text" name='username' placeholder='enter name'  value={username} onChange={handlePostData}/>

//                     <br />

//                     <input type="text" name='comment' placeholder='enter commemt name'  value={comment} onChange={handlePostData}/>

//                     <br></br>
//                     <select name='review' value={review} onChange={handlePostData}>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                     </select>

//                         <br />
//                     <button  type = "submit"className='bg-red-600 p-4'>Submit</button>
//                 </form>
//     </>

//   )
// }

// export default Form
import React from 'react';

function Form({ username, comment, review, handlePostData, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='username' 
                placeholder='Enter name'  
                value={username} 
                onChange={handlePostData}
            />
            <br />
            <input 
                type="text" 
                name='comment' 
                placeholder='Enter comment'  
                value={comment} 
                onChange={handlePostData}
            />
            <br />
            <select 
                name='review' 
                value={review} 
                onChange={handlePostData}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br />
            <button type="submit" className='bg-red-600 p-4'>Submit</button>
        </form>
    );
}

export default Form;
