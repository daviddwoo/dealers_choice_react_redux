import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const loadBlogs = () => {
  return async(dispatch) => {
    const blogs = (await axios.get('/api/blogs/')).data;
    dispatch({ type: 'LOAD_BLOGS', blogs});
  }
};

const addBlog = () => {
  return async(dispatch) => {
    const blog = (await axios.post('/api/blogs')).data;
    dispatch({ type: 'ADD_BLOG', blog });
  }
};

const deleteBlog = (blogId) => {
  return async(dispatch) => {
    await axios.delete(`/api/blogs/${blogId}`);
    dispatch({ type: 'DELETE_BLOG', blogId });
  }
};

const selectBlog = (blogId) => {
  return async(dispatch) => {
    const selectedBlog = (await axios.get(`/api/blogs/${blogId}`)).data;
    dispatch({ type: 'SELECT_BLOG', selectedBlog });
  }
};

const deselectBlog = () => {
  return (dispatch) => {
    const selectedBlog = {}
    dispatch({ type: 'DESELECT_BLOG', selectedBlog });
  }
};

const loadReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BLOGS':
      return state = action.blogs
    case 'ADD_BLOG':
      return state = [...state, action.blog]
    case 'DELETE_BLOG':
      return state = state.filter((blog) => blog.id !== action.blogId)
    default: 
      return state
  }
};

const selectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_BLOG':
      return state = action.selectedBlog
    case 'DESELECT_BLOG':
      return state = action.selectedBlog
    default:
      return state
  }
};

const reducer = combineReducers({
  blogs: loadReducer,
  selectedBlog: selectReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export { loadBlogs, selectBlog, deselectBlog, addBlog, deleteBlog };

export default store