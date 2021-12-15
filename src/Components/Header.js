import React from 'react'
import { deselectBlog, addBlog } from '../store'
import { connect } from 'react-redux'

const Header = ({ goBack, addBlog }) => {
  return (
    <div>
      <div id='header'>
        <div>
          <button id='home' onClick={() => goBack()}>home</button>
        </div>
        <div>
          <button id='addButton' onClick={() => addBlog()}>add a blog!</button>
        </div>
      </div>
      <div id='titleContainer'>
        <div id='title'>
            grace blogger.
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => {
      dispatch(deselectBlog())
    },
    addBlog: () => {
      dispatch(addBlog())
    }
  }
};

export default connect(null, mapDispatchToProps)(Header)