import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapModulesModule } from './bootstrap-modules/bootstrap-modules.module';
import { HomeComponent } from './home/home.component';
import { PessoaService } from './services/pessoa.service';
import { RepositorioService } from './services/repositorio.service';
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    PessoaModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BootstrapModulesModule,
  ],
  providers: [PessoaService, RepositorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
