const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
const datapath = path.join(__dirname, 'data')

app.get('/datesheet', (req, res) => {
  //res.send('date!');
  // const filePath = '/data/datesheet.pdf';
  const filePath = path.join(datapath, 'datesheet.pdf');
  res.sendFile(filePath);
});

app.get('/marks', (req, res) => {
//   res.send('marks!');
  // const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/nodejs/data/marks.pdf';
  const filePath = path.join(datapath, 'marks.pdf');
  res.sendFile(filePath);
    
});

app.get('/bonacert', (req, res) => {
//   res.send('bonacert!');
// const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/nodejs/data/bona.pdf';
const filePath = path.join(datapath, 'bona.pdf');
  res.sendFile(filePath);
});

app.get('/marksheet', (req, res) => {
//   res.send('marksheet!');
// const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/nodejs/data/marksheet.pdf';
const filePath = path.join(datapath, 'marksheet.pdf');
  res.sendFile(filePath);
});

app.listen(7777, () => {
  console.log('Server is listening on port 7777');
});
