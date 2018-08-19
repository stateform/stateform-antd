import React from 'react';
import {Switch} from 'antd';
import FormItemLayout from './FormItemLayout'
import FormItem from './FormItem'
export default class StateSwitch extends FormItem {
  render() {
    const {state, props, handleInput} = this
    return (
      <FormItemLayout className="sf-item--switch" {...props}>
        <Switch
          value={state.value}
          disabled={props.disabled}
          checkedChildren={props.onText}
          unCheckedChildren={props.offText}
          onChange={handleInput}
        />
      </FormItemLayout>
    )
  }
}

