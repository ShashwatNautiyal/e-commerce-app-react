import React from 'react';
import { useStateValue } from '../context/StateProvider';
import './Product.css';

const Product = ({ id, name, star, img, price }) => {
	const [{ cart }, dispatch] = useStateValue();

	const addToCart = () => {
		dispatch({
			type: 'ADD_TO_CART',
			item: {
				id: id,
				name: name,
				img: img,
				price: price,
				star: star,
			},
		});
	};

	return (
		<div className="product">
			<div>
				<h2>{name}</h2>
			</div>
			<img src={img} alt="" />
			<div>
				<div className="product__stars">
					{Array(star)
						.fill('⭐')
						.map((star) => (
							<span>⭐</span>
						))}
				</div>
				<h3>Price: ₹{price}</h3>
				<button onClick={addToCart}>Add to Cart</button>
			</div>
		</div>
	);
};

export default Product;
