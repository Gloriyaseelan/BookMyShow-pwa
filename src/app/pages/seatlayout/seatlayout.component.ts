import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { BookseatComponent } from '../bookseat/bookseat.component';

@Component({
  selector: 'app-seatlayout',
  templateUrl: './seatlayout.component.html',
  styleUrls: ['./seatlayout.component.scss']
})
export class SeatlayoutComponent implements OnInit {

  seatDetails: any = []
  movieDetails: any = []
  dateAndTime = new Date()
  selected = false
  payment = false
  amount = 150
  totalSeat: any
  seatLength: any
  seats: any = []
  response: any
  closeSeats: any = true

  constructor(private service: CommonService, private activateRouter: ActivatedRoute, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.seatDetails = this.service.myMovies.seats
    setTimeout(() => {
      this.service.updateClose(false);
    });

    this.service.myMovies.selectSeat[0].seats.forEach((item: any, index: any) => {
      if (item) {
        this.totalSeat = index + 1
      }
    })

    this.activateRouter.params.subscribe(res => {
      this.service.myMovies.movies.map((movie: any) => {
        this.response = res.id
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
    this.openDialog()

  }

  openDialog() {
    this.payment = false
    this.amount = 150
    this.seatDetails.map((data: any) => data.availableSeats.map((val: any) => val.status = false))

    let dialogref = this.dialog.open(BookseatComponent, {
      disableClose: true,
    })
    dialogref.afterClosed().subscribe(res => {
      if (res) {
        this.totalSeat = res
        this.amount *= res
      }
    })

  }
  goBack() {
    this.router.navigate(['booking', this.movieDetails[0].id])
  }

  select(seatId: any) {
    this.seatDetails.map((data: any) => data.availableSeats.map((val: any) => val.status = false))
    this.seats = []
    this.seatDetails.map((data: any) => {
      data.availableSeats.map((val: any, index: any) => {
        if (val['seatId'] == seatId) {
          for (let i = 0; i < this.totalSeat; i++) {
            if (data.availableSeats[index] && data.availableSeats[index + i]) {
              this.seats.push(data.sName + (index + (i + 1)))
              data.availableSeats[index + i].status = true
              this.payment = true
            }
            if (!data.availableSeats[index + i]) {
              this.payment = false

            }
          }
        }
      })

    })

    this.selected = true

  }

  toPay() {
    this.service.paymentDetails = {
      amount: this.amount,
      totalSeat: this.totalSeat,
      seats: this.seats
    }
    this.router.navigate([`payment`, this.response])
  }

  ngOnDestroy() {
    this.service.updateClose(true)
    this.seatDetails.map((data: any) => data.availableSeats.map((val: any) => val.status = false))
  }

}
