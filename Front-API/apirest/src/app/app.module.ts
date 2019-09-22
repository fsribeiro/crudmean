import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './pessoas/pessoa-list/pessoa-list.component';

const appRoutes: Routes = [
  { path: 'pessoas', component: PessoaListComponent },
  { path: 'pessoas/novo', component: PessoaFormComponent },
  { path: 'pessoas/editar/:id', component: PessoaFormComponent},
  { path: '',
    redirectTo: 'pessoas',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PessoaFormComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
