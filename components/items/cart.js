/**
 * Created by myhailo on 1/20/17.
 */
import React from 'react';

import Grid from '../layout/grid';
import Item from '../layout/item';
import Summary from '../layout/summary';

const Cart = React.createClass({
  render() {
    let cartItems = this.props.cart.map((item, index) => (
      <Item {...this.props} index={index} key={index} item={item} cart='true'/>
    ));
    return (
      <div className="cart">
        <button onClick={this.props.clearCart} className="clear-cart">Remove all</button>

        <button className="clear-cart">BUY</button>
        <Summary {...this.props}/>
        <Grid>
          {cartItems}
        </Grid>
      </div>
    )
  }
});

export default Cart;