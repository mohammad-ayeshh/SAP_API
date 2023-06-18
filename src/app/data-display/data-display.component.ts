import { Component, OnInit } from '@angular/core';
import { SapApiService } from '../service/sap-api.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit{
data:any;

constructor(private SapService: SapApiService){}
  ngOnInit(): void {
    
    this.sapLogIn();
    
    
  }

  getPO(){
    this.SapService.getPOData().subscribe(
      response=> {
        this.data= response;
      },
      (error)=> {console.error('Error',error);}
    )
  }

  sapLogIn(){
    
    this.SapService.login().subscribe(
      (response)=> {
        console.log(response.SessionId);
        this.SapService.setSessionId(response.SessionId);
        this.fetchSessionId();
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  fetchSessionId():void {
    this.SapService.getPOData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
