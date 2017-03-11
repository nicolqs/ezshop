import React, { Component } from 'react';
import './ItemList.css';

class Item extends Component {
  constructor(props) {
    super(props);
    
  }
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
  render() {
    const products = ['Milk', 'Egg', 'Orange Juice', 'Banana', 'Toast'];
    const list = products.map((product) =>
      <Item name={product} />
    );
    return (
      <ul className="ItemList">
        {list}
      </ul>
    );
  }
}

export default ItemList;
