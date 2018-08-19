import React, { Component } from 'react';
import {Form, Button} from 'antd';
import FormItemLayout from './FormItemLayout'
export default class StateForm extends Component {

  render() {
    const props = this.props
    const {submitCols, cols} = props
    return (
      <Form className="sf-item--form">
        { props.children }
        {
          (props.showSubmit !== false) && (
            <FormItemLayout
              className="sf-item__submit"
              cols={submitCols || cols}
            >
              <Button onClick={props.onSubmit}>{props.submitText || 'Submit'}</Button>
            </FormItemLayout>
          )
        }
      </Form>
    )
  }
}
