import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locations = [
    { src: 'assets/images/location/img-1.png', alt: 'Mumbai', title: 'Mumbai' },
    { src: 'assets/images/location/img-2.png', alt: 'Bangalore', title: 'Bangalore' },
    { src: 'assets/images/location/img-3.png', alt: 'Chennai', title: 'Chennai' },
    { src: 'assets/images/location/img-4.png', alt: 'Delhi', title: 'Delhi' },
    { src: 'assets/images/location/img-5.png', alt: 'Hydrabad', title: 'Hydrabad' },
    { src: 'assets/images/location/img-6.png', alt: 'Kochin', title: 'Kochin' },
    { src: 'assets/images/location/img-7.png', alt: 'Kolkata', title: 'Kolkata' }
  ]
  viewAll: boolean = true
  searchItem = ''
  allLocations = [...this.locations]
  show = false
  stars = [false, false, false, false, false, false, false, false, false, false];

  constructor(private dialogRef: MatDialogRef<LocationComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) { }
  // private _snackBar = inject(MatSnackBar);
  ngOnInit(): void {
    // this.getLocation()
    if (this.data) {
      this.show = true
      for (let i = 0; i < this.data; i++) {
        this.stars[i] = true
      }

    } else {
      this.show = false
    }

  }
  getLocation(redirectObj = {}) {
    let currentUserlocation = {}
    // console.log("1", navigator.geolocation);
    if (navigator.geolocation) {
      // console.log("2", navigator.geolocation, currentUserlocation);
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("3", position);
        currentUserlocation = { lat: position.coords.latitude, lon: position.coords.longitude }
        // console.log("4", currentUserlocation);
      }, (err) => console.log("5", err));
    }
    // console.log("currentUserlocation", currentUserlocation);
  }

  viewAllCountries() {
    this.viewAll = false
  }
  hideAllCities() {
    this.viewAll = true
  }
  filterLocation(event: any) {

    if (event.target.value == '') {
      this.locations = this.allLocations
    } else {
      this.locations = this.allLocations.filter((item) => item.title.toLowerCase().includes(event.target.value.toLowerCase()))
    }

  }
  setLocation(data: any) {
    this.dialogRef.close(data)
  }

  selectStar(index: any) {
    if (!this.stars[index]) {
      for (let i = 0; i <= index; i++) {
        this.stars[i] = true
      }
    }
    else {
      for (let i = 9; i > index; i--) {
        this.stars[i] = false
      }
    }

    setTimeout(() => {
      this.dialogRef.close(index + 1)
    }, 200);
  }
}
