import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreaSchedaComponent } from './components/crea-scheda/crea-scheda.component';
import { DettaglioSchedaComponent } from './components/dettaglio-scheda/dettaglio-scheda.component';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'crea-scheda',
    component: CreaSchedaComponent,
  },
  {
    path: 'dettaglio-scheda/:id',
    component: DettaglioSchedaComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreaSchedaComponent,
    DettaglioSchedaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
