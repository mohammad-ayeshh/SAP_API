import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../interface/user'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SapApiService {

  // private apiBaseUrl = 'https://jsonplaceholder.typicode.com' ;
  private apiBaseUrl = environment.apiBaseUrl;
  private apiUrl = 'http://localhost:50001/b1s/v1'; 
  private sessionId!: string;
  
  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    
    const loginUrl = `${this.apiUrl}/Login`;
    const loginData = {
      CompanyDB: 'SBODemoGB',
      UserName: 'manager',
      Password: '1234',
      withCredentials: true
    };
    return this.http.post(loginUrl, loginData);
  }

  getPOData(): Observable<any> {
    const dataUrl = `${this.apiUrl}/PurchaseOrders`; 

    const headers = new HttpHeaders().set('B1SESSION', this.sessionId);

    return this.http.get(dataUrl, { headers });
  }
  
  setSessionId(sessionId: string): void {
    this.sessionId = sessionId;
  }
  getSeesionId():string{
    return this.sessionId;
  }
  getUsers(): Observable<User[]> {
    let myHeader = new HttpHeaders({ 'myHeader': 'HeaderValue', 'MyHeader2': 'headerValue 2' })
    myHeader = myHeader.set('id', '1234');
    myHeader = myHeader.append('id', '1234');
    //  myHeader = myHeader.set('Accept','12345');  
    myHeader = myHeader.set('Accept-Encoding', 'a7a');
    return this.http.get<User[]>(`${this.apiBaseUrl}/Users`, { headers: myHeader });
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiBaseUrl}/Users/1`);
  }
  creatUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiBaseUrl}/Users/`, user);
  }
}