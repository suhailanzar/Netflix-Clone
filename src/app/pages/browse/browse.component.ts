
import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieSevice } from '../../core/services/movie-service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/model/video-content-interface';
import { forkJoin, map } from 'rxjs';
@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {

  auth = inject(AuthService)
  movieService = inject(MovieSevice)
  name = JSON.parse(sessionStorage.getItem('logged')!).name
  profileimg = JSON.parse(sessionStorage.getItem('logged')!).picture
  email = JSON.parse(sessionStorage.getItem('logged')!).email

  // popularMovies: IVideoContent[] = []
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];


  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
 
  ];

  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows,]) => {
          return { movies, tvShows}
        })
      ).subscribe((res: any) => {
        console.log("res is", res);
        this.movies = res.movies.results as IVideoContent[];
        this.tvShows = res.tvShows.results as IVideoContent[];
      
      })
  }


  signOut() {
    sessionStorage.removeItem('logged');
    this.auth.signOut()
  }

}
