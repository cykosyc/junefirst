import * as express from 'express';
import Heros from '../models/hero';

let router = express.Router();

router.get('/', (req, res)=>{
  Heros.find().then((match)=>{
    res.json(match)
  })
})

export default router;
