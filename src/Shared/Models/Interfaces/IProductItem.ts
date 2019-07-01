import { IDocument } from './IDocument';

export interface IProductItem extends IDocument{
    id: string;
    name: string;
    thumb: string;
    category: string;
    price: number;
    discount: number;
    url: string;
    priority: number;
    keywords: string;
    images: Array<string>;
    code : string;
    dimension : string;
}