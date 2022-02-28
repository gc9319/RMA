import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocations } from '../interfaces/i-locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getAllLocation(page:number){
    return this.http.get<ILocations>('https://rickandmortyapi.com/api/location?page='+page)
  }
}
