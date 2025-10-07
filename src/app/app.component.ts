import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from './common.service';
import { LocationComponent } from './pages/dialog/location.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie';
  currentLocation = 'Kovilpatti'
  openSideNav = false

  closeNav: boolean = false



  constructor(private dialog: MatDialog, private service: CommonService) {

  }

  ngOnInit() {
    this.service.closeTopNav.subscribe(data => {
      this.closeNav = data
    })
  }

  setLocation() {
    const dialogRef = this.dialog.open(LocationComponent, {
      disableClose: true,
      maxWidth: '80rem'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currentLocation = result
      }
    })
  }

  sideNav() {

  }

  // displayTable() {
  //   Object.entries(this.data).map((a: any, b: any): any => {
  //     let newData: any = a[b]
  //     console.log(newData.members);

  //     return this.data[newData].members.map((item: any) => {
  //       console.log(this.data[newData],item);

  //     })

  //   })
  // }

}
