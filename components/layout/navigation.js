/**
 * Created by myhailo on 1/16/17.
 */
import React from 'react';
import { Link } from 'react-router';

const Navigation = React.createClass({
  render() {
    let className =  this.props.cart.length ? 'items-count' : 'none';
    let itemsCount = this.props.cart.length;
    return (
      <div className="nav-container">
        <ul className="nav nav-pills nav-justified" role="tablist">
          <li><Link to="/">Home</Link></li>
          <li><Link to="phones">Phones</Link></li>
          <li><Link to="laptops">Laptops</Link></li>
          <li><Link to="cart">Shop cart <span className={className}>{itemsCount}</span></Link></li>
        </ul>
      </div>
    )
  }
});

export default Navigation;