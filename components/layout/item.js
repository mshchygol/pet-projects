/**
 * Created by myhailo on 1/19/17.
 */
import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

const Item = React.createClass({
  render() {
    let {  display, name, id, itemType, price, description } = this.props.item;
    let { cart } = this.props;
    return (
      <div className="flex-item">
        <Link to={`/view/${itemType}/${id}/${cart}`}>
          <img className="image" src={display} alt={name}/>
        </Link>
        <div>
          <ul>
            <li className="name">{name}</li>
            <li><span className="price">Price: {price}$</span></li>
            <li className="description">{description}</li>
          </ul>
        </div>
        <button onClick={this.props.actions.hideItem.bind(null, this.props.index, itemType)} className="hide-button">Hide</button>
        <button onClick={this.props.actions.addToCart.bind(null, this.props.item)} className="add-button">Add to Cart</button>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    phones: state.phones,
    laptops: state.laptops,
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(Item);
