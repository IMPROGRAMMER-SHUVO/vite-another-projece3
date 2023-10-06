
import './Header.css';
import mainlogo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
<img src={mainlogo} alt="" />
<div>
<Link to="/">shop</Link>
<Link to="/Orders">Order Review</Link>
<Link to="/Inventory">Manage Inventory</Link>
<Link to="/Login">Login</Link>
</div>
        </nav>
    );
};

export default Header;