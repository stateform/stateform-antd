StateForm implementation of Antd@^3.8.1

## Quick Start  
```js  
import 'antd/dist/antd.css'
import createStateForm from '@stateform/antd'
import "@stateform/antd/dist/stateform-antd.css"

const StateForm = createStateForm({
  upload: {
    handleUpload(file, cb) {
      // your upload implementation
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
see [StateForm](https://github.com/stateform/StateForm-Specification)

## TODO  
* test


## Lisense  
MIT