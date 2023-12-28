import React from 'react';

import SearchInput from '../Components/searchInput';
import ProfileDropdown from '../Components/profileDropdown';


const HeaderFooter = () => {
    return (
        <div style={{ display: 'flex' }}>
          
          <div style={{flex: '1', padding: '0',margin:0 }}>
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
          </div>
        </div>
      );
};

export default HeaderFooter;
