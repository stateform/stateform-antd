import React, { Component } from 'react';
import createStateForm from './lib'
import 'antd/dist/antd.css'
import './App.styl'
import formState from './formState'
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
  render() {
    return (
      <div className="main-form">
        <h1 className="main-form__title"> Test Form</h1>
        <StateForm
          state={this.state.formState}
          onInput={this.handleInput}
          onSubmit={this.handleSubmit}
        >
          <button>Custom Submit</button>
        </StateForm>
      </div>
    )
  }
}

export default App;
