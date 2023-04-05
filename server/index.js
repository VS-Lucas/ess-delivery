import express from 'express';
import admin from 'firebase-admin';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

let client_id = '';
let restaurant_id = '';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configuração firebase
admin.initializeApp({
  credential: admin.credential.cert("../firebaseConfig.json")
});


// Rota POST do cadastro de login
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


// Rota POST que verifica a existência no DB dos dados do cadastro de restaurante
app.post('/verify-data', (req, res) => {
  console.log('POST verify');
  const data = req.body;
  //const restaurantId = "toUh4qu8nbLCJatawak7";

  admin.firestore()
  .collection('restaurantes')
  .where('razao_social', '==', data.razao_social)
  .get()
  .then(rzSnapshot => {
      admin.firestore()
      .collection('restaurantes')
      .where('nome_loja', '==', data.nome_loja)
      .get()
      .then(nomeSnapshot => {
        admin.firestore()
        .collection('restaurantes')
        .where('telefone', '==', data.telefone)
        .get()
        .then(telSnapshot => {
          admin.firestore()
          .collection('restaurantes')
          .where('cnpj', '==', data.cnpj)
          .get()
          .then(cnpjSnapshot => {
            if (!rzSnapshot.empty && telSnapshot.empty && nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Razão social já cadastrado');
            } else if (rzSnapshot.empty && !telSnapshot.empty && nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Telefone já cadastrado');
            } else if (rzSnapshot.empty && telSnapshot.empty && !nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Nome da loja já cadastrado');
            } else if (rzSnapshot.empty && telSnapshot.empty && nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('CNPJ já cadastrado');
            } else if (!rzSnapshot.empty && !telSnapshot.empty && nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Razão social e telefone já cadastrado');
            } else if (!rzSnapshot.empty && telSnapshot.empty && !nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Razão social e nome da loja já cadastrado');
            } else if (!rzSnapshot.empty && telSnapshot.empty && nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('Razão social e CNPJ já cadastrado');
            } else if (rzSnapshot.empty && !telSnapshot.empty && !nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Nome da loja e telefone já cadastrado');
            } else if (rzSnapshot.empty && telSnapshot.empty && !nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('Nome da loja e CNPJ já cadastrado');
            } else if (rzSnapshot.empty && !telSnapshot.empty && nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('Telefone e CNPJ já cadastrado');
            } else if (!rzSnapshot.empty && !telSnapshot.empty && !nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Razão social, nome da loja e telefone já cadastrado');
            } else if (!rzSnapshot.empty && telSnapshot.empty && !nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('Razão social, nome da loja e CNPJ já cadastrado');
            } else if (!rzSnapshot.empty && !telSnapshot.empty && nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('Razão social, telefone e CNPJ já cadastrado');
            } else if (rzSnapshot.empty && !telSnapshot.empty && !nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('Nome da loja, telefone e CNPJ já cadastrado');
            } else if (!rzSnapshot.empty && !telSnapshot.empty && !nomeSnapshot.empty && !cnpjSnapshot.empty) {
              res.status(200).send('Razão social, nome da loja, telefone e CNPJ existem');
            } else if (rzSnapshot.empty && telSnapshot.empty && nomeSnapshot.empty && cnpjSnapshot.empty) {
              res.status(200).send('Razão social, nome da loja, telefone e CNPJ não existem');
            }

          })
          .catch(error => {
            console.error(error);
            res.status(500).send('Erro ao verificar o CNPJ no Firestore');
          });
        })
        .catch(error => {
          console.error(error);
          res.status(500).send('Erro ao verificar o telefone no Firestore');
        });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Erro ao verificar o nome da loja no Firestore');
      });
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Erro ao verificar razão social no Firestore');
  });
});


// Rota POST do cadastro de restaurante
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
app.get('/update-register', (_req, res) => {
  console.log('GET update');
  //const token = req.headers.authorization.split(' ')[1];
  //const decodedToken = jwt.decode(token);
  //const userId = decodedToken.sub;
  const userId = "gEMFXSSkCLb9o3qYNpS2F9eANlx1";
  
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

// Rota POST para autenticação de login de usuário
app.post("/restaurant-login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca o usuário pelo email
    const userRecord = await admin.auth().getUserByEmail(email);

    // Verifica a senha
    const userDoc = await admin.firestore()
                               .collection('usuarios')
                               .doc(userRecord.uid)
                               .get();
    
    restaurant_id = userRecord.uid;

    if (userDoc.data().password == password) {
      const token = await admin.auth().createCustomToken(userRecord.uid);
      res.status(200).json({ token });
    } else {
      res.status(401).send("Senha incorreta");
    }
  } catch (error) {
    res.status(404).send("Usuário não encontrado");
  }
});

