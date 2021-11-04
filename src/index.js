const fastify = require('fastify')({
    logger:true
})

const pesoRoute = require('./routes/peso.routes')

require('./utils/db')

fastify.get("/",(request , reply)=>{
    reply.send({data:"hola"})
});

pesoRoute.forEach(
    route => {
        fastify.route(route);
    }
)



const start = async () => {
    await fastify.listen(process.env.PORT || 3000  )
    fastify.log.info(`servidor escuchando  ${fastify.server.address().port}`);
}

start();