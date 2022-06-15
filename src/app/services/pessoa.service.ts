import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { IPessoa } from '../models/pessoa.interface';
import { RepositorioService } from './repositorio.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private repositorioService: RepositorioService
  ) { }

  index(): Observable<HttpResponse<IPessoa[]>> {
    return this.repositorioService.get<IPessoa[]>(AppSettings.URL_PESSOA, RepositorioService.MEDIA_TYPE_APP_JSON);
  }

  store(colaborador: IPessoa): Observable<HttpResponse<IPessoa>> {
    return this.repositorioService.post<IPessoa>(AppSettings.URL_PESSOA, colaborador, RepositorioService.MEDIA_TYPE_APP_JSON);
  }

  show(colaborador: IPessoa): Observable<HttpResponse<IPessoa>> {
    return this.repositorioService.get<IPessoa>(`${AppSettings.URL_PESSOA}/${colaborador.cpf}`, RepositorioService.MEDIA_TYPE_APP_JSON);
  }

  update(colaborador: IPessoa): Observable<HttpResponse<IPessoa>> {
    return this.repositorioService.put<IPessoa>(`${AppSettings.URL_PESSOA}/${colaborador.cpf}`, colaborador, RepositorioService.MEDIA_TYPE_APP_JSON);
  }

  delete(colaborador: IPessoa): Observable<HttpResponse<IPessoa>> {
    return this.repositorioService.delete<IPessoa>(`${AppSettings.URL_PESSOA}/${colaborador.cpf}`, RepositorioService.MEDIA_TYPE_APP_JSON);
  }

}
