import { Agent, request } from 'node:http';

const agent = new Agent({ keepAlive: true });

const req = request({
  agent,
  hostname: 'localhost',
  port: 8050,
  method: 'POST',
  path: '/create-post',
  headers: {
    'content-type': 'application/json',
    name: 'Joe',
  },
});

req.on('response', (res) => {
  console.log('----Status----');
  console.log(res.statusCode);
  console.log('----HEADERS----');
  console.log(res.headers);
  console.log('----BODY----');
  res.on('data', (chunk) => {
    console.log(JSON.parse(chunk.toString()));
  });
});

req.end(
  JSON.stringify({
    title: 'Title of my post',
    body: 'This is a body of the post',
  })
);
