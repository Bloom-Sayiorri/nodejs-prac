import express from 'express';
import http from 'http';

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send("Hello World from Nodejs!!!")
}).listen(port, () => {console.log(`Server listening on port: ${port}`)});

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "text/plain",
//     });

//     res.write("Hello world!!");

//     res.end();
// }).listen(1337);