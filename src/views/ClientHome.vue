<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>

<template>
    <div class="clienthome bg-[#261918] min-h-screen relative">
       <NavBar /> <!-- NavBar dos componentes-->
        <div class="absolute left-40 top-32"> <!-- Button "Meus Pedidos"-->
          <button type="button" @click='goToOrderHistory()' class="focus:outline-none text-white bg-[#541F1B] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-l px-7 py-3 mr-10 mb-2">Meus pedidos</button>
        </div>
  
        <div class= "absolute right-72 top-32"> <!-- Search Bar, onde muda o tamanho é em pl-10 na linha 15, e na linha 8 define a posição, relativa a div da linha 2-->
          <form>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-100 p-10 pl-10 text-sm py-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." required>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </form>
        </div>
  
     <!-- Botão "Carrinho"-->
    <button  @click='goToShoppingCart()' type="submit" class=" hover:bg-red-800 focus:ring-4 absolute right-32 top-32 focus:outline-none bg-[#A62C21]  focus:ring-red-300 font-medium rounded-lg text-l inline-block px-6 py-1 mr-10 mb-2 ">
        <img src="@\assets\img\carrinho.png" alt="Carrinho de Compras" class=" h-10 w-11" >
    </button>


    <div class=" mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-7 xl:px-0 pt-52 " > <!-- Cards dos restaurantes e das comidas-->
      <!-- Botão dos restaurantes -->
        <div>
          <button class="focus:outline-none focus:ring-4 focus:ring-red-300">  
            <img src="@\assets\img\restaurantes.png" alt="Descrição da imagem" style="width: 550px;" class="rounded-lg transform hover:scale-105 transition duration-300"> <!-- fica um pouco maior quando passa o mouse por cima-->
          </button> 
        </div>
      
      <!-- Botão das comidas-->
        <div>
          <button class="focus:outline-none focus:ring-4 focus:ring-red-300">  
            <img src="@\assets\img\comidas.png" alt="Descrição da imagem" style="width: 550px;" class="rounded-lg transform hover:scale-105 transition duration-300"> <!-- fica um pouco maior quando passa o mouse por cima-->
          </button> 
        </div>
    </div>

    <!-- <div class=" absolute flex justify-center space-x-10 bottom-12 bg-cover inset-x-0" style="font-family: Montserrat">-->
      <!-- Flexbox do cardápio-->
        <!-- <div class=" absolute flex   items-center justify-center  bottom-10 bg-cover inset-x-0 " >
          <div v-for="prato in pratos" :key="prato.id">
            <button class="focus:outline-none text-white bg-[#541F1B] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-l px-7 py-3 mr-10 mb-2 max-w-xs transform hover:scale-105 transition duration-300"
            @click="addToCart(prato)">
              <h2 style="font-family: 'Montserrat', sans-serif;  font-weight: 600; font-size: 1.2rem; line-height: 1.5rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ prato.nome }}</h2>
              <img :src="prato.url" :alt="prato.nome" class= ' object-scale-down h-28 w-full mx-auto block'>
              <h2 style="font-size: 0.9rem; line-height: 1.2rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ prato.descricao }}</h2>
              <h2 style="font-size: 1rem; line-height: 1.2rem;">{{ prato.preco }}</h2>
            </button>
          </div>
        </div> -->

      <div class=" flex flex-wrap items-center space-x-12 justify-center py-4 bg-cover inset-x-0  " > <!-- Flexbox do cardápio de pratos-->
      <div v-for="prato in pratos" :key="prato.id">
      <button class=" w-56 h-56 bg-[#541F1B] border-gray-200 rounded-lg shadow transform hover:scale-105 transition duration-300 " @click="addToCart(prato)">
        <a href="#">
          <img :src="prato.url" :alt="prato.nome" class= ' object-scale-down h-28 w-full  mx-auto block'>
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-lg font-semibold tracking-tight text-white ">{{prato.nome}}</h5>
            </a>
            <div class="text-xs text-white">{{prato.descricao}} </div>
            <div class="flex items-center justify-between p-1">
                <div class="text-xl font-bold text-white">{{prato.preco}} </div>
                <a href="#" class="text-white bg-blue-700   font-medium rounded-lg text-sm px-1 py-1.5 text-center ">Add to cart</a>
            </div>
          </div>
        </button>
      </div>
    </div>
    

    

    </div>
  
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import axios from 'axios';

  export default {
    name: 'ClientHome',
    components: {
      NavBar,
    },
    data() {
    return {
      pratos: [],
      carrinho: [],
      found: false
    }
  },
  mounted() {
    axios.get('http://localhost:3000/clienthome1')
      .then(response => {
        this.carrinho = [...response.data];
      })
      .catch(error=> {
        console.error(error);
      });
    axios.get('http://localhost:3000/clienthome')
      .then(response => {
        this.pratos = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
    methods:{
      goToShoppingCart() {
      this.$router.push('/shoppingcart');
      },
      
      goToOrderHistory() {
      this.$router.push('/order-history');
      },
      update(){
        console.log('updated')
        axios.get('http://localhost:3000/clienthome1')
        .then(response => {
          this.carrinho = [...response.data];
        })
        .catch(error=> {
          console.error(error);
        });
      },

      addToCart(prato) {
        this.update();
        console.log('addToCart')
        console.log(this.carrinho)
        if (this.carrinho.length == 0){
          console.log('length == 0')
          axios.post('http://localhost:3000/clienthome',  {nome: prato.nome, descricao: prato.descricao, preco: prato.preco, url: prato.url, quantidade: 1}  )
          .then(response => {
            console.log(response.data.message);
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        console.log("length !== 0")
        let i = 0;
        let index = 0;
        this.carrinho.forEach((doc) => {
          console.log(doc.nome)
          if(doc.nome == prato.nome){
            console.log('Está no carrinho')
            index = i;
            this.found = true; 
          }
          i = i + 1;
        });
        if(!this.found){
          console.log('not found');
          axios.post('http://localhost:3000/clienthome',  {nome: prato.nome, descricao: prato.descricao, preco: prato.preco, url: prato.url, quantidade: 1}  )
          .then(response => {
            console.log(response.data.message);
          })
          .catch(error => {
            console.error(error);
          });
        }
        if(this.found){
          console.log('found');
          console.log(index)
          axios.put('http://localhost:3000/clienthome2',  {nome: prato.nome, index: index}  )
          .then(response => {
            console.log(response.data.message);
          })
          .catch(error => {
            console.error(error);
          });
        }
      }
      this.found = false;
      location.reload();
      }
    }
  }
  </script>


