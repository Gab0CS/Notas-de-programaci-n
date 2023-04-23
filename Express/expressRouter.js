// router provides a subset of Express methods. To create an instance of one, we invoke the .Router() method on the top-level Express import.
// we mount it at a certain path using app.use() and pass in the router as the second argument. This router will now be used for all paths 
// that begin with that path segment.
const express = require('express');
const app = express();

const monsters = {
    '1': {
        name: 'godzilla',
        age: 250000000
    },
    '2': {
        name: 'manticore',
        age: 21
    }
}

const monstersRouter = express.Router();

app.use('/monsters', monstersRouter);

monstersRouter.get('/:id', (req, res, next) => {
    const monster = monsters[req.params.id];
    if (monster) {
        res.send(monster);
    } else {
        res.status(404).send();
    }
});

// we will keep each router in its own file, and require them in the main application. This allows us to keep our code clean and our files short
// we would create a new file monsters.js and move all code related to /monsters requests into it.
