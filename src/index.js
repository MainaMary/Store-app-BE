
import http from 'http';
import app from './app';

const server = http.createServer(app);

const port =  5000;

server.listen(port, async () => {
  console.log(`Find me on http://localhost:${port}`);
});