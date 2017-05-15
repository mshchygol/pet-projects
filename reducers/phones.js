/**
 * Created by myhailo on 1/19/17.
 */
import phonesData from '../data/phones';

function phones(state = phonesData, action) {
  switch (action.type) {
    case 'HIDE_ITEM' :
      if (action.itemType === 'phone') {
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

export default phones;