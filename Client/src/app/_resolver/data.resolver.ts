import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Coin } from '../_models/coin';
import { DataService } from '../_services/data.service';
// import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataResolver implements Resolve<Coin> {

    constructor(private _service: DataService, private _router: Router) {


    }
    resolve(route: ActivatedRouteSnapshot): Observable<Coin> {
        //Resolver automatically subscribes the method so we dont need to do that
        return this._service.getCoins().pipe(
           
            catchError(err => {
           
            this._router.navigate(['/data']);
            return of(null); //returning observable of null
        }));
    }
}