import { ImageSize } from './ImageSize';

export class ImageUtils {

    public static IMAGE_ROOT = "assets/imgs";

    public static getImageSizeLocation(size?: ImageSize): string {
        let folder: string = "";
        // if (size) {
        //     if(size === ImageSize.ORIGIN){
        //         return "";
        //     }

        //     switch (size) {
        //         case ImageSize.ORIGIN:
        //             break;
        //         case ImageSize.SMALL:
        //             break;
        //         case ImageSize.MEDIUM: break;

        //         case ImageSize.LARGE: break;

        //         default:
        //             break;
        //     }
        // }
        return folder;
    }


    public static resolveImage(image: string, size?: ImageSize): string {

        if (image.indexOf(ImageUtils.IMAGE_ROOT) > -1) {

        }

        return image;
    }

    getOriginImage(url: string): string {
        return url;
    }
}