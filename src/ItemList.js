import React, { Component } from 'react';
import './ItemList.css';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';

const PRODUCT_URL = 'https://www.openfood.ch/api/v2/products?api_key=5a00a0db16b8544711050bdd0a9f4ddc';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      products: null
    };
  }
  componentWillMount() {
    axios.get(PRODUCT_URL, {
        headers: {
          "Authorization": "Token token=5a00a0db16b8544711050bdd0a9f4ddc"
        }
      })
      .then((response) => {
        console.log(response);
        this.setState({
          loaded: true,
          products: response.data.data
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
      const list = this.state.products.map((product, index) => {
        if (product.attributes.name) {
          return <OverlayTrigger placement="left" overlay={tooltip} key={index}>
          <ListGroupItem className="ListItem">
          <div>
          <Image src={product.attributes.images[1].thumb}/>
          </div>
          <div>
          {product.attributes.name}
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
