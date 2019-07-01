import { IProductItem } from '../Interfaces/IProductItem';
import { UUIDUtils } from 'src/Shared/Utils/Common/UUIDUtils';

export class ProductItem implements IProductItem {
    code: string = "";
    dimension: string = "";
    id: string = "";
    name: string = "";
    thumb: string = "";
    category: string = "";
    price: number = 0;
    discount: number = 0;
    url: string = "";
    priority: number = 0;
    keywords: string = "";
    images: Array<string> = [];
    docID: string = "";

    constructor() {
        this.id = UUIDUtils.NewProductID();
        this.docID = this.id;
    }
}