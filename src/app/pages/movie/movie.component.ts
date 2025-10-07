import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { LocationComponent } from '../dialog/location.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  displayMovie: any = {}

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private service: CommonService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((item: any) => {
      this.displayMovie = this.service.myMovies.movies.filter((data: any) => {
        if ((item.id == data.id) && data.type == "recommand") {
          return item
        }
        if ((item.id == data.id) && data.type == "premier") {
          return item
        }
      })
    })

    const element: any = document.getElementsByClassName('movieContainer');

    if (element.length > 0) {
      const gradient = 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%)'
      const imageUrl = this.displayMovie[0].src;
      element[0].style.background = `${gradient}, url(${imageUrl})`;
      element[0].style.backgroundRepeat = 'no-repeat';
      element[0].style.backgroundSize = '700px 800px';
      element[0].style.backgroundPosition = `calc(100% - 50px) center`;
    }
  }

  rate() {
    let dislogRef = this.dialog.open(LocationComponent, {
      data: this.displayMovie[0].ratings,
      disableClose: true
    })
    dislogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.displayMovie[0].ratings = data
      }
    })
  }

  ticketBooking(id: any) {
    this.route.navigate(['booking', id])
  }

}
