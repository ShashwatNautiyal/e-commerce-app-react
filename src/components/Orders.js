import React from 'react';
import { useStateValue } from '../context/StateProvider';
import OrderProducts from './OrderProducts';
import './Orders.css';

const Orders = () => {
	const [{ order }, dispatch] = useStateValue();

	console.log(order);

	const date = new Date();
	const options = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		<div className="orders__heading">
			{order.length === 0 ? (
				<div>
					<h2>No Orders Placed</h2>
				</div>
			) : (
				<div>
					<h2>Order Placed on {date.toLocaleDateString('en-US', options)}</h2>
					<div className="orders">
						{order.map((item) => (
							<OrderProducts
								img={item.img}
								name={item.name}
								price={item.price}
								star={item.star}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Orders;
