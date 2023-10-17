import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Bio from './Pages/Bio';
import PortfolioMain from './Pages/PortfolioMain';
import CV from './Pages/CV';
import Contact from './Pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'CV') {
            return <CV />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <PortfolioMain />;
        }
            return <Bio />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
        
    )
}