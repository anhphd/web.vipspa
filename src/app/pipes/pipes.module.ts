import { ActiveItemsPipe } from './active-item.pipe';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SortPriorityPipe } from './sort-priority.pipe';
import { SortPipe } from './sort.pipe';
import { PreviewsPipe } from './previews.pipe';

@NgModule({
    declarations: [ActiveItemsPipe, SortPriorityPipe, SortPipe, PreviewsPipe],
    imports: [IonicModule],
    exports: [ActiveItemsPipe, SortPriorityPipe,SortPipe]
})
export class PipesModule { }