import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICharacter } from '../interfaces/i-character';
import { CharacterService } from '../services/character.service';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  dataCharacter: ICharacter[] = [];
  page: number = 1;

  constructor(
    private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCharacter();
  }
 
  private getCharacter(){
    return this.characterService.getAllCharacters(this.page).subscribe((res: any) => {
      this.dataCharacter.push(...res.results);}
    )};

   onScrollDown(): void {   
     this.page = this.page+1;
     this.getCharacter();
     console.log(this.dataCharacter)
  };  

  infoCharacter(item:ICharacter): void{
    this.router.navigate(["characters", item.id])
  }

  


}
