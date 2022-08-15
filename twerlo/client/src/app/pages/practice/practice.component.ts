import { AssessmentService } from './../../services/assessment.service';
import { Component, OnInit } from '@angular/core';
import { word } from 'src/app/services/types/assessment.type';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  words: word[] = []
  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
    this.assessmentService.getWords().subscribe((output) => {
      this.words = output.words
    })

  }

}
