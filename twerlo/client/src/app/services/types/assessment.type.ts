
export enum pos {
  adverb = 'adverb',
  verb = 'verb',
  noun = 'noun',
  adjective = 'adjective'
}
export interface word {
  id: number;
  word: string;
  pos: pos
}
