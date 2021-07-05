import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://www.pngfind.com/pngs/b/56-565024_amazon-png.png"
					alt=""
				/>
			</Link>
			<div className="login__form">
				<h1>Sign In</h1>
				<div className="login__box">
					<h3>Email</h3>
					<input type="email" />
				</div>
				<div className="login__box">
					<h3>Password</h3>
					<input type="password" />
				</div>
				<button>Log In</button>

				<p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
				<button>Create your Amazon account</button>
			</div>
		</div>
	);
};

export default Login;
