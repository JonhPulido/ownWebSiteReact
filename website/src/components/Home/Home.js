import React from "react";
import img from '../../files/images/germanBack.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="mw9 center">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-20-ns pa2">
              <img src={img} width='200px' heigh='auto'/>
            </div>
            <div className="fl w-100 w-80-ns pa2">
              <p style={{color:"white"}} className='tl'> Home this page </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
