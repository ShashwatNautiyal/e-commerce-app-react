export const initialState = {
	cart: [],
	order: [],
};

export const getTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.item],
			};
		case 'REMOVE_FROM_CART':
			let newCart = [...state.cart];

			const index = state.cart.findIndex((item) => item.id === action.id);

			if (index >= 0) {
				newCart.splice(index, 1);
			} else {
				console.warn('Cant remove product');
			}

			return {
				...state,
				cart: newCart,
			};

		case 'PLACE_ORDER':
			return {
				...state,
				order: [...state.order, ...action.cart],
				cart: [],
			};

		default:
			return state;
	}
}

export default reducer;
