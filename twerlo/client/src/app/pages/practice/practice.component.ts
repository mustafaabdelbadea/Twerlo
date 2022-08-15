import { AssessmentService } from './../../services/assessment.service';
import { Component, OnInit } from '@angular/core';
import { CheckedWord, word } from 'src/app/services/types/assessment.type';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
  providers: [MessageService]
})
export class PracticeComponent implements OnInit {
  words: CheckedWord[] = []
  city: string = 'val1'
  pos: string[] = [
    'adverb',
    'noun',
    'adjective',
    'verb'
  ]
  value: number = 0;
  precentage!: number;
  correctAnswers:number = 0;
  constructor(private assessmentService: AssessmentService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.assessmentService.getWords().subscribe((output) => {
      this.words = output.words.map((word) =>
      {
        return {
          ...word,
          checked: false,
          correct: false
        }
      })

      this.precentage = +((1 / this.words.length) *100).toFixed(2)
    }, (error) => {
      this.messageService.add({severity:'error', summary:error.message});
    })
  }


  getSelectedValue(pos: string, entry: CheckedWord) {
    this.value += this.precentage
    if(pos === entry.pos) {
      entry.correct = true
      this.correctAnswers += 1
    }
  }

  next() {
    this.correctAnswers = +((this.correctAnswers / this.words.length) *100).toFixed(2)
    this.router.navigate(['/rank', this.correctAnswers])
  }
}
