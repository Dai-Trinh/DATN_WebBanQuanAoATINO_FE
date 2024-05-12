import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('carouselProduct') carouselProduct!: ElementRef;
  @ViewChild('firstHorizontalScrollDiv') firstHorizontalScrollDiv!: ElementRef;
  //@ViewChild('secondHorizontalScrollDiv') secondHorizontalScrollDiv: ElementRef;

  arrDem: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  slideClass: string[] = [];

  ngOnInit(): void {
    this.slideClass[0] = 'banner-slide banner-fade';
    this.slideClass[1] = 'banner-slide';
    setInterval(() => {
      this.nextSlide();
    }, 10000); // Thay đổi ảnh sau mỗi 3 giây
  }

  ngAfterViewInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.interval = setInterval(() => {
      this.scroll('right');
    }, 5000);
  }

  stopAutoplay() {
    clearInterval(this.interval);
  }

  nextSlide() {
    const currentSlideIndex = this.slideClass.indexOf(
      'banner-slide banner-fade'
    );
    const nextSlideIndex = (currentSlideIndex + 1) % this.slideClass.length;
    this.slideClass[currentSlideIndex] = 'banner-slide';
    this.slideClass[nextSlideIndex] = 'banner-slide banner-fade';
  }

  constructor(private renderer: Renderer2) {}

  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 150;
    // Thực hiện các hành động khi trang được cuộn
    console.log('Trang đã cuộn!');
  }

  onScrollHorizontal(event: MouseEvent) {
    // Kiểm tra hướng scroll và thực hiện xử lý tương ứng
    if (event.target === this.firstHorizontalScrollDiv.nativeElement) {
      this.renderer.setProperty(
        this.firstHorizontalScrollDiv.nativeElement,
        'scrollLeft',
        event.pageX
      );
      console.log('Trang đã cuộn Trái!');
    }
    // } else if (event.target === this.secondHorizontalScrollDiv.nativeElement) {
    //   // Nếu sự kiện scroll được kích hoạt trên thẻ div thứ hai
    //   console.log('Đã cuộn div thứ hai');
    // }
  }

  cards = [
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
    { imageUrl: 'assets/img/img2a.jpg', title: 'suits' },
  ];

  currentIndex = 0;
  interval: any;
  scroll(direction: 'left' | 'right'): void {
    const carouselElement = this.carousel.nativeElement;
    const cardWidth = carouselElement.querySelector('.card').clientWidth;
    const wrapperWidth = carouselElement.clientWidth;
    const visibleCards = Math.floor(wrapperWidth / (cardWidth + 16));

    if (direction === 'left') {
      if (this.currentIndex === 0) {
        this.currentIndex = this.cards.length - visibleCards;
      } else {
        this.currentIndex = Math.max(0, this.currentIndex - 1);
      }
    } else {
      if (this.currentIndex === this.cards.length - visibleCards) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = Math.min(
          this.cards.length - visibleCards,
          this.currentIndex + 1
        );
      }
    }

    carouselElement.scrollTo({
      left: this.currentIndex * (cardWidth + 16),
      behavior: 'smooth',
    });
  }

  scrollProduct(direction: 'left' | 'right'): void {
    const carouselElement = this.carouselProduct.nativeElement;
    const cardWidth =
      carouselElement.querySelector('.card-product').clientWidth;
    const wrapperWidth = carouselElement.clientWidth;
    const visibleCards = Math.floor(wrapperWidth / (cardWidth + 16));

    if (direction === 'left') {
      if (this.currentIndex === 0) {
        this.currentIndex = this.cards.length - visibleCards;
      } else {
        this.currentIndex = Math.max(0, this.currentIndex - 1);
      }
    } else {
      if (this.currentIndex === this.cards.length - visibleCards) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = Math.min(
          this.cards.length - visibleCards,
          this.currentIndex + 1
        );
      }
    }

    carouselElement.scrollTo({
      left: this.currentIndex * (cardWidth + 16),
      behavior: 'smooth',
    });
  }
}
