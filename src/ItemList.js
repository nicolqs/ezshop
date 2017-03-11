import React, { Component } from 'react';
import './ItemList.css';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import axios from 'axios';

const PRODUCT_URL = 'https://www.openfood.ch/api/v2/products?api_key=5a00a0db16b8544711050bdd0a9f4ddc';

class Item extends Component {
  render() {
    return (
      <li className="Item">
        <span>
          {this.props.name}
        </span>
        <span>
          <img alt="yo" width="100" src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0f3afa75-a643-47df-93ad-6d5a14a99b18.jpg"/>
        </span>
      </li>
    )
  }
}

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
      const list = this.state.products.map((product, index) =>
        <ListGroupItem className="ListItem" key={index}>
        <Image src={product.attributes.images[0].thumb}/>
        {product.attributes.name}
        </ListGroupItem>
      );
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
