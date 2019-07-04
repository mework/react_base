import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<ul>
			<li><Link to="/">首页</Link></li>
			<li><Link to="/login">登陆页</Link></li>
		</ul>
	);
};

export default Header;