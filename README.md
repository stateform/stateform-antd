StateForm implementation of Antd@^3.8.1

## Quick Start  
```js  
import 'antd/dist/antd.css'
import { createStateForm } from '@stateform/antd'
import "@stateform/antd/dist/stateform-antd.css"

const StateForm = createStateForm({
  upload: {
    handleUpload(file, props, cb) {
      // You should upload the file by yourself,
      // and call `cb` when the upload is completed
      cb({

        // "uploading" | "done" | "error"
        status: "done", 

        // By default, we will use the value of the `url` as the input value of this upload,
        // thus the outside world will only receive the url string.
        // If you want to input more infomation, you can set a `value` property, see below
        url: "http://xxxxx",

        // when error happened
        // error: "error message",
        
        // if there is an `value` property, we will use its value as the input value
        // value: {
        //  name: 'custom file name',
        //  url: 'http://xxxx'
        // }
      })
    },
    handleRemove(file) {
      // on file remove
    }
  },
  // components: customComponents
})

// now you can use StateForm as a component in react 
// e.g., <StateForm state={yourFormState} onInput={inputHandler} onSubmit={submitHandler} />
```

## Playground  

[![Edit StateForm of Antd Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/lx8q1143mz?module=%2Fsrc%2FformState.js)

## Install   
```sh  
npm install @stateform/antd  --save
```
`react` and `antd` are peerDependencies

## API  
### `createStateForm`  
```ts  
type createStateForm = (options?: StateFormOptions) => StateForm

interface StateFormOptions {
  // if you use Upload component, you should implement handleUpload and handleRemove 
  upload?: {
    handleUpload: (file: File, props: any, cb: UploadCallback) => void;
    handleRemove: (file: FileItem) => void;
  },
  // you are able to use custom components in StateForm
  components?: {
    [key: string]: React.Component;
  }
}

type UploadCallback = (FileItem) => void;

interface FileItem {
  url: string;
  status: "uploading" | "done" | "error";
  thumbUrl?: undefined
  name?: string;
  error?: string;
  value?: any;
  uid?: string;
}
```
Example  
see [QuickStart](#quick-start)

### `FormItemLayout`  
You can use this component in your custom component   
```ts  
interface FormItemLayoutProps {
  layout?: string;
  label?: string;
  cols?: StateForm.Cols;
  required?: boolean;
  className?: string;
  help?: string;
  error?: string;
  [key: string]: any;
}
interface FormItemLayout extends React.Component<FormItemLayoutProps> {
}
```
Here is an example to define a custom component 
```js   
import React from 'react'
import { Button , Input } from 'antd'
import { createStateForm, FormItemLayout } from '@stateform/antd'  

class Captcha extends React.Component {

  // Component will receive an `onInput` prop and all props from the state node.
  // For example, below is the state object of the StateForm, 
  // then Captcha component will receive `onInput` and p1, p2 .... pn.
  // {
  //   // ....
  //   children: [
  //     // ....
  //     {
  //       component: 'Captcha',
  //       p1: '1',
  //       p2: '2',
  //       // ...
  //       pn: 'n'
  //     }
  //   ]
  // }
  sendCaptcha = () {
    // ....
  }

  handleChange = (e) {
    const value = e.target.value
    this.setState({
      value
    })
    // call onInput when you want to notify the outside, 
    // this will trigger a StateForm `input` event 
    this.props.onInput(value)
  }

  render() {
    const { state, props } = this
    return (
      <FormItemLayout {...props}>
        <Input
          value={state.value}
          onChange={handleChange}
        />
        <Button onClick={sendCaptcha}>Send</Button>
      </FormItemLayout>
    )
  }
}

// now you can add this component to StateForm  
const StateForm = createStateForm({
  //...
  components: {
    Captcha
  }
})

```


## TODO  
* test


## License  
MIT
