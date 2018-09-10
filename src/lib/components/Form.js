import React, { Component } from 'react';
import {Form, Button} from 'antd';
import FormItemLayout from './FormItemLayout'
export default class StateForm extends Component {

  render() {
    const props = this.props
    const {footer, cols, layout} = props
    return (
      <Form className="sf-item--Form">
        { props.children }
        {
          (footer) && (
            <FormItemLayout
              className="sf-footer"
              layout={layout}
              cols={footer.cols || cols}
            >
              {
                (footer.showSubmit === true) && (
                  <Button 
                    className="sf-footer__submit"
                    onClick={props.onSubmit}
                    disabled={footer.disableSubmit}
                  >
                    {footer.submitText || 'Submit'}
                  </Button>
                )
              }
              {
                (footer.showReset === true ) && (
                  <Button 
                    className="sf-footer__reset"
                    onClick={props.onReset}
                    disabled={footer.disableReset}
                  >
                    {footer.resetText || 'Reset'}
                  </Button>
                )
              }
            </FormItemLayout>
          )
        }
      </Form>
    )
  }
}
