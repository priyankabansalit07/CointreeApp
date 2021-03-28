import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Coin } from '../_models/coin';


@Injectable(
  {
    providedIn: 'root'
  })

export class DataService {
  baseUrl = "http://localhost:5000/api/";

  constructor(private _http: HttpClient) { }

  getCoins(): Observable<Coin[]> {

    return this._http.get<Coin[]>(this.baseUrl + "Coin");
  }

  getCoin(coinsymbol): Observable<Coin[]> {

    return this._http.get<Coin[]>(this.baseUrl + "Coin/" + coinsymbol);
  }

  getUsersCoins():Observable<Coin[]>{
    return this._http.get<Coin[]>(this.baseUrl+"User");
  }

  addCoin(coin: Coin) {
    return this._http.post(this.baseUrl + "User", coin).pipe(map((response: any) => {
     // const coin = response;
      if (response) {
        return response.coin;
        // console.log("in Addcoin dataservice");
        // console.log(coin);
        // return coin;
        // return(1);
        // return (coin.coin.buy + " added successfull");

      } else {
        return "Error Occurred";
      }
    }));
  }

}
