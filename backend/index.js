import express from 'express';

import routes from './routes/api.js';

const app = express();
const port = 3000;

app.use('/api/ai', routes);
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});