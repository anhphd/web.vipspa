import { v4 } from "uuid";
import { StringUtils } from './StringUtils';

export class UUIDUtils {
    public static NewUUID(): string {
        return v4();
    }
    public static NewProductID(): string {
        return `${Date.now()}`;
    }
    public static NewCategoryID(): string {
        return `${Date.now()}`;
    }
    public static NewPostID(): string {        
        return `${Date.now()}`;
    }
    public static NewServiceID(): string {
        return `${Date.now()}`;
    }
    public static NewUrlFromString(title: string): string {
        var str = StringUtils.RemoveWhitespace(title);
        str = StringUtils.ConvertVN2EN(str);
        str = str.replace(/ /g, '+');
        return str;
    }
}