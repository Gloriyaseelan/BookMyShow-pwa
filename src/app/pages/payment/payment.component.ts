import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  movieDetails: any
  totalSeat: number = 2
  seatDetails: any
  amount: number = 0
  down: boolean = true
  baseAmt = 22
  gst = 3.96
  convenience = this.baseAmt + this.gst
  subTotal = 0
  showDiv = false


  constructor(private service: CommonService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.service.updateClose(false);
    });
    this.activateRoute.params.subscribe(res => {
      this.service.myMovies.movies.map((movie: any) => {
        const filteredTheatres = movie.theatre.filter((data: any) => data.id.includes(res.id))
        if (filteredTheatres.length && filteredTheatres[0].type == "recommand") {
          this.movieDetails = [{ ...movie, theatre: filteredTheatres }]
        }
        if (filteredTheatres.length && filteredTheatres[0].type == "premier") {
          this.movieDetails = [{ ...movie, theatre: filteredTheatres }]
        }
        return {}
      })

    })

    this.seatDetails = this.service.paymentDetails.seats?.join(',')
    this.totalSeat = this.service.paymentDetails.totalSeat
    this.amount = this.service.paymentDetails.amount
    this.convenience *= this.totalSeat
    this.baseAmt *= this.totalSeat
    this.gst *= this.totalSeat
    this.subTotal = this.amount + this.convenience

  }

  goBack() {
    this.router.navigate(['booking', this.movieDetails[0].id])
  }

  downArrow() {
    this.down = false
    this.showDiv = true
  }
  upArrow() {
    this.down = true
    this.showDiv = false
  }
  ngOnDestroy() {
    this.service.updateClose(true)
  }

}
