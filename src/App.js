import React from 'react'
import Header from './Components/Header'
import BlogList from './Components/BlogList'
import Blog from './Components/Blog'
import { loadBlogs } from './store'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount = () => {
    this.props.bootstrap();
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.selectedBlog.id ? <Blog /> : <BlogList />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    bootstrap: () => {
      dispatch(loadBlogs())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
