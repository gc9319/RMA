import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from '../interfaces/i-character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent implements OnInit {

  dataCharacter: ICharacter[] = [];
  page: number = 1;
  C: string = '' //input value per ricerca

  constructor(private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void { }

  onScrollDown(): void {   
    this.page = this.page+1;
    this.getFilteredCharacter();
    console.log(this.dataCharacter)
 };

  search(): void{
   console.log(this.C);
   if (this.dataCharacter.length > 1){
     this.page = 1;
     this.dataCharacter.splice(0, this.dataCharacter.length);
   };
   this.getFilteredCharacter();
 }


 private getFilteredCharacter(){
   return this.characterService.searchCharacter(this.page, this.C).subscribe((res:any) =>{
     this.dataCharacter.push(...res.results)
   })
 }

 infoCharacter(item:ICharacter): void{
  this.router.navigate(["characters", item.id])
}

}
