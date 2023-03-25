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


// Rota Post do cadastro de login
let userId;
app.post('/register-login', (req, res) => {
  console.log('POST login');
  const data = req.body;
  admin.auth().createUser({
    email: data.email,
    password: data.senha
  })
  .then(userRecord => {
    userId = userRecord.uid;
    const responseData = { id: userRecord.uid, ...data };
    // Adicionar o campo "restauranteId" no documento do usuário
    admin.firestore()
      .collection('usuarios')
      .doc(userRecord.uid)
      .set({ restauranteId: null, ...data })
      .then(() => {
        res.json(responseData);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Erro ao salvar usuário');
      });
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Erro ao criar usuário');
  });
});


// Rota Post do cadastro de restaurante
app.post('/register-restaurant', (req, res) => {
  console.log('POST restaurant');
  const data = req.body;
  admin.firestore()
    .collection('restaurantes')
    .add(data)
    .then(docRef => {
      const responseData = { id: docRef.id, ...data };
      // Atualizar o documento do usuário com o ID do restaurante
      admin.firestore()
        .collection('usuarios')
        .doc(userId)
        .update({ restauranteId: docRef.id })
        .then(() => {
          res.json(responseData);
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao atualizar o usuário com o ID do restaurante');
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao salvar restaurante');
    });
});


// Rota GET da atualização de restaurante
app.get('/update-register', (req, res) => {
  console.log('GET update');
  //const token = req.headers.authorization.split(' ')[1];
  //const decodedToken = jwt.decode(token);
  //const userId = decodedToken.sub;
  const userId = "59breiPESGPgPXKfN79gVcKRuyt2";
  
  admin.firestore()
    .collection('usuarios')
    .doc(userId)
    .get()
    .then(doc => {
      const restauranteId = doc.data().restauranteId;

      admin.firestore()
        .collection('restaurantes')
        .doc(restauranteId)
        .get()
        .then(doc => {
          const restauranteData = doc.data();
          res.json(restauranteData);
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao buscar dados do restaurante');
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar ID do restaurante');
    });
});


// Rota PUT para atualizar os dados do restaurante
app.put('/update-register/:index', (req, res) => {
  console.log('PUT update');
  const data = req.body;
  const index = req.params.index;
  const userId = "59breiPESGPgPXKfN79gVcKRuyt2"; // Hardcoded para fins de teste

  admin.firestore()
    .collection('usuarios')
    .doc(userId)
    .get()
    .then(doc => {
      const restauranteId = doc.data().restauranteId;

      admin.firestore()
        .collection('restaurantes')
        .doc(restauranteId)
        .get()
        .then(doc => {
          const restauranteData = doc.data();
          // Atualiza os dados correspondentes ao índice recebido do cliente
          switch (index) {
            case '0':
              restauranteData.nome = data.nome;
              restauranteData.cpf = data.cpf;
              restauranteData.rg = data.rg;
              break;
            case '1':
              restauranteData.razao_social = data.razao_social;
              restauranteData.nome_loja = data.nome_loja;
              restauranteData.telefone = data.telefone;
              restauranteData.especialidade = data.especialidade;
              break;
            case '2':
              restauranteData.cep = data.cep;
              restauranteData.estado_uf = data.estado_uf;
              restauranteData.cidade = data.cidade;
              restauranteData.bairro = data.bairro;
              restauranteData.endereco = data.endereco;
              restauranteData.numero = data.numero;
              restauranteData.complemento = data.complemento;
              break;
            default:
              console.error('Índice inválido');
              res.status(400).send('Índice inválido');
              return;
          }

          // Salva os dados atualizados no Firebase
          admin.firestore()
            .collection('restaurantes')
            .doc(restauranteId)
            .update(restauranteData)
            .then(() => {
              res.json(restauranteData);
            })
            .catch(err => {
              console.error(err);
              res.status(500).send('Erro ao atualizar dados do restaurante');
            });
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao buscar dados do restaurante');
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar ID do restaurante');
    });
});




app.listen(3000, ()=>{
  console.log('Servidor ON em http://localhost:3000')
});

