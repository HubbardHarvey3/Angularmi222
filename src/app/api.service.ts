import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //need to change once I go into PROD***************************************
    URL = 'http://localhost:3000/blogContent'
    //"https://sound-doctrineministry.org/json"  PROD
    //'http://localhost:3000/json'              DEVELOPMENTs

    constructor(private http: HttpClient) { }

    getJson() {
        return this.http.get(this.URL);
    }
}
