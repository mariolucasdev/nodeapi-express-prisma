const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

const UserController = {}
const FillableFields = { name: true, email: true, id: true }

UserController.findAll = async (req, res) => {
    const allUsers = await client.user.findMany({
        select: FillableFields
    });

    res.json(allUsers)
}

UserController.findById = async (req, res) => {
    const user = await client.user.findUnique({
        select: FillableFields,
        where: {
            id: req.params.id
        }
    });

    if (!user) {
        res.send(404).json({ error: 'User not found' })
        return false;
    }

    res.json(user)
}

UserController.store = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await client.user.create({
        data: {
            name,
            email,
            password
        }
    });

    delete user.password;

    res.status(201).json(user);
}

UserController.update = async (req, res) => {
    
    const user = await client.user.findUnique({
        where: {
            id: req.params.id
        }
    });
    
    if (!user) {
        res.send(404).json({ error: 'User not found' })
        return false;
    }

    const { name, email, password } = req.body;

    const userUpdated = await client.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name,
            email,
            password
        }
    });

    delete userUpdated.password;

    res.json(userUpdated);
}

UserController.delete = async (req, res) => {
    const user = await client.user.findUnique({
        where: {
            id: req.params.id
        }
    });
    
    if (!user) {
        res.send(404).json({ error: 'User not found' })
        return false;
    }

    await client.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({ message: 'User deleted' });
}

module.exports = UserController;