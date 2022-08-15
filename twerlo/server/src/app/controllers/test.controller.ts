import dataFile from "../../../TestData.json";

export interface word {
  id: number;
  word: string;
  pos: string;
}
class TestController {
  getWords() {
    const DataWord = [...dataFile.wordList]
    const wordMap = new Map<string, number[]>();
    const newWordList: word[] = [];

    // Add word pos as unique key in map 
    DataWord.forEach((word: word, index: number) => {
      const isExists = wordMap.get(word.pos);

      if (isExists) {        
        wordMap.get(word.pos).push(index);
      } else {
        wordMap.set(word.pos, [index]);
      }
    });
    
    wordMap.forEach((val) => {
      const rand = Math.floor(Math.random() * val.length);
      if(DataWord[val[rand]]) {
        newWordList.push(DataWord[val[rand]]);
        DataWord.splice(val[rand], 1)
      }
    });

    const questionNumber = 10;

    while (newWordList.length != questionNumber) {
      const rand = Math.floor(Math.random() * DataWord.length);
      if(DataWord[rand]) {
        newWordList.push(DataWord[rand]);
        DataWord.splice(rand, 1)
      }
    }

    return {
        words: newWordList
    }
  }

  calculateRank(score: number) {
    let points = 0;
    dataFile.scoresList.forEach((s) => {
      if (s < score) {
        points++;
      }
    });

    const rank = (points / dataFile.scoresList.length) * 100;

    return {
      rank: +rank.toFixed(2),
    };
  }
}

export default new TestController();
