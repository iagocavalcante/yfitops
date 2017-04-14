import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the Webservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Webservice {
  private url:string = 'http://localhost:8080/api';
  headers:Headers;
  bandaId: any;
  albumId: any;
  
  constructor(public http: Http) {
    console.log('Hello Webservice Provider');
  }

  getOptions(): RequestOptions {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.gettoken());
    this.headers.append('Access-Control-Allow-Origin','*');
    let options = new RequestOptions({headers:this.headers});
    return options;
  }

  logged(): Boolean {
    if (this.gettoken() !== null && this.gettoken() !== undefined) {
      return true;
    }
    return false;
  }

  login(obj): Observable<Response> {

    return this.http.post(this.url + "/authenticate", obj).map((res: Response) => {
      return res.json();
    });
  }

  savetoken(token): void {
    window.localStorage.setItem("token", token);
  }

  gettoken(): String {
    return window.localStorage.getItem("token");
  }

  listarBandas(): Observable<Response> {
        return this.http.get(this.url + "/bandas").map((res: Response) => {
            return res.json();
        });
    }

    listarAlbums(): Observable<Response[]> {
        console.log(this.bandaId);
        return this.http.get(this.url + "/albums").map((res: Response) => {
            let list: Response[] = [];
            for (let a of res.json()) {
                if(a.bandaId == this.bandaId){
                    list.push(a);
                }
            }
            return list;
        });
    }

    listarMusicas(): Observable<Response[]> {
        console.log(this.albumId);
        return this.http.get(this.url + "/musicas").map((res: Response) => {
            let list: Response[] = [];
            for (let a of res.json()) {
                if(a.albumId == this.albumId){
                    list.push(a);
                }
            }
            return list;
        });
    }

    selectBanda(bandaId): void {
        this.bandaId = bandaId;
    }

    selectAlbum(albumId): void {
        this.albumId = albumId;
    }

}
