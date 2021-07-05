import React from 'react';
import { useState } from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
	const [productInfo, setProductInfo] = useState([
		{
			id: 1,
			name: 'iPad Pro',
			star: 4,
			img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-green-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000',
			price: 79000,
		},
		{
			id: 2,
			name: 'HP i9 Notebook',
			star: 3,
			img: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06970886.png',
			price: 54999,
		},
		{
			id: 3,
			name: 'iPhone 12 Purple',
			star: 4,
			img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1617130317000',
			price: 69900,
		},
		{
			id: 4,
			name: 'HP GK540 Keyboard',
			star: 5,
			img: 'https://www.pngitem.com/pimgs/b/7-77155_pc-keyboard-png.png',
			price: 2999,
		},
		{
			id: 5,
			name: 'Marshal Headphones',
			star: 4,
			img: 'https://www.pngitem.com/pimgs/b/367-3673015_apple-headphones-png.png',
			price: 2999,
		},
		{
			id: 6,
			name: 'Logitech G403 Mouse',
			star: 3,
			img: 'https://www.pngitem.com/pimgs/b/138-1387362_computer-mouse-png.png',
			price: 2999,
		},
	]);

	return (
		<div className="home">
			<img
				className="home__banner"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			<div className="home__products">
				{productInfo.map((info) => (
					<Product
						id={info.id}
						name={info.name}
						star={info.star}
						img={info.img}
						price={info.price}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
