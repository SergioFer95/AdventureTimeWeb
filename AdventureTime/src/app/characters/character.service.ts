import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'; // --> Inyectamos el Observable aquí primero

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  private baseUrl: String;

  constructor(private http: HttpClient) { 
    this.baseUrl= 'https://gist.githubusercontent.com/ambethia/63c02f2161f749a8407aef58c283144b/raw/06763a09f970ac5c3d74bc93d17a791ffc6bcc7c';
  }

  getInfoCharacter(): Observable<any>{ // --> Y posteriormente se lo añadimos a la función que hace la petición
    return this.http.get(`${this.baseUrl}/adventure-time.json`);
  }
}
