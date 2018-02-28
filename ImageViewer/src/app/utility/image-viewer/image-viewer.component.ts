import { Component, Input, OnInit, OnDestroy } from '@angular/core';

const IMAGES: Array<String> = ['https://www.w3schools.com/bootstrap/ny.jpg',
'http://www.kinyu-z.net/data/wallpapers/35/823945.jpg',
'http://www.kinyu-z.net/data/wallpapers/35/823947.jpg',
'http://www.kinyu-z.net/data/wallpapers/35/823949.jpg',
'http://www.kinyu-z.net/data/wallpapers/35/823956.jpg',
'https://www.w3schools.com/bootstrap/la.jpg', 'https://www.w3schools.com/bootstrap/chicago.jpg',
'https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg',
'https://images.pexels.com/photos/302404/pexels-photo-302404.jpeg',
'https://images.pexels.com/photos/280452/pexels-photo-280452.jpeg',
'https://images.pexels.com/photos/270887/pexels-photo-270887.jpeg',
'http://www.kinyu-z.net/data/wallpapers/35/823942.jpg',
'http://www.kinyu-z.net/data/wallpapers/1/703968.jpg' ];

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit, OnDestroy {

  @Input() public images: Array<String> = IMAGES;
  public currentImageIndex: number = 0;
  private slideShowInterval: any;
  constructor() { }

  public ngOnInit(): void {
   this.initializeSlideShow();
  }

  public onButtonClick( side: string, fromSlideShow?: boolean ) {
    if ( !fromSlideShow ) {
       clearInterval( this.slideShowInterval );
    }
    if (side === 'left') {
      this.currentImageIndex = this.currentImageIndex > 0 ? this.currentImageIndex - 1 : 0;
    } else {
      this.currentImageIndex = this.currentImageIndex < this.images.length - 1 ? this.currentImageIndex + 1 : this.images.length - 1;
    }
    this.initializeSlideShow();
  }

  public onPositionClick( index: number ): void {
    clearInterval( this.slideShowInterval );
    this.currentImageIndex = index;
    this.initializeSlideShow();
  }

  public ngOnDestroy(): void {
    clearInterval( this.slideShowInterval );
  }

  private initializeSlideShow(): void {
    this.slideShowInterval = setInterval( () => {
      this.currentImageIndex === this.images.length - 1 ? this.currentImageIndex = 0 : this.onButtonClick( 'right' );
    }, 4000 );
  }
}
