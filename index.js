const jsonServer = require('json-server')

const EMServer = jsonServer.create()
const middleWare = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

EMServer.use(middleWare)
EMServer.use(route)

EMServer.listen(PORT,()=>{
    console.log(`EMServer started at PORT : ${PORT} and waiting for Clint Request!!!`);
    
})