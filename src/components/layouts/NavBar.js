import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NavBar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<a href="/">
					{' '}
					<i className={icon} /> {title}
				</a>
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</nav>
	);
};

NavBar.defaultProps = {
	title: 'Github App',
	icon: 'fab fa-github'
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default NavBar;
