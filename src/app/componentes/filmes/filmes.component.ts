import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilmesType } from 'src/app/types/filmes.type';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  @Input() filmes!: FilmesType;
  @Output() verDetalhes = new EventEmitter<string>();

  public clickHandler() {
    this.verDetalhes.emit(this.filmes.id);
  }

}
