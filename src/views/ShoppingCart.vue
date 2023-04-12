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
          <div v-for="dish in dishes" :key="dish.id">
            <div class="justify-between mb-6 rounded-lg bg-[#A62C21] p-6 shadow-md sm:flex sm:justify-start">
              <img :src="dish.url" :alt="dish.nome" class="w-full rounded-lg sm:w-40" />
              <div class="sm:ml-4 sm:flex md:w-3/4 sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-white font-bold ">{{dish.nome}}</h2>
                  <p class="mt-1 text-xxl text-white">{{dish.descricao}}</p>
                </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-5">
                  <div class="flex items-center border-gray-100">
                    <button @click="reduceAmount(dish)" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                    <!-- <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" /> -->
                    <div class="bg-gray-100 py-1 px-3 duration-100">{{dish.quantidade}}</div>
                    <button @click="increaseAmount(dish)" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                    <button @click="deleteItem(dish)">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="mt-4 flex items-center space-x-2">
                    <p class="text-white flex items-center">{{(parseFloat(dish.preco.replace(',','.'))*dish.quantidade).toFixed(2).replace('.',',')}} <span class="ml-1">R$</span></p>
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
            <p class="text-white">{{subtotal}} <span class="ml-1">R$</span></p>
          </div>
          <!-- Descontos aplicados -->
            <p class="text-white font-bold">Descontos aplicados:</p>
            <div v-for="active_coupon in active_coupons" :key="active_coupon.id">
              <div class="mb-2 d-flex">
                <div class="flex items-center ml-auto">
                  <div class="flex-grow"></div>
                  <button @click="retrieveCoupon(active_coupon)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-auto h-4 w-4 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <p class="text-white ml-auto">-{{active_coupon.valor.toFixed(2).replace('.',',')}} <span class="ml-1">R$</span></p>
                </div>
              </div>
            </div>
        
          <!-- Caixa de cupom desconto -->
          <div class="py-3 flex justify-between" >
              <form>   
                  <div class="relative">
                      <input id= "cupom_desconto" type="cupom" name="cupom" v-model="coupon" class="block w-100 p-10 pl-10 text-sm py-4 h-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Cupom de desconto..." required>
                  </div>
              </form>
              <button type="submit" class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 " @click="applyCoupon()" >Aplicar</button>
          </div> 
  
          <!-- Sub total com desconto -->
          <div v-if="(this.discount_applied == true)" class="mb-2 flex justify-between">
            <p class="text-white font-bold">Subtotal após desconto:</p>
            <p class="text-white">{{discounted_price}} <span class="ml-1">R$</span></p>
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
    <div v-if="this.empty">
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
                                    <button @click="closeModalCheckout" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5 mt-7" >
                                      Voltar
                                    </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  <div v-if="this.invalid_coupon">
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
                                    <button @click="closeModalCoupon" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5 mt-7" >
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
      dishes: [],
      subtotal: '0,00',
      discounted_price: '0,00',
      empty: false,
      invalid_coupon: false,
      coupons: [],
      active_coupons: [],
      discount_applied: false,
      router_price: 0,
      router_discount: 0,
      coupon : '',
      index: 0
     }
    },
    async mounted() {
      //Baixando e atribuindo dados do banco de dados
        //Baixando e atribuindo carrinho
        await axios.get('http://localhost:3000/shoppingcart')
          .then(response => {
            this.dishes = [...response.data];
          })
          .catch(error=> {
            console.error(error);
          });
      
        //Baixando e atribuindo cupons
        await axios.get('http://localhost:3000/getcoupons_used')
          .then(response => {
              this.active_coupons = response.data;
          })
          .catch(error => {
              console.error(error);
          });

      //Calculando valores a serem exibidos
        //Subtotal
        let subtotal = 0;
        this.dishes.forEach((doc) => {
          subtotal+= parseFloat(doc.preco.replace(',','.'))*doc.quantidade;
          this.subtotal = subtotal.toFixed(2).replace('.',',')
        });
        //Desconto (para subtotal descontado)
        let discount = 0;
        for (let i = 0; i < this.active_coupons.length; i++) {
          discount = discount + this.active_coupons[i].valor;
        }
        this.router_discount = discount;
        this.router_price = subtotal;
        //Subtotal descontado
        let discounted_price = 0;
        discounted_price = subtotal - discount;
        if (discounted_price < 0){
          discounted_price = 0
        }
        this.discounted_price = discounted_price.toFixed(2).replace('.',',')
      
      //Verificando se há cupons ou não para serem exibidos na tela
      if(this.active_coupons.length>0){
          this.discount_applied = true;
        }

    },
    methods: {
      //Funções para rota p/ outras páginas
      goToClientHome() {
                      this.$router.push('/clienthome');
                  },
      goToCheckout() {
        //Checa se há itens no carrinho ou não
        let items = 0;
        let dishes = this.dishes;
        dishes.forEach(() => {
          items = items + 1; 
        });
        //Se não houver itens no carrinho, um modal aparece
        if(items==0){this.empty = true}
        
        //Se houver itens no carrinho, se procede para checkout
        if(!this.empty){
          this.$router.push ({
                name: 'checkout',
                params: { pratos: qs.stringify(this.dishes),
                          subtotal: this.router_price,
                          desconto: this.router_discount,
                          restaurante: this.dishes[0].restaurante
                        }
              });
        }
      },
      closeModalCheckout(){
        this.empty = false;
      },
      closeModalCoupon(){
        this.invalid_coupon = false;
      },
      deleteItem(dish) {
        const dish_name = dish.nome
        axios.delete('http://localhost:3000/shoppingcart', {
          data: {
            nome: dish_name
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
      async locateFoodItem(dish){
          for (let i = 0; i < this.dishes.length; i++) {
            if(this.dishes[i].nome == dish.nome){
                this.index = i;
                this.found = true; 
              }
          }
      },
      async increaseAmount(dish) {
        await this.locateFoodItem(dish);
        axios.put('http://localhost:3000/shoppingcart1',  {nome: dish.nome, index: this.index}  )
            .then(response => {
              console.log(response.data.message);
              location.reload();
            })
            .catch(error => {
              console.error(error);
            });
      },
      async reduceAmount(dish) {
        if (dish.quantidade  == 1){
          this.deleteItem(dish);
        } 
        else {
          await this.locateFoodItem(dish);
          axios.put('http://localhost:3000/shoppingcart2',  {nome: dish.nome, index: this.index}  )
              .then(response => {
                console.log(response.data.message);
                location.reload();
              })
              .catch(error => {
                console.error(error);
              });
          }
      },
      async getCoupons() {
        // GET dos cupons disponíveis
        await axios.get('http://localhost:3000/getcoupons_available')
              .then(response => {
                  this.coupons = response.data;
              })
              .catch(error => {
                  console.error(error);
          });
          // GET dos cupons efetivados
          await axios.get('http://localhost:3000/getcoupons_used')
              .then(response => {
                  this.active_coupons = response.data;
              })
              .catch(error => {
                  console.error(error);
          });
      },
      async applyCoupon() {
          await this.getCoupons();

          let valid_coupon = false;
          for (let i = 0; i < this.coupons.length; i++) {
            if (this.coupons[i].nome === this.coupon) {
              valid_coupon = true;
              // Se o cupom existe, colocamos ele no array de cupons efetivados
              await axios.post('http://localhost:3000/getcoupons_used',  {nome: this.coupons[i].nome, valor: this.coupons[i].valor}  ) //pode dar erro
                .then(response => {
                  console.log(response.data.message);
                })
                .catch(error => {
                  console.error(error);
                });
                
              // Cupom sai do array de cupons disponíveis
              await axios.delete('http://localhost:3000/getcoupons_available', {
                data: {
                nome: this.coupon
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
            if (i == (this.coupons.length - 1) && !valid_coupon ){
              this.invalid_coupon = true;
            }
          }
          // Só entra nesse if se o array de cupons (disponíveis) está vazio, então qualquer cupom é inválido
          // A booleana cupom_valido só vira true caso o array não seja vazio e tenha um cupom válido
          if (this.coupons.length == 0 && !valid_coupon ){
              this.invalid_coupon = true;
            }   
      },
      async retrieveCoupon(active_coupon){
        //Botar o cupom no array de cupons disponíveis
        await axios.post('http://localhost:3000/addtocoupons_avaliable',  {nome: active_coupon.nome, valor: active_coupon.valor})
                .then(response => {
                  console.log(response.data.message);
                })
                .catch(error => {
                  console.error(error);
                });
  
        //Remover o cupom do array de cupons efetivados
        await axios.delete('http://localhost:3000/removecoupons_used', { data: {nome: active_coupon.nome}})
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
</script>"