import { IDocument } from './IDocument';

export interface IServiceItem extends IDocument {
    id: string;
    name: string;
    url: string;
    img: string;
    priority: number;
    description: string;
}
