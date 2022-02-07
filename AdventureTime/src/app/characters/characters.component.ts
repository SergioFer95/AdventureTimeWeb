import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})



export class CharactersComponent implements OnInit {

  public character: any;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.characterService.getInfoCharacter().subscribe((result)=>{
      this.character = result;
      console.log(this.character);
      
    }, (error) =>{
      console.error(error)
    })
  }
}
