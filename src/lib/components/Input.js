import React from 'react';
import {Input} from 'antd';
import FormItem from './FormItem'
export default class StateInput extends FormItem{
  render() {
    const {state, props, handleChange} = this
    const {type, prepend, append, placeholder,
      disabled, readOnly, autoComplete, autoFocus} = props
    return (
      <Input
        type={type}
        value={state.value}
        addonBefore={prepend}
        addonAfter={append}
        placeholder={placeholder}
        readOnly={readOnly}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onChange={handleChange}
        disabled={disabled}
      />
    )
  }
}

