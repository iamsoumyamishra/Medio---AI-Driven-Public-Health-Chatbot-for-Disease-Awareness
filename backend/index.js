import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import routes from './routes/api.js';
import consoleLogs from './middleware/consoleLogs.js';

dotenv.config({quiet: true})

const port = process.env.PORT;
const app = express();



try{
    const conn = await mongoose.connect(process.env.DATABASE_URI);
    console.log("Database Successfully Connected!")
} catch {
    console.log("Can not connect to the Database!")
}


app.use('/api/ai', routes);
app.use(express.json());
app.use(consoleLogs);

app.get('/', (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});