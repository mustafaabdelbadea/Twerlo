import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.css']
})
export class RankCardComponent implements OnInit {

  @Input() rank!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
