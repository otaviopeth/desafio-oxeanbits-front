import './Navbar.css'
import { NavLink, useNavigate} from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from '../../lib/axios/axios-instance';
import LinkList from './LinkList'
const Navbar = () => {

  const navRef = useRef();
	const navigate = useNavigate();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const handleLogout = async () => {
		await axios.delete("/api/logout");
		navigate('/login');
	}

	return (
		<header>
			<h3>OXEANBITS</h3>
			<nav ref={navRef}>
				{
			LinkList.map((item) => (
            <li key={item.id}>
              <NavLink to={item.url}>{item.title}</NavLink>
            </li>
          ))
			}
			<button className="logout-btn" onClick={handleLogout}>Logout</button>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);

}

export default Navbar;