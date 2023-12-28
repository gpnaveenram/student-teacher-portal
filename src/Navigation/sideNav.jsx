import React from 'react';
import { Link } from 'react-router-dom';

// Functional Component
const SimpleComponent = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px",height:700}}>
    <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      <span className="fs-4"><i class="fa-solid fa-list-check" style={{color: "#f9fafa"}}></i>&nbsp;ST Portal</span>
    </Link>
    <hr></hr>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        
        <Link to="/home" className="nav-link active" aria-current="page">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
          Home
        </Link>
      </li>
      <li>
        <Link to="/Dashboard" className="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
          Dashboard
        </Link>
      </li>
      <li>
        <a href="index.html" className="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
          Student
        </a>
      </li>
      <li>
        <a href="index.html" className="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
          Teacher
        </a>
      </li>
      <li>
        <a href="index.html" className="nav-link text-white">
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
          Tasks
        </a>
      </li>
    </ul>
    <hr></hr>
    <div className="dropdown">
      <a href="index.html" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://png.pngtree.com/png-clipart/20210301/ourmid/pngtree-shining-circle-portal-frame-png-image_2967240.jpg" alt="" width="32" height="32" class="rounded-circle me-2"></img>
        <strong>Portal</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" >
        {/* <li><a className="dropdown-item" href="#">New project...</a></li> */}
        <li><a className="dropdown-item" href="index.html">Teacher</a></li>
        <li><a className="dropdown-item" href="index.html">Student</a></li>
        <li><hr className="dropdown-divider"></hr></li>
        <li><a className="dropdown-item" href="index.html">Sign out</a></li>
      </ul>
    </div>
  </div>
  );
};

export default SimpleComponent;
