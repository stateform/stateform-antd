import React from 'react';
import {Switch} from 'antd';
import FormItem from './FormItem'
export default class StateSwitch extends FormItem {
  render() {
    const {state, props, handleInput} = this
    return (
      <Switch
        value={state.value}
        disabled={props.disabled}
        checkedChildren={props.onText}
        unCheckedChildren={props.offText}
        onChange={handleInput}
      />
    )
  }
}

