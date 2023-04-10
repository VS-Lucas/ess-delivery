import express from 'express';
import admin from 'firebase-admin';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

let client_id = '';
let client_name = '';
let id_rest = '';

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
let restaurantId
app.post('/register-restaurant', (req, res) => {
  console.log('POST restaurant');
  const data = req.body;
  admin.firestore()
    .collection('restaurantes')
    .add(data)
    .then(docRef => {
      restaurantId = docRef.id;
      const responseData = { id: docRef.id, ...data };
      // Atualizar o documento do usuário com o ID do restaurante
      admin.firestore()
        .collection('usuarios')
        .doc(userId)
        .update({ restauranteId: restaurantId })
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
    
    userId = userRecord.uid;

    if (userDoc.data().password == password) {
      const token = await admin.auth().createCustomToken(userRecord.uid);

      const restDoc = await admin.firestore()
                                 .collection('usuarios')
                                 .doc(userId)
                                 .get()
                                       
      restaurantId = restDoc.data().restauranteId;
      
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
            case '3':
              restauranteData.taxa = data.taxa;
              restauranteData.tempo_entrega = data.tempo_entrega;
              restauranteData.horario = data.horario;
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
app.delete('/unsubscribe', (req, res) => {

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
app.get('/address', async(req, res) =>{
  try{
    const clientesRef = await admin.firestore().collection('cliente').doc(client_id).get()

    const jsonVar = {rua: clientesRef.data().rua, bairro: clientesRef.data().bairro,
                    numero: clientesRef.data().numero, cep: clientesRef.data().cep, 
                    complemento: clientesRef.data().complemento}
    res.json(jsonVar);
  }
  catch(error){
    console.log(error)
  }
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
//  ROTA GET QUE RETORNA TODOS OS PEDIDOS
app.get('/get-orders', async (_req, _res) => {
  
  await admin.firestore().collection('cliente').doc(client_id)
  .get()
  .then( async (doc) => {
    
    _res.send({pedidos: doc.data().pedidos, nome: doc.data().nome});
  }).catch(() => {
    _res.status(500).send("Não foi possível acessar os pedidos no momento")
  });
});


app.post('/cancel-customer-order', async (_req, _res) => {
  const id = _req.body.id;
  

  admin.firestore().collection('cliente').doc(client_id).get()
  .then(clienteDoc => {
      const pedidos = clienteDoc.data().pedidos;
      
      pedidos[id]['status'] = 'Cancelado';
      admin.firestore().collection('cliente').doc(client_id)
        .update({ pedidos })
        .then(() => {
          _res.json({ message: 'Cancelamento foi feito com sucesso!' });
        })
        .catch(err => {
          console.error(err);
          _res.status(500).send('Erro a fazer o cancelamento do pedido!!');
        });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao obter cliente');
  });
});


app.post('/cancel-restaurant-order', async (_req, _res) => {
  const id = _req.body.id;
  const name = _req.body.name;
  const justification = _req.body.justification;
  const restaurant = _req.body.restaurant;
  const restaurants = {'Bode do Nô': 'DGoe9PEt7pEg6nRAgXYK',
                       'Ratão Burguer': 'EbKwC2ud8dRr5kzcrJwH'}

  const restaurant_id = restaurants[restaurant];

  admin.firestore().collection('restaurantes').doc(restaurant_id).get()
  .then(clienteDoc => {
      console.log(restaurant_id)
      console.log(name);
      const pedidos = clienteDoc.data().pedidos;
      console.log(pedidos);
      console.log(id);

      pedidos[name][id]['status'] = 'Cancelado';
      pedidos[name][id]['justification'] = justification;
      admin.firestore().collection('restaurantes').doc(restaurant_id)
        .update({ pedidos })
        .then(() => {
          _res.json({ message: 'Cancelamento foi feito com sucesso!' });
        })
        .catch(err => {
          console.error(err);
          _res.status(500).send('Erro a fazer o cancelamento do pedido!!');
        });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao obter cliente');
  });
});


app.get('/restaurant-orders', async (_req, _res) => {
  
  await admin.firestore().collection('restaurantes').doc('DGoe9PEt7pEg6nRAgXYK')
  .get()
  .then( async (doc) => {
    _res.send(doc.data().pedidos);
  }).catch(() => {
    _res.status(500).send("Não foi possível acessar os pedidos no momento")
  });
});

// Rota GET para mostrar os pratos no carrinho
app.get('/shoppingcart', async (req, res) => {
  await admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .get()
    .then(doc => {
      const carrinhoData = doc.data().carrinho;
      res.json(carrinhoData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do restaurante');
    });
});

// Rota DELETE para remover um item do carrinho do usuário
// app.delete('/shoppingcart/:itemNome', (req, res) => {
//   const itemNomee = req.params.itemNome; // Nome do item a ser removido
//   console.log(itemNomee);
//   admin.firestore()
//     .collection('cliente')
//     .doc(client_id)
//     .get()
//     .then(clienteDoc => {
//       if (!clienteDoc.exists) {
//         res.status(404).send('Cliente não encontrado');
//       } else {
//         console.log("AQUIIIIII");
//         // Remover o item do array de carrinho
//         const carrinho = clienteDoc.data().carrinho || [];
//         console.log("AQUIIIIII2");
//         let index = -1;
//         for (let i = 0; i < carrinho.length; i++) {
//           console.log(carrinho[i].nome);
//           console.log(itemNomee);
//           if (carrinho[i].nome === itemNomee) {
            
            
//             index = i;
//             break;
//           }
//         }
//         if (index !== -1) {
//           carrinho.splice(index, 1);
//         }
//         console.log("AQUIIIIII3");

//         // Atualizar o cliente com o novo array de carrinho
//         admin.firestore().collection('cliente').doc(client_id)
        
//           .update({ carrinho })
//           .then(() => {
//             res.json({ message: 'Item removido do carrinho com sucesso' });
//             console.log("AQUIIIIII4");
//           })
//           .catch(err => {
//             console.error(err);
//             res.status(500).send('Erro ao atualizar carrinho do cliente');
//           });
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send('Erro ao obter cliente');
//     });
// });

//Rota DELETE para remover item do carrinho de um cliente
// app.delete('/shoppingcart/:itemId', (req, res) => {
//   const item = req.params.itemId;
//   console.log(item);
//   admin.firestore().collection('cliente').doc(client_id).update({
//     carrinho: admin.firestore.FieldValue.arrayRemove(({ descricao: item.descricao, nome: item.nome, preco: item.preco, url: item.url }))
//   })
//   .then(() => {
//     console.log(`Item ${item} removido com sucesso do carrinho do cliente ${client_id}.`);
//     res.send(`Item ${item} removido com sucesso do carrinho do cliente ${client_id}.`);
//   })
//   .catch((error) => {
//     console.error(`Erro ao remover item ${item} do carrinho do cliente ${client_id}: ${error}`);
//     res.status(500).send(`Erro ao remover item ${item} do carrinho do cliente ${client_id}.`);
//   });
// });

//Rota DELETE para remover item do carrinho de um cliente
app.delete('/shoppingcart', (req, res) => {
  const nomePrato = req.body.nome;
  //console.log(nomePrato);

  admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .get()
    .then(clienteDoc => {
      if (!clienteDoc.exists) {
        res.status(404).send('Cliente não encontrado');
      } else {

        // Remover o item do array de carrinho
        const carrinho = clienteDoc.data().carrinho || [];
        let index = -1;
        for (let i = 0; i < carrinho.length; i++) {
          console.log(carrinho[i].nome);
          console.log(nomePrato);
          if (carrinho[i].nome === nomePrato) {
            index = i;
            break;
          }
        }
        if (index !== -1) {
          carrinho.splice(index, 1);
        }

        // Atualizar o cliente com o novo array de carrinho
        admin.firestore().collection('cliente').doc(client_id)
          .update({ carrinho })
          .then(() => {
            res.json({ message: 'Item removido do carrinho com sucesso' });
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

app.put('/shoppingcart1', async (req, res) => {
  console.log('PUT update');
  const data = req.body;
  const index = data.index;
  console.log(index);
  //if(index == 0)

  admin.firestore()
  .collection('cliente')
  .doc(client_id)
  .get()
  .then(doc => {
    const carrinhoData = doc.data().carrinho;
    const amount = carrinhoData[index].quantidade;
    console.log(carrinhoData[index].quantidade);
    const new_amount = amount + 1;
    carrinhoData[index].quantidade = new_amount;

    admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .update({carrinho: carrinhoData})
    .then(() => {
      res.json(carrinhoData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao atualizar dados do carrinho');
    });
  })
});

app.put('/shoppingcart2', async (req, res) => {
  console.log('PUT update');
  const data = req.body;
  const index = data.index;
  console.log(index);
  //if(index == 0)

  admin.firestore()
  .collection('cliente')
  .doc(client_id)
  .get()
  .then(doc => {
    const carrinhoData = doc.data().carrinho;
    const amount = carrinhoData[index].quantidade;
    console.log(carrinhoData[index].quantidade);
    const new_amount = amount - 1;
    carrinhoData[index].quantidade = new_amount;

    admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .update({carrinho: carrinhoData})
    .then(() => {
      res.json(carrinhoData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao atualizar dados do carrinho');
    });
  })
});

//Get para pegar as informações dos pratos do 1 restaurante 
app.get('/clienthome_first_restaurant', (req, res) => {
 const restauranteId  = 'hm0n3mzMyFMh2JAb9YQb';
//  DGoe9PEt7pEg6nRAgXYK
  admin.firestore()
    .collection('restaurantes')
    .doc(restauranteId)
    .get()
    .then(doc => {
      const restauranteData = doc.data();
      const pratos = restauranteData.pratos;
      res.json(pratos);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do restaurante');
    });
});

//Get para pegar as informações dos pratos do 2 restaurante
app.get('/clienthome_second_restaurant', (req, res) => {
  const restauranteId  = 'L9fhnBFA2DkVxHUIDjPr';
  // L9fhnBFA2DkVxHUIDjPr
  // const restauranteId  = 'DGoe9PEt7pEg6nRAgXYK';
  admin.firestore()
    .collection('restaurantes')
    .doc(restauranteId)
    .get()
    .then(doc => {
      const restauranteData = doc.data();
      const pratos = restauranteData.pratos;
      res.json(pratos);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do restaurante');
    });
});

app.get('/clienthome1', async (req, res) => {
  await admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .get()
    .then(doc => {
      const carrinhoData = doc.data().carrinho;
      res.json(carrinhoData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do restaurante');
    });
});
// Não apagar por enquanto!!!
//Get para pegar as informações dos pratos
// app.get('/clienthome', (req, res) => {
//   // Lista de IDs de restaurantes
//   const restaurantesIds = ['oY1WhoFFdW2UUWrgADAY', 'zS5ju80BSoQcStMG6a4b', 'Cjq4SAjtFaa94WSN7UJ8'];

//   // Embaralhar a lista de IDs
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
//   const restaurantesIdsEmbaralhados = shuffle(restaurantesIds);

//   // Pegar os dois primeiros IDs 
//   const idsAleatorios = restaurantesIdsEmbaralhados.slice(0, 2);

// // Utiliza os dois IDs
//   admin.firestore()
//     .collection('restaurantes')
//     .doc(idsAleatorios[0])
//     .get()
//     .then(doc1 => {
//       const restauranteData1 = doc1.data();
//       const pratos1 = restauranteData1.pratos;
//       admin.firestore()
//         .collection('restaurantes')
//         .doc(idsAleatorios[1])
//         .get()
//         .then(doc2 => {
//           const restauranteData2 = doc2.data();
//           const pratos2 = restauranteData2.pratos;
//           const pratosAleatorios = shuffle(pratos1.concat(pratos2)).slice(0, 4); // Pegar aleatoriamente 4 pratos
//           res.json(pratosAleatorios);
//         })
//         .catch(err => {
//           console.error(err);
//           res.status(500).send('Erro ao buscar dados do restaurante');
//         });
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send('Erro ao buscar dados do restaurante');
//     });

// });
app.post('/add-to-cart', (_req, _res) => {
  const new_dishes = _req.body;

  admin.firestore().collection('cliente').doc(client_id).get()
  .then(clienteDoc => {
      // Adicionar o prato ao array de carrinho
      const cart = clienteDoc.data().carrinho || [];
      
      new_dishes.forEach(obj => {
        cart.push(obj);
      });

      // Atualizar o cliente com o novo array de carrinho
      admin.firestore().collection('cliente').doc(client_id)
        .update({ carrinho: cart })
        .then(() => {
          _res.json({ message: 'Prato adicionado ao carrinho com sucesso' });
        })
        .catch(err => {
          console.error(err);
          _res.status(500).send('Erro ao atualizar carrinho do cliente');
        });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao obter cliente');
  });

});
// Rota POST para adicionar itens no carrinho do usuário
app.post('/clienthome', (req, res) => {
  console.log("cliente on");
  // const clienteId = 'DI9BrQB5dFk0UgVES1XP'; // ID do cliente
  const novoPrato = req.body; // Dados do novo prato a ser adicionado
  
  admin.firestore().collection('cliente').doc(client_id).get()
    .then(clienteDoc => {
      if (!clienteDoc.exists) {
        res.status(404).send('Cliente não encontrado');
      } else {
        console.log(novoPrato)
        // Adicionar o prato ao array de carrinho
        const carrinho = clienteDoc.data().carrinho || [];
        carrinho.push(novoPrato);

        // Atualizar o cliente com o novo array de carrinho
        admin.firestore().collection('cliente').doc(client_id)
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

// app.put("/clienthome2", async (req, res) =>{
//   const data = req.body;
//   const placement = req.params.placement;
//   admin.firestore()
//        .collection('cliente')
//        .doc(client_id)
//        .update({ carrinho[placement].: })
//   .then(() => {
//     res.json({ message: 'Carrinho limpo com sucesso' });
//   })
//   .catch(err => {
//     console.error(err);
//     res.status(500).send('Erro ao adicionar ao limpar carrinho');
//   }); 
// });
app.put('/clienthome2', async (req, res) => {
  console.log('PUT update');
  const data = req.body;
  const index = data.index;
  console.log(index);
  //if(index == 0)

  admin.firestore()
  .collection('cliente')
  .doc(client_id)
  .get()
  .then(doc => {
    const carrinhoData = doc.data().carrinho;
    const amount = carrinhoData[index].quantidade;
    console.log(carrinhoData[index].quantidade);
    const new_amount = amount + 1;
    carrinhoData[index].quantidade = new_amount;

    admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .update({carrinho: carrinhoData})
    .then(() => {
      res.json(carrinhoData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao atualizar dados do carrinho');
    });

  })

  
  
  // admin.firestore()
  //   .collection('cliente')
  //   .doc(client_id)
  //   .get()
  //   .then(doc => {
  //     const carrinhoData = doc.data().carrinho;
  //     carrinhoData[index].quantidade = quantidade + 1;

  //         // Salva os dados atualizados no Firebase
  //         admin.firestore()
  //           .collection('cliente')
  //           .doc(client_id)
  //           .update(carrinhoData)
  //           .then(() => {
  //             res.json(carrinhoData);
  //           })
  //           .catch(err => {
  //             console.error(err);
  //             res.status(500).send('Erro ao atualizar dados do carrinho');
  //           });
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     res.status(500).send('Erro ao buscar ID do restaurante');
  //   });
});

// Rota GET da quantidade de pedidos
app.get('/orders', async(req, res) =>{
  try{
    const doc = await admin.firestore().collection('cliente').doc(client_id).get();
    client_name = doc.data().nome;
    
    const data = doc.data();
    const orders = Object.keys(data.pedidos);
    const ordersAmount = orders.length;

    res.json({amount: ordersAmount})
  }
  catch(error){
    console.log(error)
  }
});

// Rota GET do nome do cliente
app.get('/clientname', async(req, res) =>{
  try{
    const doc = await admin.firestore().collection('cliente').doc(client_id).get();
    const nome = doc.data().nome

    res.json({nome: nome})
  }
  catch(error){
    console.log(error)
  }
});

// Rota POST para salvar o(s) pedido(s) do cliente
app.post("/storeclientorder", async (req, res) =>{

  const orderData = req.body.orderData;
  const orderID = req.body.orderID;
  const auxOrderDate = req.body.orderDate;
  const orderDate = auxOrderDate.replace(',', '');
  const orderTime = req.body.orderTime;
  const orderFee = req.body.orderFee;
  const eTime = req.body.eTime;

  await admin.firestore().collection('cliente').doc(client_id).get()
  .then(async (clienteDoc) => {
    if (!clienteDoc.exists) {
      res.status(404).send('Cliente não encontrado');
    } else {

      const pedidos = clienteDoc.data().pedidos || {};
      pedidos[orderID] = {'pratos': orderData, 'status': 'Pagamento', 'data': orderDate, 'hora': orderTime,
                          'taxa': orderFee, 'tempo_estimado': eTime}

      await admin.firestore().collection('cliente').doc(client_id)
        .update({ pedidos })
        .then(() => {
          res.json({ message: 'Pedido adicionado com sucesso' });
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao adicionar pedido');
        });
    }
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Erro ao obter cliente');
  });
});

// Rota POST para salvar a demanda do restaurante
app.post("/reststore", async (req, res) =>{

  const orderData = req.body.orderData;
  const orderID = req.body.orderID;
  const auxOrderDate = req.body.orderDate;
  const orderDate = auxOrderDate.replace(',', '');
  const orderTime = req.body.orderTime;
  const orderAddress = req.body.orderAddress;

  await admin.firestore().collection('restaurantes').doc(id_rest).get()
  .then(async (clienteDoc) => {
    if (!clienteDoc.exists) {
      res.status(404).send('Restaurante não encontrado');
    } else {

      const pedidos = clienteDoc.data().pedidos || {};
      if (!(client_name in pedidos)) {
        pedidos[client_name] = {};
      }
      if (!(orderID in pedidos[client_name])) {
        pedidos[client_name][orderID] = {'pratos': orderData, 'status': 'Pagamento', 'data': orderDate, 'hora': orderTime, 'endereço': orderAddress};
      }
      
      await admin.firestore().collection('restaurantes').doc(id_rest)
        .update({ pedidos })
        .then(() => {
          res.json({ message: 'Demanda adicionada com sucesso' });
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao adicionar pedido');
        });
    }
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Erro ao salvar pedido');
  });
});

// Rota PUT para limpar o carrinho
app.put("/clearcart", async (req, res) =>{

  admin.firestore()
       .collection('cliente')
       .doc(client_id)
       .update({ carrinho: [] })
  .then(() => {
    res.json({ message: 'Carrinho limpo com sucesso' });
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Erro ao adicionar ao limpar carrinho');
  }); 
});

// Rota PUT para limpar o array de cupons efetivados
app.put("/clearcoupons_used", async (req, res) =>{
  admin.firestore()
       .collection('cliente')
       .doc(client_id)
       .update({ cupons_efetivados: [] })
  .then(() => {
    res.json({ message: 'Array de cupons efetivados limpo com sucesso' });
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Erro ao limpar array de cupons efetivados');
  }); 
});

// Rota PUT para limpar o array de cupons efetivados
app.put("/clearcoupons_used", async (req, res) =>{
  admin.firestore()
       .collection('cliente')
       .doc(client_id)
       .update({ cupons_efetivados: [] })
  .then(() => {
    res.json({ message: 'Array de cupons efetivados limpo com sucesso' });
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Erro ao limpar array de cupons efetivados');
  }); 
});

// Rota POST do tempo estimado de entrega
app.post('/estimatedtime', async(req, res) =>{
  const res_name = req.body.resName
  const res_id = {'Ratão Burguer': 'EbKwC2ud8dRr5kzcrJwH', 
                  'Bode do Nô': 'DGoe9PEt7pEg6nRAgXYK'}
  id_rest = res_id[res_name];

  try{
    const doc = await admin.firestore().collection('restaurantes').doc(id_rest).get();
    const est_time = doc.data().tempo_entrega;
    const fee = doc.data().taxa;

    res.json({tempo_estimado: est_time, taxa: fee})
  }
  catch(error){
    console.log(error)
  }
});

// Rota POST para salvar no campo acompanhamento
app.post("/storeorderfield", async (req, res) =>{

  const orderData = req.body.orderData;
  const orderID = req.body.orderID;
  const auxOrderDate = req.body.orderDate;
  const orderDate = auxOrderDate.replace(',', '');
  const orderTime = req.body.orderTime;
  const orderAddress = req.body.orderAddress;
  const orderPrice = req.body.orderPrice;
  const clientName = req.body.clientName;
  const orderFee = req.body.orderFee;
  const eTime = req.body.eTime;
  const resName = req.body.resName;
  const status = req.body.status;

  await admin.firestore().collection('cliente').doc(client_id).get()
  .then(async (clienteDoc) => {
    if (!clienteDoc.exists) {
      res.status(404).send('Cliente não encontrado');
    } else {

      const acompanhamento = clienteDoc.data().acompanhamento || {};
      acompanhamento[orderID] = {'pratos': orderData, 'restaurante': resName, 'status': status, 'data': orderDate, 'hora': orderTime,
                                  'preco': orderPrice, 'endereco': orderAddress, 'nome': clientName, 'taxa': orderFee, 
                                  'tempo_estimado': eTime}

      await admin.firestore().collection('cliente').doc(client_id) 
        .update({ acompanhamento })
        .then(() => {
          res.json({ message: 'Acompanhamento adicionado com sucesso' });
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao adicionar acompanhamento');
        });
    }
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Erro ao obter cliente');
  });
});

//Get para pegar os cupons disponíveis
app.get('/getcoupons_available', (req, res) => {
  admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .get()
    .then(doc => {
      const clientData = doc.data();
      const cupons = clientData.cupons;
      res.json(cupons);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do cliente');
    });
});

//Get para pegar os cupons efetivados
app.get('/getcoupons_used', (req, res) => {
  admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .get()
    .then(doc => {
      const clientData = doc.data();
      const cuponsEfetivados = clientData.cupons_efetivados;
      res.json(cuponsEfetivados);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do cliente');
    });
});

// Rota POST para adicionar itens no array de cupons efetivados
app.post('/getcoupons_used', (req, res) => {
  const cupom = req.body; // Dados do novo prato a ser adicionado
  
  admin.firestore().collection('cliente').doc(client_id).get()
    .then(clienteDoc => {
      if (!clienteDoc.exists) {
        res.status(404).send('Cliente não encontrado');
      } else {
        // Adicionar o cupom ao array de cupons efetivados
        const cupons_efetivados = clienteDoc.data().cupons_efetivados || [];
        cupons_efetivados.push(cupom);

        // Atualizar o cliente com o novo array de carrinho
        admin.firestore().collection('cliente').doc(client_id)
          .update({ cupons_efetivados })
          .then(() => {
            res.json({ message: 'Cupom efetivado' });
          })
          .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao efetivar cupom');
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao obter cliente');
    });
});




//Rota DELETE para remover cupom do array de cupons do cliente
app.delete('/getcoupons_available', (req, res) => {
  const nomeCupom = req.body.nome;
  //console.log(nomePrato);
  console.log("delete");
  console.log(nomeCupom);

  admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .get()
    .then(clienteDoc => {
      if (!clienteDoc.exists) {
        res.status(404).send('Cliente não encontrado');
      } else {

        // Remover o item do array de cupons
        const cupons = clienteDoc.data().cupons || [];
        let index = -1;
        for (let i = 0; i < cupons.length; i++) {
          console.log(cupons[i].nome);
          console.log(nomeCupom);
          if (cupons[i].nome === nomeCupom) {
            index = i;
            break;
          }
        }
        if (index !== -1) {
          cupons.splice(index, 1);
        }

        // Atualizar o cliente com o novo array de cupons
        admin.firestore().collection('cliente').doc(client_id)
          .update({ cupons })
          .then(() => {
            res.json({ message: 'Item removido do array de cupons com sucesso' });
          })
          .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao atualizar array de cupons do cliente');
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao obter cliente');
    });
});

// Rota GET para mostrar os pratos no checkout
// app.get('/checkout', async (req, res) => {
//   await admin.firestore()
//     .collection('cliente')
//     .doc(client_id)
//     .get()
//     .then(doc => {
//       const carrinhoData = doc.data().carrinho;
//       res.json(carrinhoData);
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send('Erro ao buscar dados dos pratos');
//     });
// });

// Rota POST para adicionar itens no array de cupons disponíveis
app.post('/addtocoupons_avaliable', (req, res) => {
  const cupom = req.body; // Dados do novo prato a ser adicionado
  
  admin.firestore().collection('cliente').doc(client_id).get()
    .then(clienteDoc => {
      if (!clienteDoc.exists) {
        res.status(404).send('Cliente não encontrado');
      } else {
        // Adicionar o cupom ao array de cupons efetivados
        const cupons = clienteDoc.data().cupons || [];
        cupons.push(cupom);

        // Atualizar o cliente com o novo array de carrinho
        admin.firestore().collection('cliente').doc(client_id)
          .update({cupons})
          .then(() => {
            res.json({ message: 'Cupom efetivado' });
          })
          .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao efetivar cupom');
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao obter cliente');
    });
});

//Rota DELETE para remover cupom do array de cupons efetivados do cliente
app.delete('/removecoupons_used', (req, res) => {
  const nomeCupom = req.body.nome;
  //console.log(nomePrato);
  console.log("delete");
  console.log(nomeCupom);

  admin.firestore()
    .collection('cliente')
    .doc(client_id)
    .get()
    .then(clienteDoc => {
      if (!clienteDoc.exists) {
        res.status(404).send('Cliente não encontrado');
      } else {

        // Remover o item do array de cupons efetivados
        const cupons_efetivados = clienteDoc.data().cupons_efetivados || [];
        let index = -1;
        for (let i = 0; i < cupons_efetivados.length; i++) {
          console.log(cupons_efetivados[i].nome);
          console.log(nomeCupom);
          if (cupons_efetivados[i].nome === nomeCupom) {
            index = i;
            break;
          }
        }
        if (index !== -1) {
          cupons_efetivados.splice(index, 1);
        }

        // Atualizar o cliente com o novo array de cupons efetivados
        admin.firestore().collection('cliente').doc(client_id)
          .update({ cupons_efetivados })
          .then(() => {
            res.json({ message: 'Item removido do array de cupons com sucesso' });
          })
          .catch(err => {
            console.error(err);
            res.status(500).send('Erro ao atualizar array de cupons do cliente');
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao obter cliente');
    });
});

// Rota de Finalização do Pedido para trocar Status(Em preparo -> A caminho)
app.post('/finish-order', async (_req, _res) => {
  const id = _req.body.id;
  const name = _req.body.name;


  admin.firestore().collection('restaurantes').doc('DGoe9PEt7pEg6nRAgXYK').get()
  .then(clienteDoc => {
      const pedidos = clienteDoc.data().pedidos;
      // console.log(pedidos)
      //Mudando status
      pedidos[name][id]['status'] = 'A caminho';
      // console.log(pedidos[name][id]['status'])

      admin.firestore().collection('restaurantes').doc('DGoe9PEt7pEg6nRAgXYK')
        .update({ pedidos })
        .then(() => {
          _res.json({ message: 'Pedido conluído com sucesso!' });
        })
        .catch(err => {
          console.error(err);
          _res.status(500).send('Erro ao concluir pedido!!');
        });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao obter cliente');
  });
});

//Rota de Notificar Cliente que o pedido está A Caminho
app.post('/notify-finish-order', async (_req, _res) => {
  const id = _req.body.id;

  admin.firestore().collection('cliente').doc(client_id).get()
  .then(clienteDoc => {
      const pedidos = clienteDoc.data().pedidos;
      
      pedidos[id]['status'] = 'A caminho';

      admin.firestore().collection('cliente').doc(client_id)
        .update({ pedidos })
        .then(() => {
          _res.json({ message: 'O seu pedido está a caminho' });
        })
        .catch(err => {
          console.error(err);
          _res.status(500).send('Seu pedido não pode ser concluído');
        });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao obter cliente');
  });
});


app.get('/get-tracking', async (_req, _res) => {
  await admin.firestore().collection('cliente').doc(client_id).get()
  .then((doc) => {
      const order = doc.data().acompanhamento;
      _res.json(order);
  }).catch((error) => {
    console.error(error);
  });
});


app.put('/clear-tracking', async (_req, _res) => {
  await admin.firestore()
       .collection('cliente')
       .doc(client_id)
       .update({ acompanhamento: {} })
  .then(() => {
    _res.json({ message: 'Acompanhamento Limpor' });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao limpar o acompanhamento');
  }); 
})

// Rota de Finalização do Pedido para trocar Status(Em preparo -> A caminho)
app.post('/finish-order', async (_req, _res) => {
  const id = _req.body.id;
  const name = _req.body.name;

  
  admin.firestore().collection('restaurantes').doc('DGoe9PEt7pEg6nRAgXYK').get()
  .then(clienteDoc => {
      const pedidos = clienteDoc.data().pedidos;
      // console.log(pedidos)
      //Mudando status
      pedidos[name][id]['status'] = 'A caminho';
      // console.log(pedidos[name][id]['status'])

      admin.firestore().collection('restaurantes').doc('DGoe9PEt7pEg6nRAgXYK')
        .update({ pedidos })
        .then(() => {
          _res.json({ message: 'Pedido conluído com sucesso!' });
        })
        .catch(err => {
          console.error(err);
          _res.status(500).send('Erro ao concluir pedido!!');
        });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao obter cliente');
  });
});

//Rota de Notificar Cliente que o pedido está A Caminho
app.post('/notify-finish-order', async (_req, _res) => {
  const id = _req.body.id;

  admin.firestore().collection('cliente').doc(client_id).get()
  .then(clienteDoc => {
      const pedidos = clienteDoc.data().pedidos;
      
      pedidos[id]['status'] = 'A caminho';

      admin.firestore().collection('cliente').doc(client_id)
        .update({ pedidos })
        .then(() => {
          _res.json({ message: 'O seu pedido está a caminho' });
        })
        .catch(err => {
          console.error(err);
          _res.status(500).send('Seu pedido não pode ser concluído');
        });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao obter cliente');
  });
});


app.get('/get-tracking', async (_req, _res) => {
  await admin.firestore().collection('cliente').doc(client_id).get()
  .then((doc) => {
      const order = doc.data().acompanhamento;
      _res.json(order);
  }).catch((error) => {
    console.error(error);
  });
});


app.put('/clear-tracking', async (_req, _res) => {
  await admin.firestore()
       .collection('cliente')
       .doc(client_id)
       .update({ acompanhamento: {} })
  .then(() => {
    _res.json({ message: 'Acompanhamento Limpor' });
  })
  .catch(err => {
    console.error(err);
    _res.status(500).send('Erro ao limpar o acompanhamento');
  }); 
});


app.get('/get-name', async (_req, _res) => {
  await admin.firestore().collection('cliente').doc(client_id).get()
  .then((doc) => {
      const name = doc.data().nome;
      _res.json(name);
  }).catch((error) => {
    console.error(error);
  });
})


// Rota GET para mostrar os restaurantes
// app.get('/restaurants-list', async (req, res) => {
//   await admin.firestore()
//     .collection('restaurantes')
//     .get()
//     .then(doc => {
//       const restaurantData = doc.data();
//       res.json(restaurantData);
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send('Erro ao buscar dados do restaurante');
//     });
// });

app.get('/restaurants-list', async (req, res) => {
  try {
  const restaurantList = [];
  const snapshot = await admin.firestore().collection('restaurantes').get();
  snapshot.forEach((doc) => {
  restaurantList.push(doc.data());
  });
  res.json(restaurantList);
  } catch (err) {
  console.error(err);
  res.status(500).send('Erro ao buscar dados do restaurante');
  }
  });
app.listen(3000, () => {
  console.log('Servidor ON em http://localhost:3000')
});