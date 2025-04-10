// Node.js Application (index.js)
      const http = require('http');

      const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello from Node.js App!\n');
      });

      const port = 3000;
      server.listen(port, () => {
        console.log(`Node.js App running on port ${port}`);
      });
