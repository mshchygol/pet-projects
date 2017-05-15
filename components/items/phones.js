/**
 * Created by myhailo on 1/13/17.
 */
import React from 'react';

import Grid from '../layout/grid';
import Item from '../layout/item';

const Phones = React.createClass({
  render() {
    const phones = this.props.phones.map((phone, index) => (
      <Item index={index} key={index} item={phone} cart='false'/>
    ));

    return (
      <Grid>
        {phones}
      </Grid>
    )
  }
});

export default Phones;