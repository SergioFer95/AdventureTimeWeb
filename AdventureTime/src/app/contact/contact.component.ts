import { Component, OnInit } from '@angular/core';
import { UserMessage } from '../models/formModel';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public userMessage : UserMessage;

  constructor() { }

  ngOnInit(): void {
  }

}
