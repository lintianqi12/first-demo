import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Work extends React.Component {
  render () {
    return(
      <div className="work-container">

        <div className="work-card">
          <div className="work-decs">
            <a href="#"><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" /></a>
            <div className="work-text">
              <h3>作品一</h3>
              <p>2016.5.6</p>
            </div>
          </div>
        </div>

        <div className="work-card">
          <div className="work-decs">
            <a href="#"><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain2.jpg" /></a>
            <div className="work-text">
              <h3>作品二</h3>
              <p>2016.5.6</p>
            </div>
          </div>
        </div>

        <div className="work-card">
          <div className="work-decs">
            <a href="#"><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg" /></a>
            <div className="work-text">
              <h3>作品三</h3>
              <p>2016.5.6</p>
            </div>
          </div>
        </div>

        <div className="work-card">
          <div className="work-decs">
            <a href="#"><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain4.jpg" /></a>
            <div className="work-text">
              <h3>作品四</h3>
              <p>2016.5.6</p>
            </div>
          </div>
        </div>

        <div className="work-card">
          <div className="work-decs">
            <a href="#"><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain2.jpg" /></a>
            <div className="work-text">
              <h3>作品五</h3>
              <p>2016.5.6</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Work;
