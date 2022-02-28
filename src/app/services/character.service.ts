import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/i-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  
  constructor(private http: HttpClient) { }

  getAllCharacters(page:number){
    return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/character?page='+ page);
  }

  searchCharacter(page:number, C:string){
    return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/character?page='+ page + '&name=' +C)
  }

  infoCharacter(id:number){
    return this.http.get<ICharacter>('https://rickandmortyapi.com/api/character/' + id)
  }
}
