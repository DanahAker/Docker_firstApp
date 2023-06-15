const express= require('express')
var cors = require('cors') 
//require('./db')
const userRouter = require('./routers/user')

const app = express()
app.use(cors());
const port = 8080;


app.use(express.json())

app.get("/", async (req, res) => {
    res.send('Hello World');
    
});


app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port   ' + port)
})


