import { Component, OnInit } from '@angular/core';
import { Coin } from './_models/coin';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Welcome';
  
}
