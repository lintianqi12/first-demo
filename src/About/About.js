import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  render () {
    return(
      <div className="about-wrap">
        <div className="about-top"></div>
        <div className="about-head"></div>
        <div className="about-content">
          <h3>初来乍到，菜鸟一只，正在努力学习中</h3>
        </div>
        <p>如有兴趣 请联系：18713525352@163.com ^_^</p>
      </div>
    )
  }
}

export default About;
