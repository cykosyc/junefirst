import * as express from 'express';
import * as mongoose from 'mongoose';
import heros from './app/roots/api/heros';

const app = express();
const port = 8080;

mongoose.connect('mongodb://dcuser:dcpassword@ds161041.mlab.com:61041/dcpeople').then(() =>{
  console.log('we\'re connected');
}).catch((err)=>{
  console.log('oops!');
});

app.use (express.static('./app/www'));
app.use ('/api/heros', heros);


app.get('/', (req, res, next) => {
  res.sendfile('app/www/index.html')
})

app.get('/about', (req, res, next) => {
  res.sendfile('app/www/about.html')
})

app.get('*', (req, res, next) => {
  res.sendfile('app/www/404.html')
})

app.listen(port, function() {
  console.log('listening on port' + port)
});
