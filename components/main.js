/**
 * Created by myhailo on 1/13/17.
 */
import React from 'react';
import { Link } from 'react-router';

import Navigation from './layout/navigation';

const Main = React.createClass({
  render() {
    return (
      <div className="lead text-center container body">
        <Link to="/">
          <img className="logo" src="https://www.solentsu.co.uk/pageassets/eds/onlineshop/shop-logo.jpg" alt="main"/>
        </Link>
        <Navigation {...this.props}/>
        <hr/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;