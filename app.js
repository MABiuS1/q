const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, 'views', 'index.html');
    console.log('Resolved file path:', filePath);
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
