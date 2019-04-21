import { Pipe, PipeTransform } from '@angular/core';
import { IActiveItem } from 'src/classes/interface/IActiveItem';

@Pipe({
  name: 'activeItems'
})
export class ActiveItemsPipe implements PipeTransform {

  transform(values: Array<IActiveItem>, args?: any): Array<IActiveItem> {
    return values.filter(item => { return item.active == undefined || item.active; });
  }

}
