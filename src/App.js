import logo from './logo.svg';
import Header from "./components/Header";
import Body from "./components/Body";

import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPosts } from './actions/actionCreators';

function getPosts() {
  return async (dispatch, state) => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(addPosts(data));
  }
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
   <>
    <Header />
    <Body />
   </>
  );
}

export default App;
