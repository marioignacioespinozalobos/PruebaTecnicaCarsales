import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GenericService<T> {

  constructor(
    protected _httpClient: HttpClient,
    @Inject("url") protected url: string
  ) { }

  getAll(){
    console.log(this.url);
    return this._httpClient.get(`${this.url}GetEpisodeAll`);
  }

  getUrl(urlPagina: string){
    console.log("getUrl");
    console.log(this.url);
    return this._httpClient.get(`${this.url}GetUrlPagina?pag=` + urlPagina);
  }  
}
