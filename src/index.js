const fastify = require('fastify')({
    logger:true
})

const pesoRoute = require('./routes/peso.routes')

require('./utils/db')

// fastify.get("/",(request , reply)=>{
//     reply.send({data:"hola"})
// });

pesoRoute.forEach(
    route => {
        fastify.route(route);
    }
)

fastify.register(require('fastify-cors'), { options })

const start = async () => {
    await fastify.listen(process.env.PORT || 3000 , '0.0.0.0' )
    console.log(`servidor escuchando  ${fastify.server.address().port}`);
}

start();