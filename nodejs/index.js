const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/datesheet', (req, res) => {
  //res.send('date!');
  const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/nodejs/data/datesheet.pdf';
  res.sendFile(filePath);
});

app.get('/marks', (req, res) => {
//   res.send('marks!');
  const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/nodejs/data/marks.pdf';
  res.sendFile(filePath);
});

app.get('/bonacert', (req, res) => {
//   res.send('bonacert!');
const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/nodejs/data/bona.pdf';
  res.sendFile(filePath);
});

app.get('/marksheet', (req, res) => {
//   res.send('marksheet!');
const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/nodejs/data/marksheet.pdf';
  res.sendFile(filePath);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
