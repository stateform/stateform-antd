import React from 'react';

export default class StateForm extends React.Component {
  handleInput = (path) => {
    return (value, index) => {
      this.props.onInput(path, value, index)
    }
  }
  handleSubmit = () => {
   this.props.onSubmit()
  }
  renderFormItem(state) {
    if (state.hidden) {
      return
    }
    let children = state.children
    if(children) {
      children = children.reduce((result, item) => {
        if (item) {
          if (!item.cols) {
            item.cols = this.cols
          }
          if (!item.layout) {
            item.layout = this.layout
          }
          result.push(this.renderFormItem(item))
        }
        return result
      }, [])
    }
    const path = state.path
    const props = Object.assign({}, state)
    props.key = path
    props.onInput = this.handleInput(path)
    if (path === '/') {
      children = children.concat(this.props.children)
      props.onSubmit = this.handleSubmit
    }
    const Comp = this.components[state.component]
    return (
      <Comp {...props}>
        {children}
      </Comp>
    )
  }
  render() {
    const formState = this.props.state
    const {cols, layout} = formState
    this.cols = cols
    this.layout = layout
    return this.renderFormItem(formState)
  }
}
