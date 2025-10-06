import { useEffect, useRef, useState } from 'react';
import {
	InitialValues,
	onChangeArgs,
} from '../interfaces/shoppingCart.interface';
import { Product } from '../interfaces/product.interface';

interface useProductsArgs {
	product: Product;
	value?: number;
	initialValues?: InitialValues;
	onChange?: (args: onChangeArgs) => void;
}
export const useProduct = ({
	product,
	value = 0,
	initialValues,
	onChange,
}: useProductsArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count ?? value);
	const maxValue = initialValues?.maxCount ?? Infinity;
	const isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) return;

		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	const increaseBy = (value: number) => {
		const newValue = Math.min(Math.max(counter + value, 0), maxValue);

		setCounter(newValue);
		onChange && onChange({ product, count: newValue }); // if onChange
	};

	const reset = () => setCounter(initialValues?.count ?? value);

	return {
		counter,
		maxValue,
		isMaxCountReached: counter === maxValue,
		
		increaseBy,
		reset
	};
};
