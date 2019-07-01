import { IPostItem } from '../Interfaces/IPostItem';

export class PostItem implements IPostItem {
    id: string = "";
    name: string = "";
    url: string = "";
    img: string = "";
    description: string = "";
    content_file: string = "";
    docID: string = "";
    author: string = "";
    date: Date = new Date();
    keywords: string = "";

    constructor() {

    }

    reset() {
        this.id = "";
        this.name = "";
        this.url = "";
        this.img = "";
        this.description = "";
        this.content_file = "";
        this.author = "";
        this.date = new Date();
        this.keywords = "";
    }

}