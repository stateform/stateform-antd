import React, { Component } from 'react';
import createStateForm from './lib'
import 'antd/dist/antd.css'
import './App.styl'
import formState from './formState'
import { Slider } from 'antd'
const StateForm = createStateForm({
  upload: {
    handleUpload: (file, cb) => {
      setTimeout(() => {
        const result = {}
        if (Math.random() > 0.5) {
          const reader = new FileReader();
          reader.onload = function(e) {
              result.status = 'done'
              result.url = e.target.result
              cb(result)
          }
          reader.readAsDataURL(file);
        } else {
          result.status = 'error'
          result.error = 'Here is the error message'
          cb(result)
        }
      }, 2000)
    },
    handleRemove: (file) => {
      console.log(file)
    }
  }
})
class App extends Component {
  constructor() {
    super()
    this.state = {
      formState
    }
  }
  handleSubmit = () => {
    //...
  }
  handleInput = (path, value, index) => {
    console.log(path, value)
  }
  handleSlideChange = (value) => {
    this.refs.form.props.onInput('/slider', value)
  }
  render() {
    return (
      <div className="main-form">
        <h1 className="main-form__title"> StateForm</h1>
        <StateForm
          ref="form"
          state={this.state.formState}
          onInput={this.handleInput}
          onSubmit={this.handleSubmit}
        >
          <Slider key='/custom' onChange={this.handleSlideChange}>
          </Slider>
        </StateForm>
      </div>
    )
  }
}

export default App;
