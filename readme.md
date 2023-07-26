## Api Node

Api Node JS with express and prisma.

## Installing Project

clone repository

```
git clone https://github.com/mariolucasdev/nodeapi-express-prisma.git

```

installing dependencies

```
npm install
```

running prisma migrations

```
npx prisma migrate dev
```

check you database structure

```
npx prisma studio
```

run application

```
node --watch index.js //or
node index.js
```

## Api Routes

GET users - Get all users
GET users/:id - Get user by id
POST users - Store user (name, email, password)
PUT users/:id - Update user (name, email, password)
DELETE users/:id - Delete user
