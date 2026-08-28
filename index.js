

//Package imports : Because we installed express package 
const app = require('express') 

//Server Setup : Express module will be handling the function name
const server = app()  //hold crtl then click app to check
server.listen(6767, '192.168.2.47', () => {
    console.log('Server is running')
})  //hold crtl then click listen to check
