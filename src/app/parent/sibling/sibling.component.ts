import { DataServiceService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  private siblingMessage: string;
  private yourMessage: string;

  constructor(private dataService : DataServiceService) { }


  ngOnInit() {
  }
  
  sendMessage(someMessage: string){
    console.log('seding message...' + someMessage);

    this.yourMessage = someMessage;
    this.dataService.changeMessage(someMessage);
  }


}
