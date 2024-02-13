import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const option = {
    params: {
        include_adult: "false",
        include_video: 'true',
        language: 'en-US',
        page: 1,
        sort_by: 'papularity.desc'
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTliZTUyYWEzYTQxZWJhYTc3MzBlN2MwYmQzYmUwOSIsInN1YiI6IjY1Yzk5YzE2Y2U2YzRjMDE0OWI5Yjg5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fErQMq18QAgPGm3q_SzDxfWoILSyAiZXHD-EZUNInok'
    }
}


@Injectable({
    providedIn: 'root'

})
export class MovieSevice {
    http = inject(HttpClient)

    getMovies() {
        return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', option)
    }

    getTvShows() {
        return this.http.get('https://api.themoviedb.org/3/discover/tv', option)
    }

    getRatedMovies() {
        return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', option)
    }

    getBannerImage(id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, option)
    }

    getBannerVideo(id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, option);
    }

    getBannerDetail(id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, option);
    }

    getNowPlayingMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing', option)
    }

    getPopularMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/popular', option)
    }

    getTopRated() {
        return this.http.get('https://api.themoviedb.org/3/movie/top_rated', option)
    }

    getUpcomingMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/upcoming', option)
    }
}