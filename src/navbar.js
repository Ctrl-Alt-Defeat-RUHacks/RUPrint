import React from 'react';
import actLogo from './actLogo.png';

class navbar extends React.Component {
    render() {
      return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ruNav">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="www.google.com"><h2 id="title"> <span style={{color: "#004c9b"}}>RU</span><span style={{color: "#ffdc00"}}>Print</span></h2></a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="www.google.com">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="www.google.com">Courses</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="www.google.com">Help</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="www.google.com">Logout</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="www.google.com" tabindex="-1" aria-disabled="true"><div>Firtname Lastname <img src={actLogo} style={{height: '30px'}}alt="acct"/></div></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
      );
    }
}

export default navbar;