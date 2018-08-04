import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="hero is-primary is-medium is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">

              <div className="navbar-brand">
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>

              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active"><a>Home</a></li>
                      <li><a href="/signup">Signup</a></li>
                      <li><a href="">Become a walker</a></li>
                      <li><a href="">Login</a></li>
                      <li><a href="">Account</a></li>
                      <li><a href="">Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Header;
