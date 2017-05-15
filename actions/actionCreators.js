/**
 * Created by myhailo on 1/19/17.
 */
// add item to shopping cart
export function addToCart(item) {
  return {
    'type': 'ADD_TO_CART',
    item
  }
}

// remove items from shopping cart
export function clearCart() {
  return {
    'type': 'CLEAR_CART'
  }
}

//remove item from shop list
export function hideItem(index, itemType) {
  return {
    'type': 'HIDE_ITEM',
    index,
    itemType
  }
}
