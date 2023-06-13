import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User} from '../interface/user'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SapApiService {


  private apiBaseUrl = environment.apiBaseUrl ;
  // private apiBaseUrl = 'https://jsonplaceholder.typicode.com' ;
  constructor(private http:HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]> (`${this.apiBaseUrl}/Users`);

    }
  
    getUser(): Observable<User> {
      return this.http.get<User> (`${this.apiBaseUrl}/Users/1`);
      
    }
    creatUser(user: User): Observable<User> {
      return this.http.post<User> (`${this.apiBaseUrl}/Users/`,user);
       
    }
}
