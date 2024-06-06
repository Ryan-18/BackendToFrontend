import express from "express"
import 'dotenv/config'
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.send("backend to frontend connectioin");
})
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${port}`)
})

