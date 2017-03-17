import express from "express";

let app = express();

app.use(express.static('public'));

app.listen(9001);

console.log('Server running at http://127.0.0.1:9001/');
