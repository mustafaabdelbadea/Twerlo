export interface wordOutput {
    words: word[]
}

export interface word {
  id: number;
  word: string;
  pos: string
}

export interface CheckedWord extends word {
  checked: boolean
  correct: boolean

}


export interface rankOutput {
  rank: number
}


export interface rankInputs {
  score: number
}
