import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Rai Shahid Kharal
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
