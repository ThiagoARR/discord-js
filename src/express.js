const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require ("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root',
    database: 'discord'
});


app.get('/auth', (req,res) => {
    res.send({
        token: 'test123'
      });
})

app.get('/api/get', (req,res) => {
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

app.get('/api/get/canal/:id', (req, res) => {
    const idServer = req.params.id;
    const SQL = "Select * from canal where id_server = ?";
    db.query(SQL, idServer, (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
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
app.get('/api/get/consulta', (req,res) => {
    const SQL = "SELECT a.nm_pet, a.nm_tutor, a.nm_sobrenome_tutor, date_format(b.dt_consulta,'%d/%m/%Y') as dt_consulta, replace(left(date_format(b.dt_consulta, '%T'),5),':','h') as hr_consulta FROM pet as a INNER JOIN consulta as b ON b.id_pet = a.id_pet where b.fl_consulta_finalizada = 0";
    db.query(SQL, (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Server Running on port 3001")
});