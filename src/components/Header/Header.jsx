
import './Header.css';
import mainlogo from "../../images/Logo.svg"
const Header = () => {
    return (
        <nav className='header'>
<img src={mainlogo} alt="" />
<div>
<a href="/shop">shop</a>
<a href="/Order Review">Order Review</a>
<a href="/Manage Inventory">Manage Inventory</a>
<a href="/Login">Login</a>
</div>
        </nav>
    );
};

export default Header;