import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../classes/character';
import { ICharacter } from '../interfaces/i-character';
import { CharacterService } from '../services/character.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterInfo: ICharacter = new Character();


  constructor(private characterService: CharacterService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.characterService.infoCharacter(this.route.snapshot.params['id']).subscribe(
      (data:ICharacter) => {
        this.characterInfo = data;
        if(data.status === 'Alive'){
          $('#status').css('color', 'green')
        } else if (data.status === 'Dead'){
          $('#status').css('color', 'red')
        } return;
    });
  }

  

}
