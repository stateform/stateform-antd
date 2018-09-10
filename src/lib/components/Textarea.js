import React from 'react';
import {Input} from 'antd';
import FormItem from './FormItem'
export default class StateTextarea extends FormItem {
  render() {
    const {state, props, handleChange} = this
    const {disabled, placeholder} = props
    return (
      <Input.TextArea 
        value={state.value} 
        placeholder={placeholder} 
        disabled = {disabled}
        onChange={handleChange} 
      />
    )
  }
}

