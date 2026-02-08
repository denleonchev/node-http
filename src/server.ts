import { createServer } from 'node:http';

const server = createServer();
server.on('request', (req, _res) => {
  console.log('----Method----');
  console.log(req.method);
  console.log('----URL----');
  console.log(req.url);
  console.log('----HEADERS----');
  console.log(req.headers);

  console.log('----body----');
  req.on('data', (chunk) => {
    console.log('chunk is ', chunk.toString());
  });
});

const port = 8050;
server.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
