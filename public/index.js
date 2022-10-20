const express = require('express'); 
const app = express();
const port = 80;
const path = require('path');

req_path=path.join(__dirname,'..');
app.use(express.static(req_path))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});