import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-bookseat',
  templateUrl: './bookseat.component.html',
  styleUrls: ['./bookseat.component.scss']
})
export class BookseatComponent implements OnInit {

  // seats: any = [false, false, false, false, false, false, false, false, false, false]
  seatArr: any = {}
  currentSeat:any

  constructor(private service: CommonService, private dialogRef: MatDialogRef<BookseatComponent>) { }

  ngOnInit(): void {
    this.seatArr = this.service.myMovies.selectSeat[0]
    // this.service.selectSeat[0].seats[1] = true

  }

  selectSeat(no: any) {
    this.service.myMovies.selectSeat[0].seats = this.service.myMovies.selectSeat[0].seats.map((item: any) => item = false)
    this.service.myMovies.selectSeat[0].seats[no] = true
    this.currentSeat = no + 1
  }

  submit() {
    this.dialogRef.close(this.currentSeat)
  }
  ngOnDestroy() {
    // this.service.selectSeat[0].seats = this.service.selectSeat[0].seats.map((item: any) => item = false)
  }

}
