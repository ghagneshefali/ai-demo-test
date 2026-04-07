const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Ready for AI Modification.');
});

app.listen(3000, () => console.log('Server running on 3000'));
