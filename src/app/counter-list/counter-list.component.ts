import { Component, OnInit } from '@angular/core';
import {Counter} from '../counter'

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: Counter[];
  name = 'Counter Wall';
  count = 0;

  create(){
    const counter = new Counter();
    this.counters.push(counter)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
