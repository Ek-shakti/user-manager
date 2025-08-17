let users = [
    { id: 1, name: 'shakti', age: 24 },
    { id: 2, name: 'ayesha', age: 30 },
    { id: 3, name: 'joey', age: 28 },
    { id: 4, name: 'safiya', age: 22 },
    { id: 5, name: 'ross', age: 27 }
];

const getAllUsers = (req, res) => {
    res.json(users);
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    res.json(user);
};

const createUser = (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: 'Name and age are required.' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        age
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, age } = req.body;

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    if (name) user.name = name;
    if (age) user.age = age;

    res.json(user);
};

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found.' });
    }

    const deletedUser = users.splice(index, 1)[0];
    res.json({ message: 'User deleted.', user: deletedUser });
};

// Export  functions
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
