import React, { Component } from 'react';
import img from './files/images/german1.jpg';
import img2 from './files/images/german2.jpg';
import Navbar from './components/NavBar/Navbar';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { API_URL } from './components/config';
import './App.css';

const toastColor = { 
  background: '#505050', 
  text: '#fff' 
}

let urls = [
  { img : img,
    name : "First Image"} ,
  { img : img2,
    name : "Second Image" }, 
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      route : 'Home',
      loading: true,
      uploading: false,
      images: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          return this.setState({ loading: false })  
        }
        const msg = 'Something is went wrong with Heroku' 
        this.toast(msg, 'custom', 2000, toastColor)
      })
  }

  addImage (image){
    urls.push(
      { img : image[0].secure_url,
        name : "new Image Uploaded"}
    )
  }

  renderSwitch = (param) =>{
    switch(param) {
      case 'About':
        return <div>  
                <About/>
               </div>;
      case 'Gallery':
        return <div>  
                <Gallery 
                  imageArray={urls}
                  addPic={this.addImage}
                />
               </div>;   
      case 'Home':
      return <div>  
              <Home/>
             </div>;        
      default:
        return 'foo';
    }
  };
  
  onRouteChange = (route) =>{
    this.setState({route: route});

  };

  render() {
    const {route} = this.state;
    return (
      <div className = "App">
          <Navbar onRouteChange = {this.onRouteChange}/>
          {this.renderSwitch(route)}
          <Footer/>
      </div>
    );
  }
}

export default App;
