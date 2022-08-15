import { AssessmentService } from './../../services/assessment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css'],
  providers: [MessageService],
})
export class RankComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private assessmentService: AssessmentService,
    private messageService: MessageService,
    private router: Router
  ) {}
  score: number = 0;
  ngOnInit(): void {
    this.route.params.subscribe(({ score }) => {
      this.score = score;
    });

    const inputs = {
      score: this.score,
    };

    this.assessmentService.rank(inputs).subscribe(
      (output) => {
        console.log(output);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: error.message });
      }
    );

    this.data = {
      labels: ['My rank', 'Others'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#42A5F5', '#66BB6A'],
          hoverBackgroundColor: ['#64B5F6', '#81C784'],
        },
      ],
    };
  }
}
