import BaseUpload from './BaseUpload'
export default class UploadSingle extends BaseUpload {
  isMultiple = false
  handleUpload = (file) => {
    const prevFile = this.state.fileList[0]
    const currentFile = this.createFileItem(file, 'uploading')
    if (prevFile) {
      this.onRemove(prevFile)
    }
    this.setState(({value, fileList}) => {
      return {
        value,
        fileList: [currentFile]
      }
    })
    this.onUpload(file, this.props, this.createUploadCallback(currentFile))
    return false
  }
}
