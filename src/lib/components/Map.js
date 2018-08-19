import React from 'react';
import FormItemLayout from './FormItemLayout'
export default class StateMap extends React.Component {

  render() {
    return (
      <FormItemLayout className="sf-item--map" {...this.props}>
        { this.props.children }
      </FormItemLayout>
    )
  }
}