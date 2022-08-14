import dataFile from '../../../TestData.json'

class TestController {
    getWords() {
        const arr = new Map()
        
        dataFile.wordList.forEach((key, index) => {
           const isExists = Object.keys(arr).includes(key.pos)
           if(isExists) {
            arr.get(key.pos).push(index)
           }
           else {
            arr.set(key.pos, [index])
           }
        });
    }


    calculateRank(score) {
        let points = 0
        dataFile.scoresList.forEach((s) => {
            if(s < score) {
                points++
            }
        })

        const rank = (points / dataFile.scoresList.length) * 100

        return {
            rank: +rank.toFixed(2)
        }
    }
}


export default new TestController()