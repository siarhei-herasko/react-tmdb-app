import {LazyExoticComponent} from 'react';

export type Route = {
    path: string;
    component: LazyExoticComponent<() => JSX.Element>;
}
