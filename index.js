

//Package imports : Because we installed express package 
const app = require('express') 

//Server Setup : Express module will be handling the function name
const server = app()  //hold crtl then click app to check
//const PORT = 6767
//const HOSTNAME = '0.0.0.0'
server.listen(6767, '0.0.0.0', () => {
    console.log('Server is running')
})  //hold crtl then click listen to check
