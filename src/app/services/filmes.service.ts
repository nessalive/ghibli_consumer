import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesType } from '../types/filmes.type';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  private _URL = 'curl https://ghibliapi.vercel.app';

  constructor(private _http: HttpClient) {}

  public getListaFilmes(
    filterFilme?: FilmesType
  ): Observable<FilmesType[]> {
    let params = new HttpParams();
    if (filterFilme) {
      Object.entries(filterFilme).map(([key, value]) => {
        if (String(value).trim().length === 0) {
          return;
        }
        params = params.set(String(key), value);
      });
    }

    return this._http.get<FilmesType[]>(`${this._URL}/films`, {
      params,
    });
  }

  public getfilmes(id: string): Observable<FilmesType> {
    return this._http.get<FilmesType>(`${this._URL}/films/${id}`);
  }
}
