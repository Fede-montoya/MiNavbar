import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <ul className="list-group">
      {categories.map(category => (
        <li key={category.id} className="list-group-item">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
