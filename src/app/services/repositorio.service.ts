import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  public static readonly MEDIA_TYPE_APP_JSON = 'application/json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  post<T>(url: string, body: any, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(url, body, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  put<T>(url: string, body: any, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.put<T>(url, body, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  get<T>(url: string, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(url, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  delete<T>(url: string, mediaType: string): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(url, {headers: this.getHeaders(mediaType), observe: 'response' });
  }

  private getHeaders(mediaType: string): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', mediaType);

    return headers;
  }
}
