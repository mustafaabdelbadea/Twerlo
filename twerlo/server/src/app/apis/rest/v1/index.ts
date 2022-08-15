import { Router } from 'express';
import TestController from '../../../controllers/test.controller';


const router = Router();


router.get('/words', (req, res) => {
    try {
        const data = TestController.getWords();
        res.send(data).status(200)
    } catch (error) {
    console.log("🚀 ~ file: index.ts ~ line 12 ~ router.get ~ error", error)
    }
})


router.post('/rank', (req, res) => {
    try {
        if(req.body.score != undefined || req.body.score != null) {
         const  data = TestController.calculateRank(req.body.score);
           res.send(data).status(200)
        } else {
            res.status(400).send("No score provided")
        }
    } catch (error) {
        console.log(error);
    }
})

export const VersionOneRoutes = router;