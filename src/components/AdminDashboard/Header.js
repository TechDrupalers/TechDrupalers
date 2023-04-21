import React from 'react';
import './Header.css';
import {FiLogIn} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';
const Header = () => {
    return (
        <div className='header'>
            <div className='sitelogo'>
                <h1>Export Portal</h1>
            </div>
            <div className='tabs'>
                <FaUser/>
                <FiLogIn/>
            </div>
        </div>
    );
};

export default Header;