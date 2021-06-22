import { Component, Input, OnInit } from '@angular/core';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'super-counter',
  templateUrl: './counter-total-component.component.html',
  styleUrls: ['./counter-total-component.component.css']
})
export class CounterTotalComponentComponent implements OnInit {
  @Input() counter: SuperCounter;

  constructor() { }

  ngOnInit(): void {
  }

}
