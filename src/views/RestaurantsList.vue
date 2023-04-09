<template>
    
    <div class="bg-[#261918] min-h-screen ">
        <NavBar /> <!-- NavBar dos componentes-->

        <div class="flex items-center w-full mb-3 pt-32">
            <button @click="goToHome()"> <!--  Botão de voltar -->
                <img class="ml-4 sm:w-12 sm:h-12 w-8 h-8 object-contain" src="../assets/img/back-button.png" alt="back-button">
            </button> 
            
            <!-- Título da página-->
            <div class="ml-7">
                <h1 class="text-white font-bold sm:text-2xl text-xl"> Restaurantes </h1>
            </div> 
        </div> 

        <!-- Linha -->
        <div class="flex items-center justify-center mx-auto mb-12">
            <hr class="w-11/12 items-center">
        </div>
        

      <div class="mx-auto max-w-8xl justify-center px-6 md:flex md:space-x-7 xl:px-0">
        <div class="rounded-lg md:w-9/10">
          <div v-for="restaurant in restaurants" :key="restaurant.id">
            <div class="mb-6 rounded-lg bg-[#A62C21] p-6 shadow-md">
              <div class="justify-between mb-6 rounded-lg p-6 sm:flex sm:justify-start">
              <img :src="restaurant.logo" :alt="restaurant.nome_loja" class="w-full rounded-lg sm:w-40 px-3" />
              <div class="sm:ml-4 sm:flex md:w-3/4 sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-white text-xl font-bold ">{{restaurant.nome_loja}}</h2>
                  <p class="mt-1 text-base text-white">{{restaurant.especialidade}}</p>
                  <p class="mt-1 text-base text-white">{{restaurant.cidade}}</p>
                <!-- </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-5">
                  </div>
                  <div class="mt-4 flex items-center space-x-2">
                    <p class="text-white flex items-center">{{(parseFloat(prato.preco.replace(',','.'))*prato.quantidade).toFixed(2).replace('.',',')}} <span class="ml-1">R$</span></p>
                    
                  </div> 
                </div> -->
                </div>
              </div>

                
            </div> <!-- Aqui termina a caixa do restaurante -->
            <div class=" bg-[#85231A] flex flex-wrap items-center space-x-12 justify-center py-4 bg-cover inset-x-0  rounded-lg p-3" > <!-- Flexbox do cardápio de pratos-->
                  <div v-for="prato in restaurant.pratos" :key="prato.id">
                  <button class=" w-56 h-56 bg-[#541F1B] border-gray-200 rounded-lg shadow transform hover:scale-105 transition duration-300 ">
                    <a href="#">
                      <img :src="prato.url" :alt="prato.nome" class= ' object-scale-down h-28 w-full  mx-auto block'>
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-base font-semibold tracking-tight text-white ">{{prato.nome}}</h5>
                        </a>
                        <div class="text-xs text-white">{{prato.descricao}} </div>
                        <div class="flex items-center justify-between p-1">
                            <div class="text-lg font-bold text-white">{{prato.preco}} </div>
                            <a href="#" class="text-white bg-blue-700   font-medium rounded-lg text-sm px-1 py-1.5 text-center ">Add to cart</a>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
            </div>
            
            
          </div>
        </div>
      </div>
  </div> 
</template>

<script>

    import NavBar from '@/components/NavBar.vue'
    import axios from 'axios';
    
    export default {
        name: 'RestaurantsList',
        components: {
        NavBar,
        },
        data() {
            return {
                restaurants: []
            }
        },
        async mounted() {
        await axios.get('http://localhost:3000/restaurants-list')
            .then(response => {
                this.restaurants = [...response.data];
               
            })
            .catch(error=> {
                console.error(error);
            });
            console.log(this.restaurants);
        },
        methods: {
          goToHome() {
          this.$router.push('/clienthome');
          },
          
        }
        
        
    }
</script>