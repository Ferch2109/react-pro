import React, { CSSProperties, JSX, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
	Product,
	ProductCardHandlers,
	ProductContextProps,
} from '../interfaces/product.interface';
import styles from '../styles/styles.module.css';
import {
	InitialValues,
	onChangeArgs,
} from '../interfaces/shoppingCart.interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	value?: number;
	// children?: ReactElement | ReactElement[];
	children?: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	initialValues?: InitialValues;
	onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
	children = () => <></>,
	className,
	product,
	style,
	initialValues,
	value,
	onChange,
}: Props) => {
	const { counter, maxValue, isMaxCountReached, increaseBy, reset } =
		useProduct({
			value,
			product,
			initialValues,
			onChange,
		});

	return (
		<Provider
			value={{
				product,
				counter,
				maxValue,
				increaseBy,
			}}
		>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}
			>
				{children({
					count: counter,
					maxCount: maxValue,
					isMaxCountReached,
					product,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
