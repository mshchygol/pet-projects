/**
 * Created by myhailo on 1/19/17.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';

function mapStateToProps(state) {
  return {
    phones: state.phones,
    laptops: state.laptops,
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;