import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LivroProvider } from "../../providers/livro";
import { ILivro } from "../../interfaces/ILivro";
import {LivroAddPage} from "../livro-add/livro-add";
import {LivroDetailsPage} from "../livro-details/livro-details";

@Component({
  selector: 'page-livro-list',
  templateUrl: 'livro-list.html'
})

export class LivroListPage {
  selectedItem: any;
  icons: string[];
  items : Array<ILivro>;
  pesquisa : string;
  visibilidade: boolean;
  itemsFilter : Array<ILivro>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider:LivroProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.visibilidade = false;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LivroDetailsPage, {
      item : item
    });
  }

  voltarPagina() {
    this.navCtrl.pop();
  }

  novoItem(event, item) {
    this.navCtrl.push(LivroAddPage, { });
  }

  abrirPesquisa (event){
    this.visibilidade = true;
  }

  pesquisar(event){
    this.itemsFilter = this.items.filter((i) => {
      if (i.titulo.indexOf(this.pesquisa) >= 0) {
        return true;
      }
      return false;
    })
  }

  cancelarPesquisa(){
    this.visibilidade = false;
    this.pesquisa = "";
    this.pesquisar(null);
  }

  ionViewDidLoad() {
    console.log("1 - ionViewDidLoad");
  }
  ionViewWillEnter() {
    console.log("2 - ionViewWillEnter");

    this.items = this.livroProvider.getLivros();
    this.itemsFilter = this.items;
  }

  ionViewDidEnter() {
    //this.items = this.livroProvider.getLivros();
    console.log("3 - ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("4 - ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("5 - ionViewDidLeave");
  }

  ionViewWillUnload() {
    console.log("6 - ionViewWillUnload");
  }

  ionViewCanEnter() {
    console.log("7 - ionViewCanEnter");
  }

  ionViewCanLeave() {
    console.log("8 - ionViewCanLeave");
  }
}
