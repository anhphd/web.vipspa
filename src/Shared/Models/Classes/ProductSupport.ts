import { IProductSupport } from '../Interfaces/IProductSupport';

export class ProductSupport implements IProductSupport {
    id: string = "";
    customer: string = "";
    phone: string = "";
    productID: string = "";
    productName: string = "";
    time: Date = new Date();
    note: string = "";
}