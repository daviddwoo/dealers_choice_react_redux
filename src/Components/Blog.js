import React from 'react'
import { connect } from 'react-redux'

const Blog = ({ selectedBlog }) => {
  return (
    <div id='singleBlogContainer'>
      <div id='singleBlog'>
        <h1>{selectedBlog.title}</h1>
        <p>{selectedBlog.author}</p>
        <p>{selectedBlog.date.slice(0, 10)}</p>
      </div>
      <div id='blogP'>
        <p>{selectedBlog.text}</p>
        <p>{selectedBlog.text}</p>
        <p>{selectedBlog.text}</p>
        <p>{selectedBlog.text}</p>
        <p>{selectedBlog.text}</p>
        <p>{selectedBlog.text}</p>
        <p>{selectedBlog.text}</p>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(Blog)