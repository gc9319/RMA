import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEpisode } from '../interfaces/iepisode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getAllEpisodes(page:number){
    return this.http.get<IEpisode>('https://rickandmortyapi.com/api/episode?page='+page)
  }
 
}
