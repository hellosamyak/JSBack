import express from "express";

const app = express();
const port = 2000;

app.get('/', (req, res) => {
    res.send('Hello, express!')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})