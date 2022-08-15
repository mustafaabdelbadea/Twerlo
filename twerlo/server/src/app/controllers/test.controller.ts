import dataFile from "../../../TestData.json";

export interface word {
  id: number;
  word: string;
  pos: string;
}
class TestController {
  getWords() {
    const wordMap = new Map<string, number[]>();
    const newWordList: word[] = [];

    // Add word pos as unique key in map 
    dataFile.wordList.forEach((word: word, index: number) => {
      const isExists = wordMap.get(word.pos);

      if (isExists) {
        wordMap.get(word.pos).push(index);
      } else {
        wordMap.set(word.pos, [index]);
      }
    });

    wordMap.forEach((val) => {
      const rand = Math.floor(Math.random() * val.length);
      newWordList.push(dataFile.wordList[val[rand]]);
      delete dataFile.wordList[val[rand]];
    });

    const questionNumber = 10;

    while (newWordList.length != questionNumber) {
      const rand = Math.floor(Math.random() * dataFile.wordList.length);
      newWordList.push(dataFile.wordList[rand]);
      delete dataFile.wordList[rand];
    }

    return {
        words: newWordList
    }
  }

  calculateRank(score) {
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
