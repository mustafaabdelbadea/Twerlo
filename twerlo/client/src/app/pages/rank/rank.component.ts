import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  score: number = 0;
  ngOnInit(): void {
    this.route.params.subscribe(({ score }) => {
      this.score = score;
    });
  }

}
