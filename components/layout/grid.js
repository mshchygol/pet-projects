/**
 * Created by myhailo on 1/16/17.
 */
import React from 'react';

const Grid = React.createClass({
  render() {
    return (
      <div className="flex-container">
        {this.props.children}
      </div>
    )
  }
});

export default Grid;