// const Users = require('./../models/Users')
const sequelize = require('../models/sequilize');
const Users = sequelize.import('./../models/Users');


module.exports = {
    async index(req, res) {
        // Retorna Paginado
        // const users = await Users.findAndCountAll();
        const users = await Users.findAll({
            order: [ [ 'username', 'ASC' ]],
        });
        
        return res.status(200)
            .json(users);
    },
    async store(req, res) {

        const usersRequest = req.body;
        

        // Verifica se existe o E-mail
        const existsUsers = await Users.findOne({
            where : {email: usersRequest.email}
        });

        if(existsUsers) {
            return res.status(401)
                .json({
                    status : false,
                    message: `Opss, o email: '${usersRequest.email}' já está cadastrado`,
                });
        }
        const data = await Users.create(usersRequest);

        return res.status(200)
            .json(data);
        
    },
    async getUsers(req, res) {
        const { id } = req.params;
        // const Users = await Users.findByPk(id);
        const users = await Users.findAll({
            where : {id},
        });

        
        return res.status(200)
            .json(users);
    },
    async deleteUsers(req, res) {
        const { id } = req.params;
        const users = await Users.findByPk(id);
        return res.status(200)
            .json(users);
    },
};