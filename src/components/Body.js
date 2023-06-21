import React from 'react'
import Post from './Post';
import { useSelector } from 'react-redux';

function Body() {
    const posts = useSelector(state => state.posts);
  return (
    <div className='container posts-container'>
        {
            (posts.length == 0) && <h3>No Posts</h3>
        }
        {
            (posts.length > 0) && posts.map((post) => <Post key={post.id} id={post.id} title={post.title} body={post.body}/>)
        }
    </div>
  )
}

export default Body;
