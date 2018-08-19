import React from 'react';
import {Checkbox} from 'antd';
import FormItemLayout from './FormItemLayout'
import FormItem from './FormItem'
export default class StateCheckbox extends FormItem {

  render() {
    const {state, props, handleInput} = this
    const {content, disabled} = props
    const value = state.value === true ? [true] : []
    return (
      <FormItemLayout className="sf-item--boolcheck" {...props}>
       <Checkbox.Group
          value={value}
          disabled={disabled}
          onChange={(val) => handleInput(val[0] === true ? true : false)}
        >
         <Checkbox value={true}>
          <span
            dangerouslySetInnerHTML={{__html: content}}
          >
          </span>
        </Checkbox>
        </Checkbox.Group>
      </FormItemLayout>
    )
  }
}

