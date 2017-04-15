import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Webservice } from '../../providers/webservice';
import { BandasPage } from '../bandas-page/bandas-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any;
  constructor(public navCtrl: NavController, public webservice: Webservice) {
    this.user = {};
  }

  entrar(): void{
    this.webservice.login({
      'password': this.user.password,
      'username': this.user.username,
      'rememberMe' : true
    }).subscribe(
      data => {
        this.webservice.savetoken(data['id_token']);
        this.navCtrl.push(BandasPage);
        console.log("logou");
      },
      err => {
        console.log("logou");
        alert("Ocorreu um erro ao tentar logar: " + JSON.stringify(err));
      }
      )
  }

}
