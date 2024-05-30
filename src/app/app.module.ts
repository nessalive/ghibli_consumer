import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './componentes/filter/filter.component';
import { FilmesListaComponent } from './componentes/filmes-lista/filmes-lista.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilterComponent,
    FilmesListaComponent,
    FilmesComponent,
    NotFoundComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
