import React from 'react';
import { Link } from 'react-router-dom';
import { getTotal } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import './Checkout.css';

const Checkout = () => {
	const [{ cart }, dispatch] = useStateValue();

	const removeFromCart = (item) => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			id: item.id,
		});
	};

	const placeOrder = () => {
		dispatch({
			type: 'PLACE_ORDER',
			cart: cart,
		});
	};

	return (
		<div>
			{cart?.length === 0 ? (
				<h2 className="checkout__heading">Your cart is Empty!</h2>
			) : (
				<div className="checkout">
					<div className="checkout__products">
						{cart?.map((item) => (
							<div className="checkout__product">
								<img src={item.img} alt="" />
								<div className="checkout__info">
									<h2>{item.name}</h2>
									<div>
										{Array(item.star)
											.fill('⭐')
											.map((star) => (
												<span>⭐</span>
											))}
									</div>
									<h4>Price: ₹{item.price}</h4>
									<button onClick={() => removeFromCart(item)}>Remove from Cart</button>
								</div>
							</div>
						))}
					</div>
					<div className="checkout__total">
						<h3>
							Total ({cart?.length} items): ₹{getTotal(cart)}
						</h3>
						<div>
							<input type="checkbox" /> <span> Apply coupan</span>
						</div>
						<Link to="/Orders">
							<button className="checkout__placeOrder" onClick={() => placeOrder()}>
								Place Order
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Checkout;
