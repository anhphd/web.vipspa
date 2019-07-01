import { IServiceItem } from '../Interfaces/IServiceItem';
import { UUIDUtils } from 'src/Shared/Utils/Common/UUIDUtils';

export class ServiceItem implements IServiceItem {
    id: string = "";
    name: string = "";
    url: string = "";
    img: string = "";
    description: string = "";
    docID: string = "";
    priority: number = 0;
    constructor() {
        this.id = UUIDUtils.NewServiceID();
        this.docID = this.id;
    }

}