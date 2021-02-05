import React from 'react';
import Nav_header from './nav_header';
import Company_introduce from './company_introduce';
import './homepage.css';
function homepage(){
    return(
        <div className = 'homepage'>
            <Nav_header/>
            <Company_introduce />
        </div>
    );
}
export default homepage;
