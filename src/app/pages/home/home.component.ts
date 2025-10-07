import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homePage = {}
  images: any = []
  recomandMovies: any = []
  stream: any = ''
  premiereImage = ''
  primer: any = []
  currentIndex = 0;
  autoplayInterval: any;
  genre: any

  myMovies: any
  recomandArr: any = []
  premierArr: any = []

  constructor(private route: Router, private service: CommonService) { }

  ngOnInit() {
    this.myMovies = this.service.myMovies
    this.images = this.service.myMovies.images
    this.stream = this.service.myMovies.stream
    this.primer = this.service.myMovies.primer
    this.premiereImage = this.service.myMovies.premiereImage
    this.recomandMovies = this.service.myMovies.recomandMovies
    this.service.myMovies.movies.forEach((item: any) => {
      // if (item.type == "recommand") {
        this.recomandArr.push(item)
      // }
      // if (item.type == "premier") {
      //   this.premierArr.push(item)
      // }

    })

    this.startAutoplay();
  }

  transformStyle() {
    return `translateX(-${this.currentIndex * 20}%)`;
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++
    } else {
      this.currentIndex = 0
    }
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  showMovie(data: any) {
    this.route.navigate(['movie', data.id])
  }

  ngOnDestroy() {
    // if (this.autoplayInterval) {
    //   clearInterval(this.autoplayInterval);
    // }
  }

}
