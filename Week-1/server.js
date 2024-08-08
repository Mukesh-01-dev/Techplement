const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/public'));

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(8000, () => {
    console.log('Server running at port 8000')
}); 