import express from 'express';
import { USERS_BBDD } from '../bbdd.js';

const accuontRouter = express.Router();

accuontRouter.use((req, res, next)=> {
    console.log(req.ip);

    next();
})


accuontRouter.get("/", (req,res) => {
    res.send("Holaa");
})

//obtner los detalles de una cuenta
accuontRouter.get('/:guid', (req, res) => {
    const { guid } = req.params;

    const user = USERS_BBDD.find((user) => user.guid === guid);

    if(!user) res.status(404).send();

    res.send(user);
});
//Crear una nueva cuenta apartir de guid y name
accuontRouter.post('/', (req, res) => {
    const { guid, name} = req.body;

    if(!name || !guid) return res.state(400).send();

    const user = USERS_BBDD.find((user) => user.guid === guid);

    if(user) return res.status(409).send();

    USERS_BBDD.push({
        guid,
        name,
    })

    return res.send();
});

//Actualizar una cuenta
accuontRouter.patch('/:guid', (req, res) => {
    const { guid } = req.params;
    const { name } = req.body;

    if(!name) return res.state(400).send();

    const user = USERS_BBDD.find((user) => user.guid === guid);

    if(!user) res.status(404).send();

    user.name = name;
     return res.send();
});
//Elimnar una cuenta
accuontRouter.delete('/:guid', (req, res) => {
    const { guid } = req.params;

    const userIndex = USERS_BBDD.findIndex((user) => user.guid === guid);

    if(userIndex === -1) res.status(404).send();

    USERS_BBDD.splice(userIndex, 1);

    res.send();

});


export default accuontRouter;