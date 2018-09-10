import React from 'react';
import {Checkbox} from 'antd';
import FormItem from './FormItem'
export default class StateCheckbox extends FormItem {

  render() {
    const {state, props, handleInput} = this
    const {option, disabled, disabledItems = {}} = props
    return (
      <Checkbox.Group
        value={state.value}
        disabled={disabled}
        onChange={handleInput}
      >
          {Object.keys(option).map((label) => (
            <Checkbox
              key={label}
              value={option[label]}
              disabled={disabledItems[label]}
            >
              {label}
            </Checkbox>
          ))}
      </Checkbox.Group>
    )
  }
}
