const pesoController = require('../controllers/peso.controllers')

const pesoRoute =
[
{
    url : '/peso',
    method : 'GET',
    handler : pesoController.obtenerPesos
},
{
    url : '/peso/:id',
    method : 'GET',
    handler : pesoController.obtenerPesoId
},
{
    url : '/peso',
    method : 'POST',
    handler : pesoController.crearPeso
},
{
    url : '/peso/:id',
    method : 'PUT',
    handler : pesoController.obtenerPesoId
},
{
    url : '/peso/:id',
    method : 'DELETE',
    handler : pesoController.eliminarPeso
},
]
module.exports = pesoRoute;
