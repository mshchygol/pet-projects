/**
 * Created by myhailo on 1/13/17.
 */
import React from 'react';

import Grid from '../layout/grid';
import Item from '../layout/item';

const Laptops = React.createClass({
  render() {
    let laptops = this.props.laptops.map((laptop, index) => (
      <Item {...this.props} index={index} key={index} item={laptop} cart='false'/>
    ));

    return (
      <Grid>
        {laptops}
      </Grid>
    )
  }
});

export default Laptops;