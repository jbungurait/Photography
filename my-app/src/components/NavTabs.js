import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a href='#bio'
                onClick={() => handlePageChange('Bio')}
                className={currentPage === 'Bio' ? 'nav-link active' : 'nav-link'}
                ><h2>Bio</h2></a>
            </li>
            <li className='nav-item'>
                <a href='#portfolio'
                onClick={() => handlePageChange('PortfolioMain')}
                className={currentPage === 'PortfolioMain' ? 'nav-link active' : 'nav-link'}
                ><h2>Portfolio</h2></a>
            </li>
            <li className='nav-item'>
                <a href='#cv'
                onClick={() => handlePageChange('CV')}
                className={currentPage === 'CV' ? 'nav-link active' : 'nav-link'}
                ><h2>CV</h2></a>
            </li>
            <li className='nav-item'>
                <a href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                ><h2>Contact</h2></a>
            </li>
        </ul>
    );
};

export default NavTabs;