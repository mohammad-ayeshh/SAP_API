import { Component, OnInit } from '@angular/core';
import { SapApiService } from './service/sap-api.service'
import { User } from './interface/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SAP_API';
  private user: User = {

    'name': 'mohammad ayesh',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  };

  constructor(private SapService: SapApiService) { }

  onGetUsers(): void {

    this.SapService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done gitting all the Users')
    );
  }

  onGetUser(): void {

    this.SapService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done gitting one User')
    );
  }
  onCreateUser(): void {

    this.SapService.creatUser(this.user).subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done Creating User')
    );
  }

  ngOnInit(): void {
    // this.onGetUsers();
    // this.onCreateUser();
    // this.onGetUser();
  }
} 
