//1. import required modules
const http = require("http");
const url = require("url");
//2.Define the handler
const requestHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);
  console.log(passedUrl);
  //pass the url

  //send response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello, world! I want to display this new version");
};

//3.Create the server
const server = http.createServer(requestHandler);

//4.Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
