import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {CiLogin} from "react-icons/ci"
import { FaHome } from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import { FaUpload } from "react-icons/fa";
import { GiTravelDress } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";


import './Header.css'

function Header()
{   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
       
        <div className='navbar'>
        <span className='website-name'>OutfitStyler<sub>.com</sub>
        </span>
        <span className='menu-icon' onClick={handleMenuToggle}>{isMenuOpen ? <IoIosCloseCircle size={30}/>:<GiHamburgerMenu size={30}/>}</span>
        <ul className={`navlinks ${isMenuOpen ? 'mobile' : ''}`} >
            <Link to="/Home"><li><FaHome/>Home</li></Link>
            <Link to=""><li><GiTravelDress/>Wardrobe</li></Link>
            <Link to=""><li><FaUpload/>Upload</li></Link>
            <Link to=""><li><CgProfile/>Profile</li></Link>
            <Link to=""><li><CiLogin/>Logout</li></Link>         
        </ul>
        </div>
       
    )
}
export default Header