import React from 'react';
import SimpleComponent from '../Components/sideNav';
import SearchInput from '../Components/searchInput';
import ProfileDropdown from '../Components/profileDropdown';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className='container-fluid' style={{ flex: '0 0 200px', backgroundColor: 'white', padding: '0',height:'100%' }}>
        <SimpleComponent/>
      </div>

      {/* Second Column (Header, Content, and Footer) */}
      <div style={{ flex: '1', padding: '0',margin:0 }}>
        {/* Header */}
        <header style={{ marginBottom: '20px',backgroundColor:'#212529' }}>
            <div className='row' style={{justifyContent:'right'}}>
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
        <section style={{backgroundColor:'yellow'}}>
          <h2>Content Section</h2>
          <p>This is the main content of the page.</p>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px',backgroundColor:'grey' }}>
          <p>&copy; 2023 Your Company</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
