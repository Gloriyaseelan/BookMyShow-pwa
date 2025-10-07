import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
