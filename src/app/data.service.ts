import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['To travel around the globe','To buy a house by the seashore']);
  goal = this.goals.asObservable(); 
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
