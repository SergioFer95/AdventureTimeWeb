import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service'; // --> 1) Importa el Service

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  public character: any; // --> 4) Crea una variable que almacene toda la info resultante del Subscribe

  constructor(private characterService: CharacterService) { } // --> 2) Inyecta el Service para poder acceder a su interior

  ngOnInit(): void {
    this.getCharacters(); // 6) --> Invoca la función que hace que todo se lance
  }

  private getCharacters():void{ // --> 3) Crea la función con la que nos subscribimos al observable
    this.characterService.getInfoCharacter().subscribe((result)=>{
      this.character = result; // --> 5) Almacena la info en dicha variable
      console.log(this.character);
      
    }, (error) =>{ // 7)--> Este apartado lo puedes crear para que nos informe en caso de un posible error.
      console.error(error)
    })
  }
}
