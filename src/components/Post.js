import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/actionCreators';

function Post({id, title, body}) {
  const dispatch = useDispatch();
  return (
    <div className='post'>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={(_) => dispatch(deletePost(id))}>Delete</button>
    </div>
  );
}

export default Post;
