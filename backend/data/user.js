const bcrypt = require('bcryptjs')

const Users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'jamie_vardy',
        email: 'vardy@example.com',
        password: bcrypt.hashSync('12345', 10)
    },
    {
        name: 'morgan stanley',
        email: 'stanley@example.com',
        password: bcrypt.hashSync('12345', 10)
    },
    {
        name: 'chase',
        email: 'chase@example.com',
        password: bcrypt.hashSync('12345', 10),
    },
]

module.exports = Users