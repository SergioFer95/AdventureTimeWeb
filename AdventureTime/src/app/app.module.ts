import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'; // --> 1) importamos nuestro módulo

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    ContactComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // --> 2) lo declaramos como componente en IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
