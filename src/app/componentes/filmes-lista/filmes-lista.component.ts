import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilmesType } from 'src/app/types/filmes.type';

@Component({
  selector: 'app-filmes-lista',
  templateUrl: './filmes-lista.component.html',
  styleUrls: ['./filmes-lista.component.css']
})
export class FilmesListaComponent {

  @Input() listaFilmes: FilmesType[] = [];
  @Output() verDetalhesEquipamento = new EventEmitter<string>();

  public verDetalhes(id: string) {
    this.verDetalhesEquipamento.emit(id);
  }

}
