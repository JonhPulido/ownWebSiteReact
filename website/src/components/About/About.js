import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="images pv6">
          <p style={{color:"white"}}  className='tc'>
            This is a sample page building with React. In this web page i use the crate-react-app npm tool
            wich allow you to set up all your react enviroment with no build configuration.
            if you want to get more information or get started with the npm package click on the follow link.
            <br/>
            <a href='https://www.npmjs.com/package/create-react-app'>Create react app</a>
          </p>
        </div>
      </div>
    );
  }
}
export default About;
