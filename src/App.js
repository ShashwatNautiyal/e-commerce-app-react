import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Orders from './components/Orders';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/checkout">
						<Nav />
						<Checkout />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/orders">
						<Nav />
						<Orders />
					</Route>

					<Route path="/">
						<Nav />

						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
