import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('carouselProduct') carouselProduct!: ElementRef;
  @ViewChild('firstHorizontalScrollDiv') firstHorizontalScrollDiv!: ElementRef;
  //@ViewChild('secondHorizontalScrollDiv') secondHorizontalScrollDiv: ElementRef;

  @ViewChild('myOutlet', { static: true }) myOutlet!: RouterOutlet;

  arrDem: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  slideClass: string[] = [];

  listCate: any[] = [];

  ngOnInit(): void {
    this.getAllCate();
    if(this._routerActive.snapshot.routeConfig?.path !== 'home-page'){
      this.isScroll = true;
    }
  }

  isScroll = false;

  closeMenu = false;

  openMenu(): void {
    this.closeMenu = !this.closeMenu;
  }

  handleLogo(){
    this._router.navigate(['./home/home-page']);
  }

  ngOnDestroy() {
    this.stopAutoplay();
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

  constructor(private renderer: Renderer2, 
              private _homeService: UserService,
              private _router: Router,
              private _routerActive: ActivatedRoute) {
             
              }

  handleRoute(item: any){
    this._router.navigate(['./home/list-product/' + item.id])
    this.closeMenu = false;
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(this._routerActive.snapshot.routeConfig?.path == 'home'){
      this.isScroll = window.scrollY > 150;
    } else{
      this.isScroll = true;
    }
  
    console.log(this._routerActive.snapshot.routeConfig?.path)
  }

  
  
  currentIndex = 0;
  interval: any;
  

  async getAllCate(){
    await this._homeService.getCategory().then((res) => {
      if(res.result.responseCode === '00'){
        this.listCate = res.data;
      }
    })
  }
}
