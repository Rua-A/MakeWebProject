import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import mime from "mime-types";

const PORT = 4000;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/src', express.static('D:/Programming/WebClone/WebClone2/src'));
app.use('/src/img', express.static('D:/Programming/WebClone/WebClone2/src/img'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/src/login.js', (req, res) => {
    const filePath = 'D:/Programming/WebClone/WebClone2/src/login.js';
    const mimeType = mime.lookup(filePath);
    res.setHeader('Content-Type', mimeType);
    res.sendFile(filePath, {
      dotfiles: 'allow',
      headers: {
        'Content-Type': mimeType
      }
    }, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', filePath);
      }
    });
  });

  app.get('/src/map.js', (req, res) => {
    const filePath = 'D:/Programming/WebClone/WebClone2/src/map.js';
    const mimeType = mime.lookup(filePath);
    res.setHeader('Content-Type', mimeType);
    res.sendFile(filePath, {
      dotfiles: 'allow',
      headers: {
        'Content-Type': mimeType
      }
    }, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', filePath);
      }
    });
  });

  app.get('/dist/css/styles.css', (req, res) => {
    const filePath = 'D:/Programming/WebClone/WebClone2/dist/css/styles.css';
    const mimeType = mime.lookup(filePath);
    res.setHeader('Content-Type', mimeType);
    res.sendFile(filePath, {
      dotfiles: 'allow',
      headers: {
        'Content-Type': mimeType
      }
    }, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', filePath);
      }
    });
  });

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}!!`);

app.listen(PORT,handleListening);