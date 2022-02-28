import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeComponent } from './home/home.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    NavbarComponent,
    HomeComponent,
    SearchCharacterComponent,
    FooterComponent,
    CharacterDetailComponent,
    EpisodesListComponent,
    LocationsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
