import React from 'react';
import {Radio} from 'antd';
import FormItemLayout from './FormItemLayout'
import FormItem from './FormItem'
export default class StateRadio extends FormItem {
  render() {
    const {state, props, handleChange} = this
    const {option, disabled, disabledItems = {}} = props
    return (
      <FormItemLayout className="sf-item--radio" {...props}>
       <Radio.Group
          value={state.value}
          disabled={disabled}
          onChange={handleChange}
        >
          {Object.keys(option).map((label) => (
            <Radio
              key={label}
              value={option[label]}
              disabled={disabledItems[label]}
            >
              {label}
            </Radio>
          ))}
        </Radio.Group>
      </FormItemLayout>
    )
  }
}
