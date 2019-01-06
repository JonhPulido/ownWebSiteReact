import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { onRouteChange } = this.props;
    return (
    <header className="bg-white-10 w-100 ph3 pv3 pv4-ns ph4-m ph5-l ">
        <nav className="f6 fw6 ttu tracked">
            <a onClick={()=>onRouteChange('Home')}  className="link dim white dib mr3" href="#" title="Home">Home</a>
            <a onClick={()=>onRouteChange('About')}  className="link dim white dib mr3" href="#" title="About">About</a>
            <a className="link dim white dib mr3" href="#" title="Store">Store</a>
            <a onClick={()=>onRouteChange('Gallery')} className="link dim white dib" href="#" title="Contact">Gallery</a>
        </nav>
    </header>
    );
  }
}

export default Navbar;
