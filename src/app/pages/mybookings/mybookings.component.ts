import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
// import {} from 'src/assets/'

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.scss']
})
export class MybookingsComponent implements OnInit {

  theatreArray: any = []
  movieDetail: any
  favo = false
  movieId: any


  constructor(private activatedRoute: ActivatedRoute, private service: CommonService, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      if (data) {
        this.movieId = data.id
        this.movieDetail = this.service.myMovies.movies.filter((item: any) => {
          if ((data.id == item.id) && item.type == "recommand") {
            return item
          }
          if ((data.id == item.id) && item.type == "premier") {
            return item
          }
        })
        this.theatreArray = this.movieDetail[0].theatre
      }
    })

  }

  addFavo(i: any) {
    this.theatreArray[i].favorite = !this.theatreArray[i].favorite
  }

  bookSeat(i: number) {
    this.route.navigate(['seat', this.movieDetail[0].theatre[i].id])
  }

  ngOnDestroy() {

  }


}
