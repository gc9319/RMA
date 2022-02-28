import { Component, OnInit } from '@angular/core';
import { ILocations } from '../interfaces/i-locations';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: ILocations[] = [];
  page: number = 1;

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  private getLocations(){
    return this.locationsService.getAllLocation(this.page).subscribe((res:any) => {
      this.locations.push(...res.results);
    })
  }

  onScrollDown(): void {   
    this.page = this.page+1;
    this.getLocations();
 };  

}
