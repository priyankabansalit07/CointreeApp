import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Coin } from '../_models/coin';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  coinlist: Coin[]; //Live data coming from API
  coinlistFromLocalStorage: Coin[]; //Last data saved in localStorage to calculate %change
  userSelectedCoins: Coin[];  //User's coin from DB


  constructor(private _service: DataService, private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this.GetCoins();
  }

  //Get Coin data live from API
  GetCoins() {



    this._route.data.subscribe((data => {

      this.coinlist = data["coins"];
      var hours = 24;
      var now = new Date().getTime();

      // localStorage.clear();

      //To set localstorage for 24 hours then resets on page load
      var setupTime = JSON.parse(localStorage.getItem('setupTime'));
      if (setupTime == null) {
        localStorage.setItem('setupTime', JSON.stringify(now))
        localStorage.setItem("coinsdetail", JSON.stringify(this.coinlist));
      } else if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', JSON.stringify(now));
        localStorage.setItem("coinsdetail", JSON.stringify(this.coinlist));
      }




      this.coinlistFromLocalStorage = JSON.parse(localStorage.getItem('coinsdetail'));
      this._service.getUsersCoins().subscribe((response) => {
        this.userSelectedCoins = response;
      })

      //To get the perccentage change according to local storage and data coming from API
      for (let i = 0; i < this.coinlist.length; i++) {
        const initval = this.coinlistFromLocalStorage[i].ask;
        const finalval = this.coinlist[i].ask;
        // const coinsymbol=this.coinlist[i].buy;


        this.coinlist[i].change = ((finalval - initval) / initval) * 100;



      }

    }));


  }


//User Click on Buy then Data saved in a table 
  BuyCoin(coin) {
    //console.log(coin);
    this._service.addCoin(coin).subscribe((response) => {

      if (response) {
        alert(response.buy + " added successfully");
        coin.id = response.id;  //To disable button after user buy coin

      } else { alert("Error Occurred"); }
    },
      err => {
        alert(err);
      }
    );
  }

}
