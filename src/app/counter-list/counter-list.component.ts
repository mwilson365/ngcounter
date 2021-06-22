import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: Counter[];
  superCounters: SuperCounter[];
  name = 'Counter Wall';


  constructor() {
    this.counters = [];
    this.superCounters = [];
  }
  create() {
    if (this.counters.length === 5) {
      this.newCounter();
    } else {
      const counter = new Counter();
      this.counters.push(counter);
    }

  }
  newCounter() {
    this.counters = [];
    const superCounter = new SuperCounter();
    this.superCounters.push(superCounter);
  }
  ngOnInit(): void {
  }

}
