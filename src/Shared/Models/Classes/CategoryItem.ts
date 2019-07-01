import { ICategoryItem } from '../Interfaces/ICategoryItem';

export class CategoryItem implements ICategoryItem {
    id: string = "";
    name: string = "";
    thumb: string = "";
    parent: string = "";
    priority: number = 0;
    constructor() {

    }
}