const jsonServer = require('json-server')

const employeeServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middleWares = jsonServer.defaults()

const port = 4000 || process.env.PORT 

employeeServer.use(middleWares)
employeeServer.use(router)

employeeServer.listen(port,()=>{
    console.log(`employee server starts at port ${port} and waiting for client request...!`);
})