import { useState } from 'react';
import {
	ProductInCart,
	ShoppingCart,
	onChangeArgs,
} from '../interfaces/shoppingCart.interface';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

	const onProductCountChange = ({ product, count }: onChangeArgs) => {
		setShoppingCart((oldShoppingCart) => {
			const { [product.id]: _, ...temp } = oldShoppingCart;

			if (count > 0) {
				temp[product.id] = { ...product, count };
			}

			return temp;
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
