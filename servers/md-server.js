const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Define the base directory where your files are located
  const baseDirectory = __dirname;

  // Get the file path from the URL requested by the client
  const filePath = path.join(baseDirectory, req.url);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Read the file and serve it to the client
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If the file is not found, respond with a 404 status code
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        // For other errors, respond with a 500 status code
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    } else {
      // Determine the appropriate content type based on the file extension
      const contentType = getContentType(filePath);

      // Set the content type in the response header
      res.setHeader('Content-Type', contentType);

      // Send the file content to the client
      res.end(data);
    }
  });
});

// Start the server on port 3001
const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Helper function to determine the content type based on file extension
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    default:
      return 'application/octet-stream';
  }
}