import React from 'react';
import SimpleComponent from '../Navigation/sideNav';
import SearchInput from '../Components/searchInput';
import ProfileDropdown from '../Components/profileDropdown';
import Content from '../Components/Content';
import styles from './layout.module.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Components/dashboard';

const Layout = () => {
  return (
    <BrowserRouter>
    <div style={{ display: 'flex' }}>
      <div className='container-fluid' style={{ flex: '0 0 200px', backgroundColor: 'white', padding: '0',height:'auto' }}>
        <SimpleComponent/>
      </div>

      {/* Second Column (Header, Content, and Footer) */}
      <div style={{flex: '1', padding: '0',margin:0 }}>
        {/* Header */}
        <header style={{ backgroundColor:'#212529' }}>
            <div className='row' style={{justifyContent:'right',height:65}}>
                <div className='col-3'>
                
                </div>
                <div className='col-3'>
                
                </div>
                <div className='col-3'>
                <SearchInput/>
                </div>
                <div className='col-3'>
                <ProfileDropdown/>
                </div>
            
            </div>
          
        </header>

        {/* Content Section */}
        <section style={{backgroundColor:'grey',margin:10,height:'auto'}}>
        <Routes>
        <Route index path="/" element ={<Content/>}></Route>
        <Route path="/home" element={<Content/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route path="/users">
          <Route index element={<Users/>} />
          <Route path="Profile" element={<ProfilePage/>}/>
          <Route path=":userID" element={<Profile/>}/>
          <Route path="edit" element={<EditForm/>}/>
        </Route> */}
        <Route path="/404" element={<h3>User Not Fount</h3>}  />
        <Route path="*" element={<Navigate to="/404" replace/>}/>
      </Routes>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <h6 style={{margin:15}}>&copy; 2023 All rights reserved.</h6>
        </footer>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default Layout;
