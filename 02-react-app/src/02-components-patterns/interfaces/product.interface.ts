import { JSX, ReactElement } from "react";


export interface ProductCardProps {
	product: Product;
	children?: ReactElement | ReactElement[];
}

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
    ({ children, product, }: ProductCardProps): JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}