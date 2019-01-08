import React from "react";
import img from '../../files/images/jonh.jpg';

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
              <p style={{color:"white"}} className='tl fl w-50 pa2'> Hi there, this is a web page that i made using mi actual knowledge about web app technologies just to get started. Im still working on it, and i hope with the time it can get better as i keep learning.
                                                         by the time come, you can go to the post section if you want to leave a comment. </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
