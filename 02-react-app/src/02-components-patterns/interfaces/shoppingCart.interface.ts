import { Product } from "./product.interface";

export interface ProductInCart extends Product {
    count: number;
}

export interface ShoppingCart {
    [key: string]: ProductInCart;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}