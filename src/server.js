import express from 'express';
import bodyParser from 'body-parser';
import someFunc from './controllers/someFunc';

export default () => {
  const app = express();
  app.set('port', (process.env.PORT || 5100));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Spin up the server
  const port = app.get('port');
  app.listen(port, () => {
    console.log(`Running on port ${port}...`);
    console.log('Hello', someFunc());
  });
};
