import { lazy, LazyExoticComponent} from "react";
 
type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;//le especifico y esto soporta jsx y lazyExotic
    name: string,
}
//carga de componentes 
const Lazy1 = lazy(() => import('../pages/LazyPage1'))
const Lazy2 = lazy(() => import('../pages/LazyPage2'))
const Lazy3 = lazy(() => import('../pages/LazyPage3'))

export const routers: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'//nombre que sale en la interfaz
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'//nombre que sale en la interfaz
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'//nombre que sale en la interfaz
    }
]