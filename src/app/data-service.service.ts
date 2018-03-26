import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataServiceService {


  //create a private variable that will hold the BehaviorSubject instance with a string message
  private messageSource = new BehaviorSubject<string>("default message");

  //creare an observable instace
  //we create a currentMessage variable to handle this data(message) stream as an observable that will be used by components.
  currentMessage = this.messageSource.asObservable();

  constructor() { }


  //this function calls on next method on messageSoruce
  changeMessage(message : string)
  {
    this.messageSource.next(message);
  }

}
