import { JSX, ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	product: Product;
	counter: number;
	increaseBy: (_: number) => void;
}

export interface ProductCardDotProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (_: ProductTitleProps) => JSX.Element;
	Image: (_: ProductImageProps) => JSX.Element;
	Buttons: (_: ProductButtonsProps) => JSX.Element;
}
