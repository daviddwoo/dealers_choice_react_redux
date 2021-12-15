import React from 'react'
import { connect } from 'react-redux'
import { selectBlog, deleteBlog } from '../store'

const BlogList = ({ blogs, selectBlog, deleteBlog }) => {
  return (
    <div>
      {
        blogs.map((blog) => {
          return (
            <div id='blogContainer' key={blog.id}>
              <div id='blog'>
                <img src={blog.img}/>
                <div id='smallDetails'>
                  <p id='blogCat'>{blog.category}</p>
                  <p id='blogTitle' onClick={() => selectBlog(blog.id)}>{blog.title}</p>
                  <p id='blogAuthor'>{blog.author} / {blog.date.slice(0, 10)}</p>
                  <p id='readMore'>
                    <span id='read' onClick={() => selectBlog(blog.id)}>read more</span> / <span id='delete' onClick={() => deleteBlog(blog.id)}>delete</span>
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectBlog: (id) => {
      dispatch(selectBlog(id))
    },
    deleteBlog: (id) => {
      dispatch(deleteBlog(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)