// const express = require('express');
// const app = express();
// const port = 5000;

// app.use(express.json());

// let users = [
//     { id: 1, name: 'shakti', age: 24 },
//     { id: 2, name: 'ayesha', age: 30 },
//     { id: 3, name: 'joey', age: 28 },
//     { id: 4, name: 'safiya', age: 22 },
//     { id: 5, name: 'ross', age: 27 }
// ];


// app.get('/api/users', (req, res) => {
//     res.json(users);
// });



// app.get('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const user = users.find(u => u.id === userId);

//     if (!user) {
//         return res.status(404).json({ message: 'User not found.' });
//     }

//     res.json(user);
// });


// app.post('/api/users', (req, res) => {
//     const { name, age } = req.body;

//     if (!name || !age) {
//         return res.status(400).json({ message: 'Name and age are required.' });
//     }

//     const newUser = {
//         id: users.length + 1,
//         name,
//         age
//     };

//     users.push(newUser);
//     res.status(201).json(newUser);
// });


// app.patch('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const { name, age } = req.body;

//     const user = users.find(u => u.id === userId);

//     if (!user) {
//         return res.status(404).json({ message: 'User not found.' });
//     }

//     if (name) user.name = name;
//     if (age) user.age = age;

//     res.json(user);
// });


// app.delete('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const index = users.findIndex(u => u.id === userId);

//     if (index === -1) {
//         return res.status(404).json({ message: 'User not found.' });
//     }

//     const deletedUser = users.splice(index, 1)[0]; // remove user
//     res.json({ message: 'User deleted.', user: deletedUser });
// });


// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });



const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.json());


// Import and use router
const userRouter = require('./routes/userRouter');
app.use('/api/users', userRouter);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
