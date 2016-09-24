import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className="left-nav">
        <h3>LinTianqi@{this.props.title}</h3>
        <Link onlyActiveOnIndex={true} to="/">
          <span className="glyphicon glyphicon-home"></span>
          <br/>Home
        </Link>
        <Link to="/blog">
          <span className="glyphicon glyphicon-bookmark"></span>
          <br/>Blog
        </Link>
        <Link to="/work">
          <span className="glyphicon glyphicon-file"></span>
          <br/>Work
        </Link>
        <Link to="/about">
          <span className="glyphicon glyphicon-user"></span>
          <br/>About
        </Link>
      </div>
    )
  }
}

LeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LeftNav;
