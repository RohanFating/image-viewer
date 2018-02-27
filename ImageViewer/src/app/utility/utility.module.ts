import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImageViewerComponent,
  ],
  declarations: [ImageViewerComponent]
})
export class UtilityModule { }
