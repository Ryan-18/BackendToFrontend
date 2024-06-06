import express from "express"
import 'dotenv/config'
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.send("backend to frontend connectioin");
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
  { id: 1, title: 'Joke 1', content: 'Why don’t scientists trust atoms? Because they make up everything!' },
  { id: 2, title: 'Joke 2', content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
  { id: 3, title: 'Joke 3', content: 'Why don’t skeletons fight each other? They don’t have the guts.' },
  { id: 4, title: 'Joke 4', content: 'What do you call fake spaghetti? An impasta!' },
  { id: 5, title: 'Joke 5', content: 'Why did the golfer bring two pairs of pants? In case he got a hole in one.' },
  { id: 6, title: 'Joke 6', content: 'What did the ocean say to the shore? Nothing, it just waved.' },
  { id: 7, title: 'Joke 7', content: 'Why can’t you give Elsa a balloon? Because she will let it go.' },
  { id: 8, title: 'Joke 8', content: 'How does a penguin build its house? Igloos it together.' },
  { id: 9, title: 'Joke 9', content: 'Why did the coffee file a police report? It got mugged.' },
  { id: 10, title: 'Joke 10', content: 'Why don’t some couples go to the gym? Because some relationships don’t work out.' }
];
    res.send(jokes);
})
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${port}`)
})

