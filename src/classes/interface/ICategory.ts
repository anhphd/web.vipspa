import { IProduct } from './IProduct';
import { IActiveItem } from './IActiveItem';
import { IPriorityItem } from './IPriorityItem';

export interface ICategory extends IActiveItem, IPriorityItem {
    id: string;
    name: string;
    thumb: string;
    products: Array<IProduct>;
    totalProducts?: number;
    children?: Array<ICategory>;
}