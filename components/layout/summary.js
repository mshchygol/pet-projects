/**
 * Created by myhailo on 1/24/17.
 */
import React from 'react';

const Summary = React.createClass({
  render() {
    let summ = this.props.cart.reduce((acum, item) => acum + item.price,0);
    let itemsCount = this.props.cart.length;
    return (
      <div>
        Currently you have {itemsCount} items in your cart.<br/>
        Total cost: {summ}$
      </div>
    )
  }
});

export default Summary;
