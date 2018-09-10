import React from 'react';
import FormItemLayout from './components/FormItemLayout'

export default class StateForm extends React.Component {
  handleInput = (path) => {
    return (value, index) => {
      this.props.onInput(path, value, index)
    }
  }
  handleSubmit = () => {
    this.props.onSubmit()
  }
  handleReset = () => {
    this.props.onReset()
  }
  renderFormItem(state) {
    if (state.hidden) {
      return
    }
    const path = state.path
    const customElement = this.customElements[path]
    let component
    let children
    let FinalComponent
    if (customElement) {
      component = 'Custom'
      FinalComponent = customElement
    } else {
      component = state.component
      FinalComponent = this.components[component]
      children = state.children
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
    }
    const props = Object.assign({}, state)
    props.key = path
    props.onInput = this.handleInput(path)
    if (path === '/') {
      props.onSubmit = this.handleSubmit
      props.onReset = this.handleReset
      return (
        <FinalComponent {...props}>
          {children}
        </FinalComponent>
      )
    } else {
      return (
        <FormItemLayout className={"sf-item--" + component} {...props}>
          {
            component === 'Custom'
              ? FinalComponent
              : (
                <FinalComponent {...props}>
                  {children}
                </FinalComponent>
              )
          }
        </FormItemLayout>
      )
    }
  }
  render() {
    const formState = this.props.state
    const {cols, layout} = formState
    this.cols = cols
    this.layout = layout
    const customElements = this.customElements = {}
    React.Children.forEach(this.props.children, (item) => {
      customElements[item.key] = item
    })
    return this.renderFormItem(formState)
  }
}
