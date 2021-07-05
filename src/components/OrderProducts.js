import React from 'react';
import './OrderProducts.css';

const OrderProducts = ({ name, img, star, price }) => {
	console.log(name, price, star, img);
	return (
		<div className="orderProduct">
			<img src={img} alt="" />

			<div>
				<h3>{name}</h3>
				<div className="orderProduct__stars">
					{Array(star)
						.fill('⭐')
						.map((star) => (
							<span>⭐</span>
						))}
				</div>
				<h4>Price: ₹{price}</h4>
			</div>
		</div>
	);
};

export default OrderProducts;
