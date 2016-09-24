import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      index:{
        backgroundColor:'#00bcd4',
        height:'90px',
        textAlign:'center',
        borderRadius: '10px 10px 0 0',
        paddingTop:'10px'
      },
      num:{
        lineHeight:'60px',
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        border: '2px solid #fff',
        display:'block',
        fontSize:'20px',
        margin:'0px auto',
        color:'#fff'
      },
      title:{
        fontSize:'18px',
        marginBottom:'20px',
        color:'#333'
      },
      desc:{
        fontSize:'16px',
        marginBottom:'20px',
        color:'#727272'
      }
    }
    let address = `item/${this.props.url}`;
    return(
      <div className="blog-container">
        <div style={styles.index}><span style={styles.num}>{this.props.index}</span></div>
        <div style={{padding:'20px'}}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <Link className="blog-btn" to={address}>阅读更多</Link>
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps = {
  index:1,
  title:'这里是标题',
  desc:'这里是内容'
}
BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default BlogCard;
