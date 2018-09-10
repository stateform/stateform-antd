import React from 'react';
import {Select} from 'antd';
import FormItem from './FormItem'
export default class StateCheckbox extends FormItem {
  render() {
    const {state, props, handleInput} = this
    const {option, disabled, disabledItems = {}} = props
    const Option = Select.Option
    return (
      <Select
        value={state.value}
        placeholder={props.placeholder}
        disabled={disabled}
        onChange={handleInput}
        mode={props.multiple ? "multiple" : undefined }
        allowClear={true}
      >
          {Object.keys(option).map((label) => (
            <Option
              key={label}
              value={option[label]}
              disabled={disabledItems[label]}
            >
              {label}
            </Option>
          ))}
      </Select>
    )
  }
}
