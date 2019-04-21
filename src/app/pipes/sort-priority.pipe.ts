import { Pipe, PipeTransform } from '@angular/core';
import { IPriorityItem } from 'src/classes/interface/IPriorityItem';

@Pipe({
  name: 'sortPriority'
})
export class SortPriorityPipe implements PipeTransform {

  transform(values: Array<IPriorityItem>, args?: any): Array<IPriorityItem> {
    return values.sort((a: IPriorityItem, b: IPriorityItem) => {
      let aPriority: number = a.priority ? a.priority : 0;
      let bPriority: number = b.priority ? b.priority : 0;
      return bPriority-aPriority;
    });
  }

}
