import React from 'react';
import {Upload, Button, Icon} from 'antd';
import FormItemLayout from './FormItemLayout'

export default class BaseUpload extends React.Component {
  isMultiple = true
  constructor(props) {
    super(props)
    const value = props.value
    this.fileId = 0
    this.state = {
      value: value,
      fileList: this.transformValueToFileList(value)
    }
  }
  handleUpload = (file) => {
    const currentFile = this.createFileItem(file, 'uploading')
    this.setState(({value, fileList}) => {
      return {
        value,
        fileList: fileList.concat(currentFile)
      }
    })
    this.onUpload(file, this.createUploadCallback(currentFile))
    return false
  }
  onUpload(file, cb) {
  }
  onRemove(file) {
  }
  handleRemove = (fileItem) => {
    this.handleInput(this.state.fileList.filter(item => item !== fileItem))
    this.onRemove(fileItem)
  }
  createUploadCallback(fileItem) {
    return (result) => {
      Object.assign(fileItem, {
        status: result.status,
        name: fileItem.name,
        value: result.value,
        url: result.url,
        thumbUrl: result.thumbUrl,
        response: result.error
      })
      if (fileItem.status === 'done') {
        this.handleInput(this.state.fileList)
      } else {
        this.forceUpdate()
      }
    }
  }
  createFileItem = (info, status = 'done') => {
    info = typeof info === 'string' ? {url: info} : info
    let {uid, name, url, thumbUrl} =  info
    uid = uid || ('file' + this.fileId++)
    name = name || url
    return {uid, name, url, thumbUrl, status}
  }
  transformValueToFileList(value) {
    if(value) {
      if (this.isMultiple) {
        return value.map(this.createFileItem)
      } else {
        return [this.createFileItem(value)]
      }
    }
    return []
  }
  transformFileListToValue(fileList) {
    const value = []
    fileList.forEach(item => {
      if (item.status === 'done') {
        value.push(item.value || item.url)
      }
    })
    return this.isMultiple ? value : value[0]
  }
  handleInput(fileList) {
    const value = this.transformFileListToValue(fileList)
    this.setState({
      value,
      fileList
    })
    this.props.onInput(value)
  }
  componentWillReceiveProps({value}) {
    if (value !== this.state.value) {
      this.setState({
        value: value,
        fileList: this.transformValueToFileList(value)
      })
    }
  }
  render() {
    const {state, props, handleUpload, handleRemove, isMultiple} = this
    const fileList = state.fileList
    const {disabled, listType, accept, uploadText} = props
    let uploadButton
    if (listType === 'picture-card') {
      uploadButton = (
        <div>
          <Icon type="plus" />
          <div>{uploadText || 'Select File'}</div>
        </div>
      )
    } else {
      uploadButton = (
        <Button>
          <Icon type="upload" />{uploadText || 'Select File'}
        </Button>
      )
    }
    return (
      <FormItemLayout className="sf-item--upload" {...props}>
        <Upload
          action="_blank"
          accept={accept}
          listType={listType}
          disabled={disabled}
          multiple={isMultiple}
          fileList={fileList}
          beforeUpload={handleUpload}
          onRemove={handleRemove}
        >
        { uploadButton }
        </Upload>
      </FormItemLayout>
    )
  }
}

