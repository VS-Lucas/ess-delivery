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
          <!-- <div v-for="prato in pratos" :key="prato.id">
            <div class="justify-between mb-6 rounded-lg bg-[#A62C21] p-6 shadow-md sm:flex sm:justify-start">
              <img :src="prato.url" :alt="prato.nome" class= ' object-scale-down h-28 w-full mx-auto block'>
              <h2 style="font-family: 'Montserrat', sans-serif;  font-weight: 600; font-size: 1.2rem; line-height: 1.5rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ prato.nome }}</h2>
              
              <h2 style="font-size: 0.9rem; line-height: 1.2rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ prato.descricao }}</h2>
              <h2 style="font-size: 1rem; line-height: 1.2rem;">{{ prato.preco }}</h2>
            </div>
          </div> -->
          <div class="justify-between mb-6 rounded-lg bg-[#A62C21] p-6 shadow-md sm:flex sm:justify-start">
            <img :src="prato.url" :alt="prato.nome" class="w-full rounded-lg sm:w-40" />
            <div class="sm:ml-4 sm:flex md:w-3/4 sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-white font-bold text-white">{{prato.nome}}</h2>
                <p class="mt-1 text-xxl text-white">{{prato.descricao}}</p>
              </div>
              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-5">
                <div class="flex items-center border-gray-100">
                  <!-- <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span> -->
                  <!-- <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" /> -->
                  <!-- <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span> -->
                </div>
                <div class="mt-4 flex items-center space-x-2">
                  <p class="text-white flex items-center">{{prato.preco}} <span class="ml-1">R$</span></p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 " @click="deleteItem(prato)">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
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
          <p class="text-white">{{precoTotal.toFixed(2)}} <span class="ml-1">R$</span></p>
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
                                
                                <!-- <div class="text-center">
                                    <p class="mt-5">Deseja acompanhá-lo?</p>
                                </div>
                                <div class="grid grid-cols-2 mt-2">
                                    <div class="col-span-1">
                                        <button @click="OrderConfirmation" type="button" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5">
                                            Voltar
                                        </button>
                                    </div>
                                    <div class="col-start-3">
                                        <button @click="toTracking" type="button" class="bg-[#9DBF69] hover:bg-green-500 rounded-lg text-sm px-4 py-2.5">
                                            <p class="text-black font-bold">Acompanhar</p>
                                        </button>
                                    </div>
                                </div> -->
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
    precoTotal: 0,
    vazio: false,
    itens: 0
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
    
      this.pratos.forEach((doc) => {
        this.precoTotal+= parseFloat(doc.preco);
        console.log(parseFloat(doc.preco)) 
      });

    //   for(let objeto in this.pratos){
    //   console.log('Mensagem');
    //   this.precoTotal+= parseFloat(objeto.preco);      
    // }
    console.log(this.precoTotal)
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
              params: { pratos: qs.stringify(this.pratos)}
            });
      }
    },
    fecharModal(){
      this.vazio = false;
    },
    deleteItem(prato) {
      const nomePrato = prato.nome
      console.log(prato.nome);
      console.log(prato.nome);
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
    }

  }
}
</script>