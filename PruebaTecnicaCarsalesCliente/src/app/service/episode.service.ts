import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../model/episode';
import { CollectionGeneric } from '../model/collectionGeneric';
import { Config } from '../config/config';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})

export class EpisodeService extends GenericService<CollectionGeneric<Episode>> {

  constructor(protected override _httpClient: HttpClient) { 
    super(_httpClient, `${Config.baseUrl}episode/`);
  }
  
  get(){
    console.log("Entre al Get");    

    return this._httpClient.get(`${Config.baseUrl}/GetEpisodeAll`);
  }  

  
  getUrlP(stringUrl: string){
    return this._httpClient.get(`${Config.baseUrl}/GetUrlPagina?pag=` + 2);
  }
}
  
   
