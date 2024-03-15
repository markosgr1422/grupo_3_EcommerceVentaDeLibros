const {Usuario} = require('../../database/models');


const userAPIController = {
    'list': (req, res) => {
        Usuario.findAll()
        .then(users => {
            users = users.map(user => ({...user.dataValues, detail: `/api/users/${user.id}`}))
            let respuesta = {
                meta: {
                    status : 200,
                    count: users.length,
                    url: '/api/users'
                },
                users
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        Usuario.findByPk(req.params.id)
            .then(user => {
                const {id_rol, password, ...userWithoutInfo} = user.dataValues 
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: userWithoutInfo
                }
                res.json(respuesta);
            });
    },
    
}

module.exports = userAPIController;