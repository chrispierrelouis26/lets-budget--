

const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicPath));

app.get('*', (req,res)=> {
    res.sendFile(pathljoin(publicPath, 'index.html'))
})

app.listen(port, ()=> {
    console.log('app is listening on port 3000')
})