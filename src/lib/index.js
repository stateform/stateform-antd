import * as builtInComponents from './components'
import './components.styl'
import BaseStateForm from './StateForm'

function createStateForm({upload = {}, components}) {

  class Upload extends builtInComponents.Upload {
    onUpload = upload.handleUpload
    onRemove = upload.handleRemove
  }

  class UploadMulti extends builtInComponents.UploadMulti {
    onUpload = upload.handleUpload
    onRemove = upload.handleRemove
  }

  const finalComponents  = Object.assign({}, builtInComponents, {
    Upload,
    UploadMulti
  }, components)

  class StateForm extends BaseStateForm {
    components = finalComponents
  }

  return StateForm
}

export default createStateForm
export {createStateForm}