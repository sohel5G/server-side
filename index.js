
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const users = [
    { id: 1, name: 'Sohel', email: 'sohel@gmail.com' },
    { id: 2, name: 'Araf', email: 'araf@gmail.com' },
    { id: 3, name: 'Juel', email: 'jusl@gmail.com' },
    { id: 4, name: 'Nila', email: 'nila@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('user management server is running')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log('server is running on port: ', port)
})


