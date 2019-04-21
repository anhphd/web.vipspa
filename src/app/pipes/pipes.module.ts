import { ActiveItemsPipe } from './active-item.pipe';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SortPriorityPipe } from './sort-priority.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
    declarations: [ActiveItemsPipe, SortPriorityPipe, SortPipe],
    imports: [IonicModule],
    exports: [ActiveItemsPipe, SortPriorityPipe,SortPipe]
})
export class PipesModule { }