import { Router } from 'express';
import TestController from '../../../controllers/test.controller';


const router = Router();


router.post('/rank', (req, res) => {
    try {
        if(req.body.score != undefined || req.body.score != null) {
         const  data = TestController.calculateRank(req.body.score);
           res.send(data)
        } else {
            res.status(400).send("No score provided")
        }
    } catch (error) {
        console.log(error);
    }
})

export const VersionOneRoutes = router;