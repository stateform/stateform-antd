import React from 'react';
import {InputNumber} from 'antd';
import FormItemLayout from './FormItemLayout'
import FormItem from './FormItem'
export default class StateInputNumber extends FormItem {
  render() {
    const {state, props, handleInput} = this
    const {placeholder, disabled} = props
    return (
      <FormItemLayout className="sf-item--input-number" {...props}>
        <InputNumber
          value={state.value}
          placeholder={placeholder}
          onChange={handleInput}
          disabled={disabled}
        />
      </FormItemLayout>
    )
  }
}

