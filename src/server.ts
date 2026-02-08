import { createServer } from 'node:http';

const server = createServer();
server.on('request', (req, res) => {
  console.log('----Method----');
  console.log(req.method);
  console.log('----URL----');
  console.log(req.url);
  console.log('----HEADERS----');
  console.log(req.headers);
  const name = req.headers.name;

  console.log('----body----');

  let data = '';
  req.on('data', (chunk) => {
    data += chunk.toString();
  });
  req.on('end', () => {
    const parsedData = JSON.parse(data) as { title: string };
    console.log('name', name);
    console.log('data => ', data);

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(
      JSON.stringify({
        message: `Post with the title ${parsedData.title} was created`,
      })
    );
  });
});

const port = 8050;
server.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
