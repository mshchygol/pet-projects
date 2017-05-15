/**
 * Created by myhailo on 1/19/17.
 */
import React from 'react';

const Single = React.createClass({
  render() {
    const { itemType, itemID } = this.props.params;
    let singleItem, index;
    let buttonClassName = this.props.params.isCart === 'true' ? 'none' : 'add-button-single';
    if (itemType === 'phone') {
      index = this.props.phones.findIndex(phone => phone.id === itemID);
      singleItem = this.props.phones[index];
    } else {
      index = this.props.laptops.findIndex(laptop => laptop.id === itemID);
      singleItem = this.props.laptops[index];
    }
    let {  display, name, price, description } = singleItem;
    return (
        <div className="single-item">
            <img className="image" src={display} alt={name}/>
          <div>
            <ul>
              <li className="name">{name}</li>
              <li><span className="price">Price: {price}$</span></li>
              <li className="description">{description}</li>
            </ul>
          </div>
          <button onClick={this.props.addToCart.bind(null, singleItem)} className={buttonClassName}>Add to Cart</button>
        </div>
    )
  }
});

export default Single;