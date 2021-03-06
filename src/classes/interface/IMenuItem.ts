import { IActiveItem } from './IActiveItem';
import { IPriorityItem } from './IPriorityItem';

export interface IMenuItem extends IActiveItem, IPriorityItem {
    id: string;
    name: string;
    url: string;
    icon?: string;
    selected?: boolean;
    children?: Array<IMenuItem>;
}