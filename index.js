const express = require('express');
const UserController = require('./controllers/UserController');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/users', UserController.findAll)
app.get('/users/:id', UserController.findById)
app.post('/users', UserController.store)
app.put('/users/:id', UserController.update)
app.delete('/users/:id', UserController.delete)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})