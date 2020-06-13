import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { NewsComponent } from './news/news.component';



@Injectable({
    providedIn: 'root'
})
export class ApiService {
    test = "test"
    //need to change once I go into PROD***************************************
    URL = 'http://localhost:3000/blogContent'
    URLPost = 'http://localhost:3000/postBlog'
    //"https://sound-doctrineministry.org/json"  PROD
    //'http://localhost:3000/json'              DEVELOPMENTs



    constructor(private http: HttpClient) { }

    getJson() {
        return this.http.get(this.URL);
    }
    updateJson(stuffFromFrontend) {
        this.http.post(this.URLPost, stuffFromFrontend).subscribe(res => console.log(res))
    }
}
