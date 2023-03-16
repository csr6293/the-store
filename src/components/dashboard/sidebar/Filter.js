import React from 'react';

import './filter.css';
import { filterByTag } from '../../../utils/functions'

const Filter = () => {

  return (
    <div>
      <div>
        <h3>Brands</h3>
        <ul className='no-bullets'>
          <li>Apple</li>
          <li>Samsung</li>
          <li>Sony</li>
          <li>LG</li>
          <li>Sony</li>
        </ul>
      </div>

      <div>
        <h3>SORT</h3>
        <ul className='no-bullets'>
          <li>Latest arrivals</li>
          <li>Trending</li>
          <li >Price: Low to high</li>
          <li>Price: High to low</li>
          <li>Sale: Low to high</li>
          <li>Sale: High to low</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter;
