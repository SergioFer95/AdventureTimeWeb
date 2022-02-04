import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  private baseUrl: String;

  constructor(private http: HttpClient) { 
    this.baseUrl= 'https://gist.githubusercontent.com/ambethia/63c02f2161f749a8407aef58c283144b/raw/06763a09f970ac5c3d74bc93d17a791ffc6bcc7c';
  }

  getInfoCharacter(){
    return this.http.get(`${this.baseUrl}/adventure-time.json`);
  }
}
