const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require ("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'127.0.0.1',
    port: '3306',
    password:'root',
    database: 'discord'
});

app.use(session({
    secret: "2C44-4D44-WppQ38S",
    resave: false,
    saveUninitialized: false
}));


app.get('/auth', (req,res) => {
    res.send({
        token: 'test123'
      });
})

app.get('/api/get', (req,res) => {
    const SQL = "SELECT id, name FROM servers ";
    db.query(SQL, (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
})

app.get('/api/get/canalText/:idServer', (req, res) => {
    const idServer = req.params.idServer;
    const SQL = "Select * from channels where servers_id = ? and channel_type_id = '1' ";
    db.query(SQL, idServer, (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get/canalVoice/:idServer', (req, res) => {
    const idServer = req.params.idServer;
    const SQL = "Select * from channels where servers_id = ? and channel_type_id = '2' ";
    db.query(SQL, idServer,  (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get/chat/:idCanal', (req, res) => {
    const idCanal = req.params.idCanal;
    const SQL = "Select b.login, a.content, DATE_FORMAT(a.created_at,'%d/%m/%Y') AS created_at from messages a join users b on a.users_id = b.id where channels_id = ? ";
    db.query(SQL, idCanal,  (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get/serverName/:idServer', (req, res) => {
    const idServer = req.params.idServer;
    const SQL = "Select name from servers where id = ? ";
    db.query(SQL, idServer,  (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get/server_roles/:idServer', (req, res) => {
    const idServer = req.params.idServer;
    const SQL = "Select a.name from roles a join servers b on a.servers_id=b.id where a.servers_id = ? ";
    db.query(SQL, idServer,  (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get/server_users/:idServer', (req, res) => {
    const idServer = req.params.idServer;
    const SQL = "Select c.name from servers_has_users a join servers b on a.servers_id=b.id join users c on a.users_id=c.id where a.servers_id = ? ";
    db.query(SQL, idServer,  (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get('/api/get/chatName/:idCanal', (req, res) => {
    const idCanal = req.params.idCanal;
    const SQL = "Select name from channels where id = ? ";
    db.query(SQL, idCanal,  (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.post('/api/post/register', (req, res) => {
    const name = req.body.name;
    const surname = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const address = req.body.address;
    const email = req.body.email;

    console.log(name, surname, username, password, email, address);

    const pass = generatedHash(password);

    const SQL = "INSERT INTO users (name, surname, login, password, address, email, created_at, edited_at, deleted_at) values (?, ?, ?, ?, ?, ?, now(), null, null); ";
    db.query(SQL, [name, surname, username, pass, address, email], 
        (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

function generatedHash(password){
    const salt = 10;
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function compareHash(password, hash){
    return bcrypt.compareSync(password, hash);
}


app.post('/api/post/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const SQL = "SELECT * FROM users WHERE login = ? ";

    db.query(SQL, username,
        (err, result) => {
        if(err){
            console.log(err)
            res.send({err:err});
        }

        console.log(result[0].password);

        if (result.length > 0) {
            const compare = compareHash(password, result[0].password)
            if(compare) {
                req.session.user = result;
                console.log(req.session.user);
                res.send(result);
            }else{
                res.send({message: "Wrong username/password combination!"})
            }
        }else{
            res.send({message: "User doesn't exists"})
        }
    });
});


app.post('/api/post/channel', (req,res) => {
    const channelName = req.body.name;
    const channelServer = req.body.servers_id;
    const channelType = req.body.channel_type_id;
    const SQL = "INSERT INTO channels (name, created_at, edited_at, deleted_at, servers_id, channel_type_id, private) values (?, now(),null, null, ?, ?, 0); ";
    db.query(SQL, [channelName, channelServer, channelType], 
        (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

/* app.get('/api/get/canal/:id', (req,res) => {
    const SQL = "SELECT id, nm_server, ds_path FROM servers ";
    db.query(SQL, (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
})
 */
app.listen(3001, () => {
    console.log("Server Running on port 3001")
});