import React from 'react';
import {Icon, Button} from 'antd'
import FormItemLayout from './FormItemLayout'
import FormItem from './FormItem'
export default class StateList extends FormItem {
  addItem = () => {
    this.handleInput((this.props.value || []).concat(null))
  }
  removeItem = (index) => {
    return () => {
      this.handleInput(this.props.value.filter((_, idx) => idx !== index ), index)
    }
  }
  render() {
    const { props } = this
    const { isAddable, addText } = props
    const children = props.children.map((item, index) => {
      return (
        <div
          key={item.key}
          className="sf-item-list__item"
        >
          {item}
          <a
            className="sf-item-list__remove"
            onClick={this.removeItem(index)}
          >
            <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                />
          </a>
      </div>
      )
    })
    return (
      <FormItemLayout className="sf-item--list" {...props}>
        { children }
        { isAddable !== false && (
          <Button block type="dashed" onClick={this.addItem}>
            <Icon type="plus" /> {addText || 'Add Item'}
          </Button>
        )}
      </FormItemLayout>
    )
  }
}
