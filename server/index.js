import express from 'express';
import admin from 'firebase-admin';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configuração firebase
admin.initializeApp({
  credential: admin.credential.cert("../firebaseConfig.json")
});


app.get('/', (req, res)=>{
    res.send('HELLO WORLD')
})


app.listen(3000, ()=>{
    console.log('Servidor ON em http://localhost:3000')
  });