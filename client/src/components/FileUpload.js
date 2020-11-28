import React,{Fragment,useState} from 'react'

export const FileUpload = () => {

  const [file,setFile] = useState('')
  const [fileName,setFileName] = useState('Choose File')
  return (
    <Fragment>
      <form>
      <div className="custom-file mb-4">
        <input type="file" className="custom-file-input" id="customFile"/>
        <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
      </div>
      <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"></input>
      </form>
    </Fragment>
  )
}
