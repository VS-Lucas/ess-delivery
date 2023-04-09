


<template>
    
    <div class="bg-[#261918] min-h-screen ">
        <NavBar /> <!-- NavBar dos componentes-->


        <div class="flex items-center w-full mb-3 pt-32">
            <div> <!--  Botão de voltar -->
                <a href="javascript:history.back()">
                    <img class="ml-4 sm:w-12 sm:h-12 w-8 h-8 object-contain" src="../assets/img/back-button.png" alt="back-button">
                </a>
            </div> 
            
            <!-- Título da página-->
            <div class="ml-7">
                <h1 class="text-white font-bold sm:text-2xl text-xl"> Restaurantes </h1>
            </div> 
        </div> 

        <!-- Linha -->
        <div class="flex items-center justify-center mx-auto mb-12">
            <hr class="w-11/12 items-center">
        </div>
        

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
                </div>
                <div class="mt-4 flex items-center space-x-2">
                  <p class="text-white flex items-center">{{(parseFloat(prato.preco.replace(',','.'))*prato.quantidade).toFixed(2).replace('.',',')}} <span class="ml-1">R$</span></p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div> <!--background-->
</template>

<style scoped>

</style>

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
        mounted() {
        axios.get('http://localhost:3000/restaurants-list')
            .then(response => {
                this.restaurants = [...response.data];
               
            })
            .catch(error=> {
                console.error(error);
            });
            console.log(this.restaurants);
        },
        
    }
</script>