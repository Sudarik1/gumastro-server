
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import connectDB from './config/db.js'

import commentRouter from './routes/commentRouter.js'
import noteRouter from './routes/noteRouter.js'
import pageRouter from './routes/pageRouter.js'
import mottoRouter from './routes/mottoRouter.js'
import applicationRouter from './routes/applicationRouter.js'

dotenv.config()
connectDB()

const port = process.env.PORT || 5000

const app = express()

// app.use(cors({
//     origin: function (origin, callback) {
//         if (origin === 'http://localhost:5000' || origin === 'http://localhost:3000') {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true
// }));

app.use(cors({
    origin: true,
    credentials: true
}));


app.listen(3000);


app.use(bodyParser.json())

app.use('/api/comment', commentRouter)
app.use('/api/note', noteRouter)
app.use('/api/page', pageRouter)
app.use('/api/motto', mottoRouter)
app.use('/api/application', applicationRouter)


app.get('/', (req, res)=>{
    res.send(`Server is ready`)
})

app.listen(port, ()=> console.log(`server is running at port: ${port}`))