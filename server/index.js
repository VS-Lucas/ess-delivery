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

//Rota Post do cadastro de restaurante
app.post('/register-restaurant', (req, res) => {
  console.log('POST restaurant');
  const data = req.body;
  admin.firestore()
    .collection('restaurantes')
    .add(data)
    .then(docRef => {
      const responseData = { id: docRef.id, ...data };
      res.json(responseData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao salvar restaurante');
    });
});



app.listen(3000, ()=>{
  console.log('Servidor ON em http://localhost:3000')
});

