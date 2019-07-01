import { IDocument } from './IDocument';

export interface IPostItem extends IDocument {
    id: string;
    name: string;
    url: string;
    img: string;
    description: string;    
    author: string;
    date: Date;
    keywords: string;
}