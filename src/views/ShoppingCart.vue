<template>
<body>
  <div class="h-screen bg-[#541F1B] pt-20">
    <NavBar />    
    <button @click='goToClientHome()' class="absolute left-10 top-32 focus:outline-none bg-[#A62C21] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-l inline-block px-6 py-1 mr-10 mb-2 ">
      <img src="@\assets\img\Home_Icon.png" alt="Descrição da imagem" class=" h-10 w-11" >
    </button>
    <h1 class="mt-16 mb-10 text-center text-3xl font-bold text-white">Meu carrinho</h1>
    <div class="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-7 xl:px-0">
      <div class="rounded-lg md:w-2/3 bg-[#062C21]">
        <!-- <div class="justify-between mb-6 rounded-lg bg-[#A62C21] p-6 shadow-md sm:flex sm:justify-start">
          <img src="https://static.wixstatic.com/media/f9b308_1c5f63bb08554629a0bad7ea90247378~mv2.jpg/v1/fill/w_925,h_615,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f9b308_1c5f63bb08554629a0bad7ea90247378~mv2.jpg" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex md:w-3/4 sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-white font-bold text-white">Nigiri de Salmão (6 uni.)</h2>
              <p class="mt-1 text-xs text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-5">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="mt-4 flex items-center space-x-2">
                <p class="text-white flex items-center">24.90 <span class="ml-1">R$</span></p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-between mb-6 rounded-lg bg-[#A62C21] p-6 shadow-md sm:flex sm:justify-start">
          <img src="https://www.casaredo.com/blog/wp-content/uploads/2022/05/receitas-gourmet-lamen.jpg" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-white font-bold text-white">Yakissoba completo</h2>
              <p class="mt-1 text-xs text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-white flex items-center">44.90 <span class="ml-1">R$</span></p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-[#A62C21] p-6 shadow-md md:mt-0 md:w-2/4">
        <div class="mb-2 flex justify-between">
          <p class="text-white font-bold">Subtotal:</p>
          <p class="text-white">69.80 <span class="ml-1">R$</span></p>
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
</body>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import axios from 'axios';

export default {
  name: 'ShoppingCart',
  components: {
    NavBar
  },
  data() {
   return {
    pratos: []
   }
  },
  mounted() {
    axios.get('http://localhost:3000/shoppingcart')
      .then(response => {
        this.pratos = [...response.data];
        console.log(this.pratos)
      })
      .catch(error=> {
        console.error(error);
      });
  },
  methods: {
    goToClientHome() {
                    this.$router.push('/clienthome');
                },
    goToCheckout() {
      this.$router.push ({
            name: 'checkout',
            params: { pratos: this.pratos}
          });
    }
  }
}
</script>