// Rota para a recuperação de senha
app.post("/password-recovery", async (req, res) =>{
  const email = req.body.email;
  
  try{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const userRecord = await admin.auth().getUserByEmail(email);

    if (email == userRecord.email) {
      console.log('ACHOU');
      
      const userRef = admin.firestore().collection('usuarios').doc(userRecord.uid);
      await userRef.update({
        password: result
      });
      
      res.json({found: true, password: result});
    }
  }
  catch(error){
      console.log('NÃO ACHOU')
      res.json({found: false});   
  }
});


// Rota PUT para atualizar os dados do restaurante
app.put('/update-register/:index', (req, res) => {
  console.log('PUT update');
  const data = req.body;
  const index = req.params.index;
  const userId = "gEMFXSSkCLb9o3qYNpS2F9eANlx1"; // Hardcoded para fins de teste

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


// Rota POST que verifica a existência no DB dos dados da atualização do restaurante
app.post('/verify-data/:index', (req, res) => {
  console.log('POST verify');
  const data = req.body;
  const index = req.params.index;
  const restaurantId = "toUh4qu8nbLCJatawak7";

  switch (index) {  
    case '1':
      admin.firestore()
      .collection('restaurantes')
      .where('razao_social', '==', data.razao_social)
      .where('__name__', '!=', restaurantId)
      .get()
      .then(rzSnapshot => {
          admin.firestore()
          .collection('restaurantes')
          .where('nome_loja', '==', data.nome_loja)
          .where('__name__', '!=', restaurantId)
          .get()
          .then(nomeSnapshot => {
            admin.firestore()
            .collection('restaurantes')
            .where('telefone', '==', data.telefone)
            .where('__name__', '!=', restaurantId)
            .get()
            .then(telSnapshot => {
              if (!rzSnapshot.empty && telSnapshot.empty && nomeSnapshot.empty) {
                res.status(200).send('Razão social já cadastrado');
              } else if (rzSnapshot.empty && !telSnapshot.empty && nomeSnapshot.empty) {
                res.status(200).send('Telefone já cadastrado');
              } else if (rzSnapshot.empty && telSnapshot.empty && !nomeSnapshot.empty) {
                res.status(200).send('Nome da loja já cadastrado');
              } else if (!rzSnapshot.empty && !telSnapshot.empty && nomeSnapshot.empty) {
                res.status(200).send('Razão social e telefone já cadastrado');
              } else if (!rzSnapshot.empty && telSnapshot.empty && !nomeSnapshot.empty) {
                res.status(200).send('Razão social e nome da loja já cadastrado');
              } else if (rzSnapshot.empty && !telSnapshot.empty && !nomeSnapshot.empty) {
                res.status(200).send('Nome da loja e telefone já cadastrado');
              } else if (!rzSnapshot.empty && !telSnapshot.empty && !nomeSnapshot.empty) {
                res.status(200).send('Razão social, nome da loja e telefone já cadastrado');
              } else if (rzSnapshot.empty && telSnapshot.empty && nomeSnapshot.empty) {
                res.status(200).send('Razão social, nome da loja e telefone não existem');
              }
            })
            .catch(error => {
              console.error(error);
              res.status(500).send('Erro ao verificar o telefone no Firestore');
            });
          })
          .catch(error => {
            console.error(error);
            res.status(500).send('Erro ao verificar o nome da loja no Firestore');
          });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Erro ao verificar razão social no Firestore');
      });
  }
});

// Rota DELETE do descadastramento de restaurante
app.delete('/unsubscribe', (_req, res) => {
  const userId = "5oh6OyShcgPcmJOIXwFY0ZuGLp62";
  const restaurantId = "cuXhRcfk0rPq5rucfVBn";

  admin.auth().deleteUser(userId)
    .then(() => {
      console.log(`(auth)Usuário excluído com sucesso.`);
      admin.firestore().collection('restaurantes').doc(restaurantId).delete()
        .then(() => {
          console.log(`Restaurante excluído com sucesso.`);
          admin.firestore().collection('usuarios').doc(userId).delete()
            .then(() => {
              console.log(`Usuário excluído com sucesso.`);
              res.send('Exclusão realizada com sucesso.');
            })
            .catch((error) => {
              console.error(`Erro ao excluir usuário: ${error}`);
              res.status(500).send('Erro ao excluir usuário.');
            });
        })
        .catch((error) => {
          console.error(`Erro ao excluir restaurante: ${error}`);
          res.status(500).send('Erro ao excluir restaurante.');
        });
    })
    .catch((error) => {
      console.error(`(auth)Erro ao excluir usuário: ${error}`);
      res.status(500).send('(auth)Erro ao excluir usuário.');
    });

});

// Rota GET do endereço
app.get('/checkout', async(req, res) =>{
  const clientesRef = admin.firestore().collection('cliente');
  const clientesSnapshot = await clientesRef.get();
  const clientesArray = clientesSnapshot.docs;
  const clienteAleatorio = clientesArray[Math.floor(Math.random() * clientesArray.length)];
  const jsonVar = {rua: clienteAleatorio.data().rua, bairro: clienteAleatorio.data().bairro,
                  numero: clienteAleatorio.data().numero, cep: clienteAleatorio.data().cep, 
                  complemento: clienteAleatorio.data().complemento}
  res.json(jsonVar);
});

app.get('/client-login', async (_req, _res) => {
  var collections = []
  await admin.firestore().collection('cliente').get()
  .then(async (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      collections.push(doc.id);
    });
  });

  var id = collections[Math.floor(Math.random() * collections.length)];
  client_id = id;
  await admin.firestore().collection('cliente').doc(client_id)
  .get()
  .then(async (doc) => {
      const name = doc.data().nome
      _res.send(name);
  }).catch(_err => {
    _res.status(500).send("Erro ao adquirir usuário");
  });

});

