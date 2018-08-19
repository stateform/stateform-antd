import React from 'react';
import {Row, Col, Icon} from 'antd';
import cls from 'classnames'
export default class StateFormItemLayout extends React.Component {
  render() {
    const props = this.props
    const cols = props.cols
    const {layout, label, error, required, help, children, className} = props
    const {label: labelCols, wrapper: wrapperCols} = cols
    if (typeof labelCols !== 'object') {
      cols.label = {
        span: labelCols
      }
    }
    if (typeof wrapperCols !== 'object') {
      cols.wrapper = {
        span: wrapperCols
      }
    }
    const Label = (
      <Col
        className="sf-item__label"
        span={cols.label.span}
        offset={cols.label.offset}
        xs={cols.xsLabel}
        sm={cols.smLabel}
        md={cols.mdLabel}
        lg={cols.lgLabel}
      >
        { label && (
          <span
            className={"sf-item__label-text" + (required ? " sf-item__label-text--required": "")}
          >
              { label }
          </span>
        )}
        {help && (
          <Icon
            className="sf-item__help-icon"
            type="question-circle-o"
            title={help}
          />
        )}
      </Col>
    )
    const Wrapper = (
      <Col
        className="sf-item__wrapper"
        span={cols.wrapper.span}
        offset={cols.wrapper.offset}
        xs={cols.xsWrapper}
        sm={cols.smWrapper}
        md={cols.mdWrapper}
        lg={cols.lgWrapper}
      >
        {children}
        <div className="sf-item__error">
          { error }
        </div>
      </Col>
    )
    if (layout === 'vertical') {
      return (
        <div className={cls({
          'sf-item': true,
          'sf-item--vertical': true,
          'sf-item--error': error
        }, props.class, className)}>
          <Row>
            {Label}
          </Row>
          <Row>
            {Wrapper}
          </Row>
        </div>
      )
    } else if (layout === 'inline') {
      return (
        <Col
          span={cols.item.span}
          offset={cols.item.offset}
          className={cls({
            'sf-item': true,
            'sf-item--inline': true,
            'sf-item--error': error
          }, props.class, className)}
        >
          {Label}
          {Wrapper}
        </Col>
      )
    } else {
      return (
        <Row
          className={cls({
            'sf-item': true,
            'sf-item--horizontal': true,
            'sf-item--error': error
          }, props.class, className)}
        >
          {Label}
          {Wrapper}
        </Row>
      )
    }
  }
}

