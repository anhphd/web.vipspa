import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/classes/interface/IProduct';

@Pipe({
  name: 'previews'
})
export class PreviewsPipe implements PipeTransform {

  transform(values: Array<IProduct>, args?: any): Array<IProduct> {
    let eles: Array<IProduct> = [];
    let index = 0;
    while (index < values.length && eles.length < 4) {
      eles.push(values[index]);
      index++;
    }
    return eles;
  }

}
