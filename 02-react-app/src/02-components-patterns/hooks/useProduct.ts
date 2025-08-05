import { useEffect, useRef, useState } from 'react';
import { onChangeArgs } from '../interfaces/shoppingCart.interface';
import { Product } from '../interfaces/product.interface';

interface useProductsArgs {
    product: Product;
    value?: number;
	onChange?: (args: onChangeArgs) => void;
}
export const useProduct = ({ 
    product, 
    value = 0,
    onChange 
}: useProductsArgs) => {
	const [counter, setCounter] = useState(value);
    const isControlled = useRef(!!onChange);

    useEffect(() => {
        setCounter(value);
    }, [value]);

	const increaseBy = (value: number) => {
        if (isControlled.current) {
            console.log(value)
            return onChange!({count: value, product});
        }
        // const newValue = Math.max(counter + value, 0);

		// setCounter(newValue);
		// onChange && onChange({product, count: newValue}); // if onChange
	};

	return {
		counter,
		increaseBy,
	};
};
