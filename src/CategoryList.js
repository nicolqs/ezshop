import React, { Component } from 'react';
import './CategoryList.css';

class Category extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <li className="Category">
        <span>
          {this.props.name}
        </span>
      </li>
    )
  }
}

class CategoryList extends Component {
  render() {
    const categories = ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5'];
    const list = categories.map((category) =>
      <Category name={category} />
    );
    return (
      <ul className="CategoryList">
        {list}
      </ul>
    );
  }
}

export default CategoryList;