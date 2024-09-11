const fs = require('fs');
const users = require('../user.js.json')
function getAllUsers(req,res){
    res.json(users);

}
function getParticularUser(req,res) {
    let id = parseInt(req.params.id);
    let user = users.find((user)=> user.id === id);
    res.json(user)
}

function addUser(req,res){
    console.log(req.body)
    req.body.id = users.length + 1;
    users.push(req.body)
    fs.writeFile('users.js.json',JSON.stringify(users), (err)=>{
        if(err){
            console.log("error")
        }else{
            res.end("add successfully...")

        }
    })
    
}
module.exports = {
    getAllUsers,
    getParticularUser,
    addUser
}