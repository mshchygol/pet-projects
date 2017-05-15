/**
 * Created by myhailo on 1/17/17.
 */
function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART' :
      return state.concat(action.item);
    case 'CLEAR_CART' :
      return [];
    default:
      return state
  }
}

export default cart;