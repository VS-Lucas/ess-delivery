<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>

<template>
   <div class="home-restaurante bg-[#261918]">

      <RestaurantNavBar/>

      <div class="p-4">

         <div class="p-4 mt-16" style="font-family: Montserrat;">

            <div class="grid grid-cols-4 gap-4 mb-7">

               <div class="flex items-start justify-start" style="font-weight: 700;">
                  <h1 class="text-white" style="font-size: 30px;">Dashboard</h1>
               </div>

               <div class="col-end-5">
                  <label for="table-search" class="sr-only">Search</label>
                     <div class="flex items-center justify-center relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                           <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[10px] w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar...">
                     </div>
               </div>

               <p class="flex items-start justify-start text-white" style="font-size: 15px; font-weight: 600;">Data (ver como fazer)</p>

            </div>

            <div class="grid grid-cols-4 gap-4 pb-2 text-white" style="font-size: 18px; font-weight: 700;">
               
               <h2 class="flex items-start justify-start col-start-0 col-span-2">Média de pedidos</h2>
               <h2 class="flex items-start justify-start">Total de pedidos</h2>
               <h2 class="flex items-start justify-start">Pratos mais consumidos</h2>

            </div>

            <div class="grid grid-cols-4 gap-4 h-36">

               <div class="flex items-center justify-center rounded bg-gray-50 h-32 dark:bg-gray-800 col-start-0 col-span-2">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
               </div>

               <div class="flex items-center justify-center rounded bg-gray-50 h-32 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
               </div>

               <div class="flex items-center justify-center rounded bg-gray-50 h-32 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
               </div>
               
            </div>
         </div>
      </div>

   </div>
</template>

<script>
import RestaurantNavBar from '@/components/RestaurantNavBar.vue'

export default {
  name: 'ClientHome',
  components: {
      RestaurantNavBar
  },
  methods:{
    goToShoppingCart() {
    this.$router.push('/shoppingcart');
    }
  }
}
</script>