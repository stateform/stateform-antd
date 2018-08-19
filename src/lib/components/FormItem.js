import React from 'react';
export default class StateFormItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  handleInput = (value) => {
    this.setState({
      value
    })
    this.props.onInput(value)
  }
  handleChange = (e) => {
    this.handleInput(e.target.value)
  }
  componentWillReceiveProps(props) {
    if (props.value !== this.state.value) {
      this.setState({
        value: props.value
      })
    }
  }
  render() {
    return "Not Implemented"
  }
}

