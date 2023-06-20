import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  images = [
    {
      src: 'assets/images/image1.jpg',
      alt: 'Image 1',
      caption: 'Projet Permis',
    },
    {
      src: 'assets/images/image2.jpg',
      alt: 'Image 2',
      caption: 'Projet Permis',
    },
    {
      src: 'assets/images/image3.jpg',
      alt: 'Image 3',
      caption: 'Projet Permis',
    },
  ];
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 5000); // change d'image toutes les 3 secondes (ajustez la durée selon vos besoins)
  }

  stopCarousel() {
    clearInterval(this.interval);
  }

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPreviousImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
