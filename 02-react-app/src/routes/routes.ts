import { JSX, LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}

// import(/* chunk name */ 'lazy component path')
const LazyLayout = lazy(() => import(/* webpackChunkName: "lazy-layout-page" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazylayout',
        // < * > indicates that any page route cointaining 'lazyload/' on its path will be handled here.
        path: '/lazylayout/*',
        // capitalized since would be used in the same way of a react component
        Component: LazyLayout,
        name: 'Lazy-layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]