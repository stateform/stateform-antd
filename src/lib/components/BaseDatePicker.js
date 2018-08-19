import React from 'react';
import {DatePicker} from 'antd';
import FormItemLayout from './FormItemLayout'
import moment from 'moment'
export default class StateDatePicker extends React.Component {
  type = 'date'
  constructor(props) {
    super(props)
    const value = props.value
    if (value) {
      this.state = {
        inputValue: this.valueToMoment(value),
        value
      }
    } else {
      this.state = {}
    }
  }
  valueToMoment(value) {
    return this.props.valueType === 'second'
      ? moment.unix(value)
      : moment(value)
  }
  momentToValue(m) {
    const valueType = this.props.valueType
    return valueType === 'second'
      ? m.unix()
      : valueType === 'millisecond'
        ? m.valueOf()
        : m.toISOString()
  }
  handleInput = (inputValue) => {
    const value = inputValue == null
      ? null
      : this.momentToValue(this.type === 'datetime'
          ? inputValue
          : inputValue.startOf('day')
        )
    this.setState({
      inputValue,
      value
    }, () => {
      this.props.onInput(value)
    })
  }
  componentWillReceiveProps({value}) {
    if (value !== this.state.value) {
      console.log(value)
      console.log(this.state.value)
      this.setState({
        inputValue: this.valueToMoment(value),
        value
      })
    }
  }
  render() {
    const {state, props, handleInput, type} = this
    const {format, placeholder, disabled} = props
    const finalFormat = format || (type === 'datetime'
        ? 'YYYY-MM-DD HH:mm:ss'
        : 'YYYY-MM-DD')
    return (
      <FormItemLayout className="sf-item--datepicker" {...props}>
        <DatePicker i
          allowClear={true}
          value={state.inputValue}
          format={finalFormat}
          showTime={type === 'datetime'}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInput}
        />
      </FormItemLayout>
    )
  }
}

