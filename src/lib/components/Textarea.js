import React from 'react';
import {Input} from 'antd';
import FormItemLayout from './FormItemLayout'
import FormItem from './FormItem'
export default class StateTextarea extends FormItem {
  render() {
    const {state, props, handleChange} = this
    const {disabled, placeholder} = props
    return (
      <FormItemLayout className="sf-item--textarea" {...props}>
        <Input.TextArea 
          value={state.value} 
          placeholder={placeholder} 
          disabled = {disabled}
          onChange={handleChange} 
        />
      </FormItemLayout>
    )
  }
}

