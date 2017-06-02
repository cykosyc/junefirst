import * as express from 'express';
import Villains from '../models/villain';

let router = express.Router();

router.get('/', (req, res)=>{
  Villains.find().then((match)=>{
    res.json(match)
  })
})

export default router;
