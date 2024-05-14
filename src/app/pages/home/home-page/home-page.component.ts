import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { UserService } from '../user.service';
import { filter } from 'rxjs';
import { environment } from '../../../../environment/environment.cloud';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _userService: UserService,
              private renderer: Renderer2,
              private _routerActive: ActivatedRoute){

  }

  urlPreview: string = environment.api_end_point_preview;

  slideClass: any[] = [];

  productSales: any[] = [];

  ngOnInit(): void {
    if(this._routerActive.snapshot.routeConfig?.path != 'home-page'){
      this.isScrolled = true;
    }
    this.getAllProductSales();
    this.getBanner()
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
    this.slideClass[currentSlideIndex].class = 'banner-slide';
    this.slideClass[nextSlideIndex].class = 'banner-slide banner-fade';
  }

  async getBanner(){
    let dataRequest = {
      pageSize: 0,
      filter: {}
    }
    await this._userService.getBanner(dataRequest).then((res) => {
      if(res.result.responeCode == '00'){
        
        console.log('11 ', this.slideClass)
      }
      for(let i = 0; i < res.data.length; i++){
        if(i == 0){
          let dataBanner = {
            class: 'banner-slide banner-fade',
            urlImage:  res.data[i].imageBanner
          }
          this.slideClass.push(dataBanner);
        } else {
          let dataBanner = {
            class: 'banner-slide',
            urlImage: res.data[i].imageBanner
          }
          this.slideClass.push(dataBanner);
        }
      }
      console.log('11 ', this.slideClass)
      
    })
  }

  async getAllProductSales(){
    let dataRequest = {
      pageSize: 0,
      filter: {},
      sortProperties: 'sortProperty',
      sortOrder: 'DESC'
    }
    await this._userService.getProduct(dataRequest).then((res) => {
      if(res.result.responseCode === '00'){
        this.productSales = res.data;
      }
    })
  }



  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 100;
    // Thực hiện các hành động khi trang được cuộn
    console.log('Trang đã cuộn!');
    console.log(this._routerActive.snapshot.routeConfig?.path)
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
    const carouselElement = this.carousel?.nativeElement;
    const cardWidth = carouselElement?.querySelector('.card').clientWidth;
    const wrapperWidth = carouselElement?.clientWidth;
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

    carouselElement?.scrollTo({
      left: this.currentIndex * (cardWidth + 16),
      behavior: 'smooth',
    });
  }

  scrollProduct(direction: 'left' | 'right'): void {
    const carouselElement = this.carouselProduct?.nativeElement;
    const cardWidth =
      carouselElement?.querySelector('.card-product').clientWidth;
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

    carouselElement?.scrollTo({
      left: this.currentIndex * (cardWidth + 16),
      behavior: 'smooth',
    });
  }
}
