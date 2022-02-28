import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterComponent } from './character/character.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { SearchCharacterComponent } from './search-character/search-character.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'search-character', component: SearchCharacterComponent},
  {path: 'characters/:id', component: CharacterDetailComponent},
  {path: 'episodes', component: EpisodesListComponent},
  {path: 'locations', component: LocationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
