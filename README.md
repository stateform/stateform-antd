StateForm implementation of Antd@^3.8.1

## Quick Start  
```js  
import 'antd/dist/antd.css'
import createStateForm from '@stateform/antd'

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
// e.g., <StateForm state={yourFormState} />
```

## Install   
```sh  
npm install @stateform/antd  --save
```
`react` and `antd` are peerDependencies

## API  

## TODO  
* test


## Lisense  
MIT