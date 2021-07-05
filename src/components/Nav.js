import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from '@material-ui/icons';
import { useStateValue } from '../context/StateProvider';

const Nav = () => {
	const [{ cart }] = useStateValue();

	return (
		<nav className="nav">
			<Link to="/">
				<img
					className="nav__logo"
					src="https://www.pngitem.com/pimgs/b/1-12080_amazon-com-logo-png.png"
					alt=""
				/>
			</Link>
			<div className="nav__searchBox">
				<input className="nav__input" type="text" />
				<div className="nav__searchBtn">
					<Search />
				</div>
			</div>
			<div className="nav__links">
				<Link to="/login" className="nav__link">
					<p className="nav__linkUpperText">Hello,</p>
					<p>Sign In</p>
				</Link>

				<Link to="/orders" className="nav__link">
					<p className="nav__linkUpperText">Returns</p>
					<p>& Orders</p>
				</Link>

				<Link to="/checkout" className="nav__link nav__cart">
					<ShoppingCart />
					<p>{cart.length}</p>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
