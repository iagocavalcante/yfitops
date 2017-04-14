import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Webservice} from '../../providers/webservice';

/**
 * Generated class for the MusicsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-musics-page',
  templateUrl: 'musics-page.html',
})
export class MusicsPage {
  public musics: any;
  public logged: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: Webservice) {
    this.musics = [];
    this.logged = webservice.logged();
    console.log( this.logged );
    webservice.listarMusicas().subscribe(
      data => {
        console.log(data)
        this.musics = data;
      },
      err => {
        console.log("Ocorreu um erro ao carregar");
      });
  }

}
