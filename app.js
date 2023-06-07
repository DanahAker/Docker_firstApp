

const express= require('express')

const app = express()
const port = 8080;


app.use(express.json())

app.get("/", async (req, res) => {
    res.send('Hello World');
    
});


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})