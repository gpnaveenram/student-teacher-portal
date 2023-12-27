import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const ProfileDropdown = () => {

    const[dropdown,setdropdown]=useState(false);

    const[btn,setbtn]=useState('');

    const setbuttonName = (e)=>{
    
        console.log(e.currentTarget.textContent);
        setbtn(e.currentTarget.textContent);
    }

    const handleClick =()=>{
        setdropdown(!dropdown)
    }
  return (
    <div className="profile-dropdown">
        
      <ul onClick={handleClick}  className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li  className="nav-item dropdown">
                    <div style={{marginTop:8,color:'white',textAlign:'right'}} className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{btn}<i className="fas fa-user fa-fw" style={{color:'white',textAlign:'right'}}></i>
                    
                    </div>
                    
                </li>

        </ul>
        {dropdown &&
                    (<ul style={{height:160,width:200}} className="dropdown-menu dropdown-menu-end show" aria-labelledby="navbarDropdown">
                        <li><div onClick={setbuttonName}  className="dropdown-item" >Student's Portal</div></li>
                        <li><a onClick={setbuttonName}  className="dropdown-item" href="#!">Teacher's Portal</a></li>
                        <li><hr  className="dropdown-divider"></hr></li>
                        <li><a   className="dropdown-item" href="#!">Logout</a></li>
                    </ul>)
        }
    </div>
  );
};

export default ProfileDropdown;
