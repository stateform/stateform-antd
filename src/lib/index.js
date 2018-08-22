import * as builtInComponents from './components'
import './components.styl'
import BaseStateForm from './StateForm'

function createStateForm(options = {}) {
  const {upload = {}, components} = options
  class Upload extends builtInComponents.Upload {
    onUpload = upload.handleUpload
    onRemove = upload.handleRemove
  }

  class UploadList extends builtInComponents.UploadList {
    onUpload = upload.handleUpload
    onRemove = upload.handleRemove
  }

  const finalComponents  = Object.assign({}, builtInComponents, {
    Upload,
    UploadList
  }, components)

  class StateForm extends BaseStateForm {
    components = finalComponents
  }

  return StateForm
}

export default createStateForm
export {createStateForm}
