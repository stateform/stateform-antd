import React from 'react';
export default class StateMap extends React.Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}