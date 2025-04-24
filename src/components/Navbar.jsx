import { Link } from 'react-router-dom';  
import img1 from '../assets/download.jpeg';

function Navbar() {
    return (
        <>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                backgroundColor: '#27435c', 
                padding: '10px', 
                color: 'white', 
                width: '100%', 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                zIndex: 1000, 
                margin: 0, 
                boxSizing: 'border-box' 
            }}>
                <div style={{ display: 'flex' }}>
                    <img src={img1} alt="Bookshop Logo" style={{ height: '40px', marginRight: '10px' }} />
                    <h2 style={{ margin: 0 }}>Bookshop</h2>
                </div>
                <nav>
                    <button style={{ color: 'white', textDecoration: 'none' }}>
                        <Link to="/">Home</Link>
                    </button>
                   
                    <button style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>
                        <Link to="/contact">Contact</Link>
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Navbar;