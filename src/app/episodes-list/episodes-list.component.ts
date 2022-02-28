import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEpisode } from '../interfaces/iepisode';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {

  episodes: IEpisode[] = [];
  page: number = 1;

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  private getEpisodes(){
    return this.episodeService.getAllEpisodes(this.page).subscribe((res:any) => {
      this.episodes.push(...res.results);
    })
  }

  onScrollDown(): void {   
    this.page = this.page+1;
    this.getEpisodes();
 };  

}
