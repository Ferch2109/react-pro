import React, { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/product.interface';
import styles from '../styles/styles.module.css';
import { onChangeArgs } from '../interfaces/shoppingCart.interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	value?: number;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
	children,
	className,
	product,
	style,
	value,
	onChange,
}: Props) => {
	const { counter, increaseBy } = useProduct({ value, product, onChange });

	return (
		<Provider
			value={{
				product,
				counter,
				increaseBy,
			}}
		>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}
			>
				{children}
			</div>
		</Provider>
	);
};
