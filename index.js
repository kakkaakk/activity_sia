

//Package imports : Because we installed express package 
const app = require('express') 

//Server Setup : Express module will be handling the function name
const server = app()  //hold crtl then click app to check
const PORT = 6767
const HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME, () => {
    console.log('Server is running ${HOSTNAME}:${PORT}')
})  //hold crtl then click listen to check

let data = [
    {
        "id": 1,
        "name": "Dog"
    },
    {
        "id": 2,
        "name": "Cat"
    },
    {
        "id": 3,
        "name": "Fish"
    }
]


req = request, res = response
server.get('/api/data', (req,res) => {
    return res.json({
        ...Date,
        category:1
    })
})