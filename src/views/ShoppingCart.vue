<template>
  <body>
    <div class="min-h-screen bg-[#541F1B] pt-20">
      <NavBar />    
      <button @click='goToClientHome()' class="absolute left-10 top-32 focus:outline-none bg-[#A62C21] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-l inline-block px-6 py-1 mr-10 mb-2 ">
        <img src="@\assets\img\Home_Icon.png" alt="Descrição da imagem" class=" h-10 w-11" >
      </button>
      <h1 class="mt-16 mb-10 text-center text-3xl font-bold text-white">Meu carrinho</h1>
      <div class="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-7 xl:px-0">
        <div class="rounded-lg md:w-2/3">
          <div v-for="prato in pratos" :key="prato.id">
            <div class="justify-between mb-6 rounded-lg bg-[#A62C21] p-6 shadow-md sm:flex sm:justify-start">
              <img :src="prato.url" :alt="prato.nome" class="w-full rounded-lg sm:w-40" />
              <div class="sm:ml-4 sm:flex md:w-3/4 sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-white font-bold ">{{prato.nome}}</h2>
                  <p class="mt-1 text-xxl text-white">{{prato.descricao}}</p>
                </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-5">
                  <div class="flex items-center border-gray-100">
                    <button @click="reduceAmount(prato)" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                    <!-- <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" /> -->
                    <div class="bg-gray-100 py-1 px-3 duration-100">{{prato.quantidade}}</div>
                    <button @click="increaseAmount(prato)" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                    <button @click="deleteItem(prato)">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="mt-4 flex items-center space-x-2">
                    <p class="text-white flex items-center">{{(parseFloat(prato.preco.replace(',','.'))*prato.quantidade).toFixed(2).replace('.',',')}} <span class="ml-1">R$</span></p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Sub total -->
        <div class="mt-6 h-full rounded-lg border bg-[#A62C21] p-6 shadow-md md:mt-0 md:w-2/4">
          <div class="mb-2 flex justify-between">
            <p class="text-white font-bold">Subtotal:</p>
            <p class="text-white">{{precoTotal}} <span class="ml-1">R$</span></p>
          </div>
          <!-- Descontos aplicados -->
            <p class="text-white font-bold">Descontos aplicados:</p>
            <div v-for="cupom_efetivado in cuponsEfetivados" :key="cupom_efetivado.id">
              <div class="mb-2 d-flex">
                <div class="flex items-center ml-auto">
                  <div class="flex-grow"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-auto h-4 w-4 cursor-pointer duration-150 hover:text-red-500" @click="retrieveCoupon(cupom_efetivado)">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p class="text-white ml-auto">-{{cupom_efetivado.valor.toFixed(2).replace('.',',')}} <span class="ml-1">R$</span></p>
                </div>
              </div>
            </div>
        
          <!-- Caixa de cupom desconto -->
          <div class="py-3 flex justify-between" >
              <form>   
                  <div class="relative">
                      <input id= "cupom_desconto" type="cupom" name="cupom" v-model="cupom" class="block w-100 p-10 pl-10 text-sm py-4 h-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Cupom de desconto..." required>
                  </div>
              </form>
              <button type="submit" class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 " @click="getDiscount()" >Aplicar</button>
          </div> 
  
          <!-- Sub total com desconto -->
          <div v-if="(this.descontoAplicado == true)" class="mb-2 flex justify-between">
            <p class="text-white font-bold">Subtotal após desconto:</p>
            <p class="text-white">{{precoDescontado}} <span class="ml-1">R$</span></p>
          </div>
  
          <div class="flex justify-between">
            <!-- <p class="text-white">Shipping</p> -->
            <!-- <p class="text-white">$4.99</p> -->
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-white">Taxa de entrega:</p>
            <p class="flex flex-col text-white">Confirmação na próxima etapa</p>
            <!--<p class="text-white font-bold">Total</p>-->
            <!--<div class="">
              <p class="mb-1 text-white font-bold">$134.98 USD</p>
              <p class="text-sm text-white">including VAT</p>
            </div>-->
          </div>
          <button @click="goToCheckout" class="mt-2 w-full rounded-md bg-[#F26938] py-1.5 font-medium text-blue-50 hover:bg-[#C55730]">Check out</button>
        </div>
      </div>
    </div>
    <div v-if="this.vazio">
              <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                  <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                      <div class="modal-container bg-white w-[300px] mx-auto h-[175px] rounded-[20px] shadow-lg z-50 overflow-y-auto">
                          <div class="modal-content py-4 text-left px-6">
                              <div class="modal-body mt-2">
                                  <!-- Conteúdo do modal aqui -->
                                  <div class="text-center font-bold">
                                      <p>Preencha seu carrinho antes de proceder para checkout!</p>
                                  </div>
                                  <div class="flex justify-center">
                                    <button @click="fecharModal" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5 mt-7" >
                                      Voltar
                                    </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  <div v-if="this.cupom_invalido">
              <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                  <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                      <div class="modal-container bg-white w-[300px] mx-auto h-[175px] rounded-[20px] shadow-lg z-50 overflow-y-auto">
                          <div class="modal-content py-4 text-left px-6">
                              <div class="modal-body mt-2">
                                  <!-- Conteúdo do modal aqui -->
                                  <div class="text-center font-bold">
                                      <p>Cupom inválido!</p>
                                  </div>
                                  <div class="flex justify-center">
                                    <button @click="fecharModalCupom" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5 mt-7" >
                                      Voltar
                                    </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  </body>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import axios from 'axios';
  import qs from 'qs';
  
  export default {
    name: 'ShoppingCart',
    components: {
      NavBar
    },
    data() {
     return {
      pratos: [],
      precoTotal: '0,00',
      precoDescontado: '0,00',
      vazio: false,
      cupom_invalido: false,
      itens: 0,
      cupons: [],
      cuponsEfetivados: [],
      descontoAplicado: false,
      precoRota: 0,
      descontoRota: 0,
      cupom : ''
     }
    },
    // computed: {
    //   pratosFiltrados() {
    //     return this.pratos.filter(prato => prato.no_carrinho === true);
    //   },
    // },
    async mounted() {
      await axios.get('http://localhost:3000/shoppingcart')
        .then(response => {
          this.pratos = [...response.data];
          // console.log(this.pratos)
        })
        .catch(error=> {
          console.error(error);
        });
        // console.log("Passou pelo axios")
        // console.log(this.pratos)

        let precoTotal = 0;
        this.pratos.forEach((doc) => {
          precoTotal+= parseFloat(doc.preco.replace(',','.'))*doc.quantidade;
          this.precoTotal = precoTotal.toFixed(2).replace('.',',')
          console.log(this.precoTotal) 
        });
        this.precoRota = precoTotal;
  
        // A partir daqui é o cálculo do subtotal com desconto
        await axios.get('http://localhost:3000/getcoupons_used')
          .then(response => {
              this.cuponsEfetivados = response.data;
          })
          .catch(error => {
              console.error(error);
          });
  
        // Calcula o total do desconto
        let desconto = 0;
        for (let i = 0; i < this.cuponsEfetivados.length; i++) {
          desconto = desconto + this.cuponsEfetivados[i].valor;
        }
        this.descontoRota = desconto;
  
        let precoDescontado = 0;
        precoDescontado = precoTotal - desconto;
        if (precoDescontado < 0){
          precoDescontado = 0
        }
        this.precoDescontado = precoDescontado.toFixed(2).replace('.',',')
  
        console.log(this.precoDescontado)
  
        // Se houver cupons aplicados, o novo valor é mostrado na tela
        if(this.cuponsEfetivados.length>0){
          this.descontoAplicado = true;
        }
      //   for(let objeto in this.pratos){
      //   console.log('Mensagem');
      //   this.precoTotal+= parseFloat(objeto.preco);      
      // }
      console.log(this.precoTotal)
      console.log(this.precoDescontado)
      console.log('rota:')
      console.log(this.precoRota)
      console.log(this.descontoRota)
      console.log(this.pratos[0].restaurante)
    },
    methods: {
      goToClientHome() {
                      this.$router.push('/clienthome');
                  },
      goToCheckout() {
        this.pratos.forEach(() => {
          this.itens+= 1; 
        });
        if(this.itens==0){this.vazio = true}
        if(!this.vazio){
          this.$router.push ({
                name: 'checkout',
                params: { pratos: qs.stringify(this.pratos),
                          subtotal: this.precoRota,
                          desconto: this.descontoRota,
                          restaurante: this.pratos[0].restaurante
                        }
              });
        }
      },
      fecharModal(){
        this.vazio = false;
      },
      fecharModalCupom(){
        this.cupom_invalido = false;
      },
      deleteItem(prato) {
        const nomePrato = prato.nome
        axios.delete('http://localhost:3000/shoppingcart', {
          data: {
            nome: nomePrato
          }
        })
        .then(response => {
          console.log(response.data)
          location.reload();
        })
        .catch(error => {
          console.error(error)
        })
      },
      increaseAmount(prato) {
        console.log('mais')
        let i = 0;
        let index = 0;
        this.pratos.forEach((doc) => {
            if(doc.nome == prato.nome){
              index = i;
              this.found = true; 
            }
            i = i + 1;
          });
        axios.put('http://localhost:3000/shoppingcart1',  {nome: prato.nome, index: index}  )
            .then(response => {
              console.log(response.data.message);
              location.reload();
            })
            .catch(error => {
              console.error(error);
            });
      },
      reduceAmount(prato) {
        if (prato.quantidade  == 1){
          this.deleteItem(prato);
        } else {
        console.log('menos')
        let i = 0;
        let index = 0;
        this.pratos.forEach((doc) => {
            if(doc.nome == prato.nome){
              index = i;
              this.found = true; 
            }
            i = i + 1;
          });
        axios.put('http://localhost:3000/shoppingcart2',  {nome: prato.nome, index: index}  )
            .then(response => {
              console.log(response.data.message);
              location.reload();
            })
            .catch(error => {
              console.error(error);
            });
        }
      },
      async getDiscount() {
          //const cupom  = this;
          console.log(this.cupom)
          console.log(this.cupom)
          console.log(this.cupom)
          // GET dos cupons disponíveis
          await axios.get('http://localhost:3000/getcoupons_available')
              .then(response => {
                  this.cupons = response.data;
              })
              .catch(error => {
                  console.error(error);
          });
          console.log("depois do 1 get")
          // GET dos cupons efetivados
          await axios.get('http://localhost:3000/getcoupons_used')
              .then(response => {
                  this.cuponsEfetivados = response.data;
              })
              .catch(error => {
                  console.error(error);
          });
          console.log("depois do 2 get")
          let cupom_valido = false;
          for (let i = 0; i < this.cupons.length; i++) {
            console.log("entrou aq")
            console.log(this.cupons[i].nome)
            console.log(this.cupom)
            if (this.cupons[i].nome === this.cupom) {
              cupom_valido = true;
              // Se o cupom existe, colocamos ele no array de cupons efetivados
              await axios.post('http://localhost:3000/getcoupons_used',  {nome: this.cupons[i].nome, valor: this.cupons[i].valor}  ) //pode dar erro
                .then(response => {
                  console.log(response.data.message);
                  console.log('Entrou aqui 0000')
                })
                .catch(error => {
                  console.error(error);
                  console.log('Entrou aqui 9999')
                });
  
                
              // Cupom sai do array de cupons disponíveis
              await axios.delete('http://localhost:3000/getcoupons_available', {
                data: {
                nome: this.cupom
                }
                })
                .then(response => {
                    console.log(response.data)
                    location.reload();
                })
                .catch(error => {
                    console.error(error)
                })
            }
            // Chega no final do array e não tem nenhum cupom com esse nome, o cupom é inválido
            if (i == (this.cupons.length - 1) && !cupom_valido ){
              console.log("entrou nesse if")
              this.cupom_invalido = true;
            }
  
          }
          // Só entra nesse if se o array de cupons (disponíveis) está vazio, então qualquer cupom é inválido
          // A booleana cupom_valido só vira true caso o array não seja vazio e tenha um cupom válido
          if (this.cupons.length == 0 && !cupom_valido ){
              console.log("entrou nesse if")
              this.cupom_invalido = true;
            }   
      },
      async retrieveCoupon(cupom_efetivado){
        //Botar o cupom no array de cupons disponíveis
        await axios.post('http://localhost:3000/addtocoupons_avaliable',  {nome: cupom_efetivado.nome, valor: cupom_efetivado.valor})
                .then(response => {
                  console.log(response.data.message);
                })
                .catch(error => {
                  console.error(error);
                });
  
        //Remover o cupom do array de cupons efetivados
        await axios.delete('http://localhost:3000/removecoupons_used', { data: {nome: cupom_efetivado.nome}})
          .then(response => {
              console.log(response.data)
              location.reload();
          })
          .catch(error => {
              console.error(error)
          }) 
      }
    }
  }
  </script>
