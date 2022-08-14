import dataFile from '../../../TestData.json'

class TestController {
    getWords() {
        
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