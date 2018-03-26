import { DataServiceService } from './../../data-service.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childMessage;
  
  @Input() ingredients;
  
  message: string;
  newMessage : string;
  constructor(private ds : DataServiceService) { }

  ngOnInit() {
    console.log('checking new message');    
  }

  getNewMessage(){
    console.log('checking new message');
    this.ds.currentMessage.subscribe(incommingMessage => this.newMessage = incommingMessage);
  }
}
