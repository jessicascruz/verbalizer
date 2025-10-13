import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, FormsModule, MatCheckboxModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {
    events: string[] = [];
    opened: boolean;

      constructor() {
        this.opened = true;
      }

}
