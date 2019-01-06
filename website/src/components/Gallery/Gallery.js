import React from "react";
import Image from '../Image/Image';
import NewImage from '../NewImage/NewImage';
import { API_URL } from '../config';
import Notifications, { notify } from 'react-notify-toast'
import './Gallery.css';

const toastColor = { 
  background: '#505050', 
  text: '#fff' 
}


class Gallery extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      uploading: false,
      images: props.imageArray
    }
  }

  toast = notify.createShowQueue()

  onChange = e => {
    const errs = [] 
    const files = Array.from(e.target.files)
    console.log()

    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time'
      return this.toast(msg, 'custom', 2000, toastColor)  
    }

    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
      }
      formData.append(i, file)
    })

    if (errs.length) {
      return errs.forEach(err => this.toast(err, 'custom', 2000, toastColor))
    }
    this.setState({ uploading: true })
   
   fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
      
    })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(image => {
      /*this.props.addPic(images)*/
      console.log('this.state.images')
      this.setState({images : this.state.images.push(
        { img : image[0].secure_url,
          name : "new Image Uploaded"}
      )});
    })
    .catch(err => {
      err.json().then(e => {
        this.toast(e.message, 'custom', 2000, toastColor)
        this.setState({ uploading: false })
      })
    })
  }
  render() {
    const { onChange} =this.props;
    const {images} = this.state;
    return (
      <div className="gallery m5">
      {images.map((imageObj, i)=> 
        <div key={i}>
          <Image imageObj={imageObj}/>
        </div>
        )}
        <NewImage onChange={onChange}/>
      </div>
      
    );
  }
}
export default Gallery;
