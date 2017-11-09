import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { LivroProvider } from "../../providers/livro";
import { ILivro } from "../../interfaces/ILivro";
import {LivroAddPage} from "../livro-add/livro-add";
import {LivroDetailsPage} from "../livro-details/livro-details";
import {CategoriaProvider} from "../../providers/categoria";

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
  categorias = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider:LivroProvider,
              public alertCtrl: AlertController, public categoriaProvider:CategoriaProvider) {
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

  deletarRegistro(event, item) {
    let confirmar = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja excluir esse registro?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.livroProvider.removerLivro(item);
          }
        }
      ]
    });

    confirmar.present();
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

  ionViewWillEnter() {
    this.items = this.livroProvider.getLivros();
    this.itemsFilter = this.items;

    /*
    this.categoriaProvider.getCategorias().then(data => {
      this.categorias = data;
      console.log("categorias ***");
      console.log(this.categorias);
    });*/
  }
}
