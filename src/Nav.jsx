import React from 'react';


function NavBar(){
    return(<nav
        className ="navbar navbar-dark bg-dark NavBarContainer navbar-expand-sm h4 border-1 border-bottom ps-0 pe-0 mb-0 ms-0 me-0"
      >
        <div className ="container-fluid justify-content-center">
          <button
            className ="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className ="navbar-toggler-icon"></span>
          </button>
  
          <div className ="collapse navbar-collapse flex-grow-0" id="main-nav" >
            <ul className ="navbar-nav">
              <li className ="nav-item">
                <a className ="nav-link text-white" href="index.html">Home</a>
              </li>
              <li className ="nav-item">
                <a className ="nav-link text-white" href="TrueNature.html"
                  >TrueNature</a>
              </li>
              <li className ="nav-item">
                <a className ="nav-link text-white" href="GalacticCrusade.html"
                  >GalacticCrusade</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
}

export default NavBar;