app.get('/get-orders', async (_req, _res) => {
  
  await admin.firestore().collection('cliente').doc(client_id)
  .get()
  .then( async (doc) => {
    _res.send(doc.data().pedidos);
  }).catch(() => {
    _res.status(500).send("Não foi possível acessar os pedidos no momento")
  });
}); 

app.listen(3000, () => {
  console.log('Servidor ON em http://localhost:3000')
});

// Não apagar por enquanto!!!
//Get para pegar as informações dos pratos 
// app.get('/clienthome', (req, res) => {
//   const restauranteId  = 'oY1WhoFFdW2UUWrgADAY';
//   admin.firestore()
//     .collection('restaurantes')
//     .doc(restauranteId)
//     .get()
//     .then(doc => {
//       const restauranteData = doc.data();
//       const pratos = restauranteData.pratos;
//       res.json(pratos);
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send('Erro ao buscar dados do restaurante');
//     });
// });


//Get para pegar as informações dos pratos
app.get('/clienthome', (req, res) => {
  // Lista de IDs de restaurantes
  const restaurantesIds = ['oY1WhoFFdW2UUWrgADAY', 'zS5ju80BSoQcStMG6a4b', 'Cjq4SAjtFaa94WSN7UJ8'];

  // Embaralhar a lista de IDs
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const restaurantesIdsEmbaralhados = shuffle(restaurantesIds);

  // Pegar os dois primeiros IDs 
  const idsAleatorios = restaurantesIdsEmbaralhados.slice(0, 2);

// Utiliza os dois IDs
  admin.firestore()
    .collection('restaurantes')
    .doc(idsAleatorios[0])
    .get()
    .then(doc1 => {
      const restauranteData1 = doc1.data();
      const pratos1 = restauranteData1.pratos;
      admin.firestore()
        .collection('restaurantes')
        .doc(idsAleatorios[1])
        .get()
        .then(doc2 => {
          const restauranteData2 = doc2.data();
          const pratos2 = restauranteData2.pratos;
          const pratosAleatorios = shuffle(pratos1.concat(pratos2)).slice(0, 4); // Pegar aleatoriamente 4 pratos
          res.json(pratosAleatorios);
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao buscar dados do restaurante');
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do restaurante');
    });

});

// Rota POST para adicionar itens no carrinho do usuário
app.post('/clienthome', (req, res) => {
  console.log("cliente on");
  const clienteId = 'DI9BrQB5dFk0UgVES1XP'; // ID do cliente
  const novoPrato = req.body; // Dados do novo prato a ser adicionado
  
  admin.firestore().collection('cliente').doc(clienteId).get()
    .then(clienteDoc => {
      if (!clienteDoc.exists) {
        res.status(404).send('Cliente não encontrado');
      } else {
        // Adicionar o prato ao array de carrinho
        const carrinho = clienteDoc.data().carrinho || [];
        carrinho.push(novoPrato);

        // Atualizar o cliente com o novo array de carrinho
        admin.firestore().collection('cliente').doc(clienteId)
          .update({ carrinho })
          .then(() => {
            res.json({ message: 'Prato adicionado ao carrinho com sucesso' });
          })
          .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao atualizar carrinho do cliente');
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao obter cliente');
    });
});


