import * as express from 'express';
import * as mongoose from 'mongoose';
import heros from './app/roots/api/heros';
import villains from './app/roots/api/villains';

const app = express();
const port = 8080;

mongoose.connect('mongodb://dcuser:dcpassword@ds161041.mlab.com:61041/dcpeople').then(() =>{
  console.log('we\'re connected');
}).catch((err)=>{
  console.log('oops!');
});

app.use (express.static('./app/www'));
app.use ('/api/heros', heros);
app.use ('/api/villains', villains);

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
