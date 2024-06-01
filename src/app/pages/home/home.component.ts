import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from 'src/app/services/filmes.service';
import { FilmesType } from 'src/app/types/filmes.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 public listaFilmes: FilmesType[] = []; 
 constructor(
  private _FilmesService: FilmesService,
  private _router: Router,
) {}

public filtrarFilmesPorNome(filtro?: FilmesType) {
  this._FilmesService.getListaFilmes(filtro).subscribe({
    next: (resp) => {
      let listaFavoritos: string[] = [];
      const favoritosString = localStorage.getItem('favoritos');
      if (favoritosString) {
        listaFavoritos = JSON.parse(favoritosString);
      }
      this.listaFilmes = resp.map((item) => {
        item.isFavorite = !!listaFavoritos.find((fav) => fav === item.id);
        return item;
      });
      console.log('next');
    },
    error: (err) => {
      console.log(err);
      console.log('error');
    },
    complete: () => {
      console.log('complete');
    },
  });
}

 public getDetalhesFilme(id: string) {
  this._router.navigate([`/detalhes/${id}`]);
}
 
}
