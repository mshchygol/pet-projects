/**
 * Created by myhailo on 1/19/17.
 */
import laptopsData from '../data/laptops';

function laptops(state = laptopsData, action) {
  switch (action.type) {
    case 'HIDE_ITEM' :
      if (action.itemType === 'laptop') {
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default laptops;