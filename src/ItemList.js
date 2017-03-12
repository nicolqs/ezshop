import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import './ItemList.css';

const POSTS_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/techcrunch.com/posts';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: null
    };
  }
  componentWillMount() {
    axios.get(POSTS_URL)
      .then((response) => {
        this.setState({
          loaded: true,
          posts: response.data.posts
        });
      })
      .catch((error) => {
        console.log('error', error);
        this.setState({
          loaded: false
        });
      });
  }
  render() {
    if (this.state.loaded) {
      console.log(this.state)
      const tooltip = (
        <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
      );
      const list = this.state.posts.map((post, index) => {
        if (post.post_thumbnail) {
          return <OverlayTrigger placement="left" overlay={tooltip} key={index}>
          <ListGroupItem className="ListItem">
          <div>
          <Image className="Contain" src={post.post_thumbnail.URL}/>
          </div>
          <div>
          <div className="Contain">
          {post.title}
          </div>
          </div>
          </ListGroupItem>
          </OverlayTrigger>
        } else {
          return null
        }
      });
      return (
        <ListGroup className="ItemList">
          {list} 
        </ListGroup>
      );
    } else {
      return (
        <div>Loading ...</div>
      );
    }
  }
}

export default ItemList;
