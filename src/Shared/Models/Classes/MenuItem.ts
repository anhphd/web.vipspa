
import { IMenuItem } from '../Interfaces/IMenuItem';

export class MenuItem implements IMenuItem {
    id: string = "";
    name: string = "";
    url: string = "";
    priority: number = 0;
    parent: string = "";
    
    constructor() {

    }

}